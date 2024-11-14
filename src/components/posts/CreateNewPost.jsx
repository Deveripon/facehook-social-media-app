import { useProfile } from "../../hooks/useProfile";
import defaultAvatar from "../../assets/images/avatars/avatar.svg";
import { api_base_url } from "../../constant";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import PostForm from "./PostForm";
const CreateNewPost = () => {
    const { state } = useProfile();
    const { auth } = useAuth();
    const user = state?.user ?? auth?.user;
    const [show, setShow] = useState(false);
    return (
        <>
            {show && <PostForm setShow={setShow} />}
            {!show && (
                <div className='card'>
                    <div className='flex-center mb-3 gap-2 lg:gap-4'>
                        {user?.avatar ? (
                            <img
                                className='w-7 h-7 rounded-full lg:h-[34px] lg:w-[34px] object-cover'
                                src={`${api_base_url}/${user.avatar}`}
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
                            <textarea
                                onClick={() => setShow(true)}
                                className='h-16 w-full rounded-md bg-lighterDark p-3 focus:outline-none sm:h-20 sm:p-6'
                                name='post'
                                id='post'
                                placeholder="What's on your mind?"
                                defaultValue={""}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CreateNewPost;
