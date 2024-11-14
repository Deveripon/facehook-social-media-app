import { api_base_url } from "../../constant";

const PostBody = ({ postImage, content }) => {
    return (
        <div className='border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl'>
            {/* If Post has Image, Render this block */}
            {postImage && (
                <div className='flex items-center justify-center overflow-hidden'>
                    <img
                        className='max-w-full'
                        src={`${api_base_url}/${postImage}`}
                        alt='poster'
                    />
                </div>
            )}
            <p>{content}</p>
        </div>
    );
};

export default PostBody;
