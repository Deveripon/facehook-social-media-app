import CreateNewPost from "../components/posts/CreateNewPost";
import PostList from "../components/posts/PostList";
import { useEffect } from "react";
import { actions } from "../actions/actions";
import useAxios from "../hooks/useAxios";
import { api_base_url } from "../constant";
import PostSkeliton from "../components/profile/PostSkeliton";
import usePost from "../hooks/usePost";

const HomePage = () => {
    const { state, dispatch } = usePost();
    const api = useAxios();
    console.log(state);

    useEffect(() => {
        let ignore = false;
        async function getAllPost() {
            dispatch({ type: actions.postActions.POST_DATA_FATCHING });
            try {
                const response = await api.get(`${api_base_url}/posts`);
                if (!ignore) {
                    dispatch({
                        type: actions.postActions.POST_DATA_FATCHED,
                        data: response.data,
                    });
                }
            } catch (error) {
                dispatch({
                    type: actions.postActions.POST_DATA_FETCH_ERROR,
                    error: error,
                });
            }
        }
        getAllPost();
        return () => (ignore = true);
    }, [api, dispatch]);
    return (
        <div>
            <CreateNewPost />
            {state?.loading ? (
                <>
                    <PostSkeliton />
                    <PostSkeliton />
                </>
            ) : (
                <PostList posts={state?.posts} />
            )}
        </div>
    );
};

export default HomePage;
