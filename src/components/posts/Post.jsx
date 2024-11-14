import { useState } from "react";
import PostActions from "./PostActions";
import PostBody from "./PostBody";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";

const Post = ({ post }) => {
    console.log(post);
    const [comments, setComments] = useState([...post.comments]);

    return (
        <article className='card mt-6 lg:mt-8'>
            <PostHeader post={post} />
            <PostBody postImage={post?.image} content={post?.content} />
            <PostActions comments={comments} post={post} />
            <PostComments
                comments={comments}
                setComments={setComments}
                post={post}
            />
        </article>
    );
};

export default Post;
