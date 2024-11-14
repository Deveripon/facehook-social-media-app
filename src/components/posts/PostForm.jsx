import { useForm } from "react-hook-form";
import addPhotoIcon from "../../assets/icons/addPhoto.svg";
import CloseIcon from "../../assets/icons/close.svg";
import { api_base_url } from "../../constant";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useProfile } from "../../hooks/useProfile";
import usePost from "../../hooks/usePost";
import { actions } from "../../actions/actions";

const PostForm = ({ setShow }) => {
    const { auth } = useAuth();
    const { state } = useProfile();
    const api = useAxios();
    const user = state?.user ?? auth?.user;
    const { dispatch } = usePost();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    async function handleFormSubmission(formData) {
        const textInputs = formData.content;
        const photo = formData.photo[0];
        if (!textInputs && !photo) {
            setError("root", {
                type: "postError",
                message: "A post need minimum a Image or Some Content",
            });
        } else {
            const formData = {
                content: textInputs,
                photo: photo ?? null,
                postType: photo ? "image" : "text",
            };
            try {
                dispatch({ type: actions.postActions.POST_DATA_FATCHING });
                const response = await api.post(
                    `${api_base_url}/posts`,
                    formData
                );
                if (response.status === 200) {
                    dispatch({
                        type: actions.postActions.POST_CREATED,
                        data: response.data,
                    });
                    setShow(false);
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
        <div className='card relative'>
            <div className='head flex items-center justify-center'>
                <h6 className='mb-3 text-center text-lg font-bold lg:text-xl'>
                    Create Post
                </h6>
                <button
                    onClick={() => setShow(false)}
                    className='absolute right-3 top-3 bg-gray-800 hover:bg-gray-900/50 duration-200 p-1 rounded-full'>
                    <img src={CloseIcon} alt='close' />
                </button>
            </div>
            <form onSubmit={handleSubmit(handleFormSubmission)}>
                <div className='mb-3 flex items-center justify-between gap-2 lg:mb-6 lg:gap-4'>
                    <div className='flex items-center gap-3'>
                        <img
                            className='w-10 h-10 rounded-full lg:h-[58px] lg:w-[58px] object-cover'
                            src={`${api_base_url}/${user.avatar}`}
                            alt='avatar'
                        />
                        <div>
                            <h6 className='text-lg lg:text-xl'>
                                {user.firstName} {user.lastName}
                            </h6>
                            <span className='text-sm text-gray-400 lg:text-base'>
                                Public
                            </span>
                        </div>
                    </div>
                    <label
                        className='btn-primary cursor-pointer !text-gray-100'
                        htmlFor='photo'>
                        <img src={addPhotoIcon} alt='Add Photo' />
                        Add Photo
                    </label>
                    <input
                        {...register("photo")}
                        type='file'
                        name='photo'
                        id='photo'
                        className='hidden'
                    />
                </div>
                {/* Post Text Input */}
                <textarea
                    {...register("content")}
                    name='content'
                    id='content'
                    placeholder='Share your thoughts...'
                    className='h-[120px] w-full bg-transparent focus:outline-none lg:h-[160px]'
                    defaultValue={""}
                />
                {errors.root?.message && (
                    <div className='bg-red-600/50 p-3 rounded-md mb-1 mt-3 text-white'>
                        <p>{errors.root?.message}</p>
                    </div>
                )}
                <div className='border-t border-[#3F3F3F] pt-4 lg:pt-6'>
                    <button
                        className='auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90'
                        type='submit'>
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PostForm;