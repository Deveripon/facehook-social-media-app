import { useState } from "react";
import CommentList from "./CommentList";
import { useProfile } from "../../hooks/useProfile";
import { api_base_url } from "../../constant";
import defaultAvatar from "../../assets/images/avatars/avatar.svg";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const PostComments = ({ post, comments, setComments }) => {
    const [show, setShow] = useState(true);
    const { auth } = useAuth();
    const api = useAxios();
    const [input, setInput] = useState("");
    console.log(comments);

    async function handleComment(e) {
        const enterKey = 13;
        if (e.keyCode === enterKey) {
            e.preventDefault();
            try {
                const response = await api.patch(
                    `${api_base_url}/posts/${post?.id}/comment`,
                    { comment: input }
                );
                if (response.status === 200) {
                    setComments([...response.data.comments]);
                    setInput("");
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div>
            <div className='flex-center mb-3 gap-2 lg:gap-4'>
                {auth?.user?.avatar ? (
                    <img
                        className='w-7 h-7 rounded-full lg:h-[34px] lg:w-[34px] object-cover'
                        src={`${api_base_url}/${auth?.user?.avatar}`}
                        alt='avatar'
                    />
                ) : (
                    <img
                        className='w-7 h-7 rounded-full lg:h-[34px] lg:w-[34px] object-cover'
                        src={defaultAvatar}
                        alt='avatar'
                    />
                )}
                <div className='flex-1'>
                    <input
                        type='text'
                        className='h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]'
                        name='post'
                        id='post'
                        onKeyDown={handleComment}
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                        value={input}
                        placeholder="What's on your mind?"
                    />
                </div>
            </div>

            {comments && comments?.length > 0 && (
                <div className='comment'>
                    <div className='mt-4'>
                        <button
                            onClick={() => setShow(!show)}
                            className='text-gray-300 max-md:text-sm'>
                            All Comment ▾
                        </button>
                    </div>

                    {show && <CommentList comments={comments} />}
                </div>
            )}
        </div>
    );
};

export default PostComments;
