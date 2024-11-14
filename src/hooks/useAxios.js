import { useEffect } from "react";
import api from "../api/axiosInstance";
import useAuth from "./useAuth";
import { api_base_url } from "../constant";
import axios from "axios";

const useAxios = () => {
    const { auth, setAuth } = useAuth();
    useEffect(() => {
        // intercept when request to set Authorization header with access token and ruturn the request
        const requestInterceptor = api.interceptors.request.use(
            (config) => {
                const accessToken = auth?.accessToken;
                console.log(`Request Time token = ${accessToken}`);
                if (accessToken) {
                    config.headers.Authorization = `Bearer ${accessToken}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
        // intercept the response and check that if their is an Unauthorized error call the refresh token api and get new access token and set it again to Authorization header and _retry the original request with new access token
        const responseInterceptor = api.interceptors.response.use(
            (response) => response,
            async (error) => {
                //get original request
                const originalRequest = error?.config;
                if (
                    error?.response?.status === 401 &&
                    !originalRequest._retry // check the error status and if _retry is false
                ) {
                    originalRequest._retry = true; //set retry to true
                    try {
                        const refreshToken = auth?.refreshToken; // get refresh token from auth

                        // request new access token with refresh token
                        const response = await axios.post(
                            `${api_base_url}/auth/refresh-token`,
                            { refreshToken }
                        );
                        const { token } = response.data;
                        console.log(
                            `Generated Token with refreshToken = ${token}`
                        );
                        //set new auth token to auth
                        setAuth({ ...auth, accessToken: token });

                        // set new access token to Authorization header
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        return axios(originalRequest);
                    } catch (error) {
                        console.log(error);
                        throw error;
                    }
                }
                return Promise.reject(error);
            }
        );

        // effect clean up
        return () => {
            api.interceptors.request.eject(requestInterceptor);
            api.interceptors.response.eject(responseInterceptor);
        };
    }, [auth?.accessToken, auth, setAuth]);

    return api;
};

export default useAxios;
