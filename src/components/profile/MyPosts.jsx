import { useProfile } from "../../hooks/useProfile";
import PostList from "../posts/PostList";

const MyPosts = ({ post }) => {
    const { state } = useProfile();

    return (
        <>
            <h4 className='mt-6 text-xl lg:mt-8 lg:text-2xl'>Your Posts</h4>

            <PostList posts={state?.posts} />
        </>
    );
};

export default MyPosts;
