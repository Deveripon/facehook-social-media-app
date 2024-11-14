import axios from "axios";
import { login_api_url } from "../constant";

// handle login call
export const login = async (payload) => {
    try {
        const response = await axios.post(login_api_url, payload);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};
