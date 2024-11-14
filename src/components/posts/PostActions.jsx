import likeIcon from "../../assets/icons/like.svg";
import likedIcon from "../../assets/icons/liked.svg";
import commentIcon from "../../assets/icons/comment.svg";
import shareIcon from "../../assets/icons/share.svg";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { api_base_url } from "../../constant";

const PostActions = ({ post, comments }) => {
    const { auth } = useAuth();
    const api = useAxios();
    const [liked, setLiked] = useState(post?.likes?.includes(auth.user.id));

    async function handleLike() {
        try {
            const response = await api.patch(
                `${api_base_url}/posts/${post?.id}/like`
            );
            if (response.status === 200) {
                setLiked(!liked);
            }
        } catch (error) {
            console.log("like time error", error);
        }
    }
    return (
        <div className='flex items-center justify-between py-6 lg:px-10 lg:py-8'>
            {/* Like Button */}
            <button
                onClick={handleLike}
                className='flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm'>
                {!liked ? (
                    <>
                        <img src={likeIcon} alt='Like' />
                        <span>Like</span>
                    </>
                ) : (
                    <img src={likedIcon} alt='Like' />
                )}
            </button>
            {/* Comment Button */}
            <button className='icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm'>
                <img src={commentIcon} alt='Comment' />
                <span>Comment({comments?.length})</span>
            </button>
            {/* Share Button */}
            {/* Like Button */}
            <button className='flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm'>
                <img src={shareIcon} alt='Share' />
                <span>Share</span>
            </button>
        </div>
    );
};

export default PostActions;
