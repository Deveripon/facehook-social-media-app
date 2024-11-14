import threeDotsIcon from "../../assets/icons/3dots.svg";
import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import timeIcon from "../../assets/icons/time.svg";
import useAvatar from "../../hooks/useAvatar";
import { getFormattedTime } from "../../utils/getFormattedTime";
import { useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import usePost from "../../hooks/usePost";
import { actions } from "../../actions/actions";
import useAxios from "../../hooks/useAxios";
import { api_base_url } from "../../constant";

const PostHeader = ({ post }) => {
    const avatar = useAvatar(post);
    const { auth } = useAuth();
    const [show, setShow] = useState(false);
    const isMyPost = post?.author?.id === auth?.user?.id;
    const { dispatch, showPostForm, setShowPostForm } = usePost();
    const api = useAxios();
    const editRef = useRef(null);

    //handle edit click
    function handleEditClick() {
        setShowPostForm({
            ...showPostForm,
            status: true,
            mode: "edit",
            data: post,
        });
        window.scrollTo(0, 0);
    }

    //handle delete click
    async function handlePostDelete() {
        const confirmation = confirm("Are you sure to delete this post?");
        if (confirmation) {
            try {
                dispatch({ type: actions.postActions.POST_DATA_FATCHING });

                const response = await api.delete(
                    `${api_base_url}/posts/${post?.id}`
                );
                if (response.status === 200) {
                    dispatch({
                        type: actions.postActions.POST_DELETED,
                        data: post?.id,
                    });
                }
            } catch (error) {
                console.log(error);
                dispatch({
                    type: actions.postActions.POST_DATA_FETCH_ERROR,
                    error: error,
                });
            }
        }
    }

    return (
        <header className='flex items-center justify-between gap-4'>
            {/* author info */}
            <div className='flex items-center gap-3'>
                <img
                    className='w-10 h-10 rounded-full lg:h-[58px] lg:w-[58px] object-cover'
                    src={avatar}
                    alt='avatar'
                />
                <div>
                    <h6 className='text-lg lg:text-xl'>{post?.author?.name}</h6>
                    <div className='flex items-center gap-1.5'>
                        <img src={timeIcon} alt='time' />
                        <span className='text-sm text-gray-400 lg:text-base'>
                            {getFormattedTime(post?.createAt)}
                        </span>
                    </div>
                </div>
            </div>
            {/* author info ends */}
            {/* action dot */}
            {isMyPost && (
                <div className='relative'>
                    <button onClick={() => setShow(!show)}>
                        <img src={threeDotsIcon} alt='3dots of Action' />
                    </button>
                    {/* Action Menus Popup */}
                    {show && (
                        <div className='action-modal-container'>
                            <button
                                ref={editRef}
                                onClick={handleEditClick}
                                className='action-menu-item hover:text-lwsGreen'>
                                <img src={editIcon} alt='Edit' />
                                Edit
                            </button>
                            <button
                                onClick={handlePostDelete}
                                className='action-menu-item hover:text-red-500'>
                                <img src={deleteIcon} alt='Delete' />
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};

export default PostHeader;
