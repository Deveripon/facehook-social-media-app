import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { get_profile_api_url } from "../constant";
import { useProfile } from "../hooks/useProfile";
import { actions } from "../actions/actions";
import ProfileInfo from "../components/profile/ProfileInfo";
import MyPosts from "../components/profile/MyPosts";
import ProfilePageSkeliton from "../components/profile/ProfilePageSkeliton";

const ProfilePage = () => {
    const { auth } = useAuth();
    const api = useAxios();
    const loggedInUserId = auth?.user?.id;
    const { state, dispatch } = useProfile();
    const [posts, setPosts] = useState(state?.posts);

    useEffect(() => {
        let ignore = false;
        //make an api call to get user profile
        // this api call needs auth token
        const getUserProfile = async () => {
            dispatch({ type: actions.profileActions.DATA_FATCHING });
            try {
                const response = await api.get(
                    `${get_profile_api_url}/${loggedInUserId}`
                );

                if (!ignore) {
                    dispatch({
                        type: actions.profileActions.DATA_FETCHED,
                        data: {
                            user: response.data.user,
                            posts: response.data.posts,
                        },
                    });
                    setPosts(response.data.posts);
                }
            } catch (error) {
                dispatch({
                    type: actions.profileActions.DATA_FETCH_ERROR,
                    error: error,
                });
            }
        };
        getUserProfile();
        return () => {
            ignore = true;
        };
    }, [loggedInUserId, api, dispatch]);

    if (state?.loading) {
        return <ProfilePageSkeliton />;
    }
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} />
        </div>
    );
};

export default ProfilePage;
