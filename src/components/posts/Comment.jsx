import useAvatar from "../../hooks/useAvatar";

const Comment = ({ comment }) => {
    const avatar = useAvatar(comment);
    return (
        <div className='flex items-center gap-3 pt-4'>
            <img
                className='w-6 h-6 rounded-full object-cover'
                src={avatar}
                alt='avatar'
            />
            <div>
                <div className='flex gap-1 text-xs lg:text-sm'>
                    <span>{comment?.author?.name}: </span>
                    <span>{comment?.comment}</span>
                </div>
            </div>
        </div>
    );
};

export default Comment;
