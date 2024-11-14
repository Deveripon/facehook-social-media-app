import Post from "./Post";

const PostList = ({ posts }) => {
    const sortedPosts = posts?.sort(
        (a, b) => new Date(b?.createAt) - new Date(a?.createAt)
    );

    return sortedPosts && sortedPosts.length > 0 ? (
        sortedPosts.map((post) => {
            return <Post key={post.id} post={post} />;
        })
    ) : (
        <h3>No Posts Found</h3>
    );
};

export default PostList;
