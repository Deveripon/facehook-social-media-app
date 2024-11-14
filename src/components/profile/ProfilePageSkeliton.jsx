import React from "react";
import PostSkeliton from "./PostSkeliton";

const ProfilePageSkeliton = () => {
    return (
        <div>
            <div className='flex flex-col items-center py-8 text-center animate-pulse'>
                {/* Profile image skeleton */}
                <div className='relative mb-8 h-[180px] w-[180px] rounded-full bg-gray-300 lg:mb-11 lg:h-[218px] lg:w-[218px]'>
                    <div className='absolute bottom-4 right-4 h-7 w-7 rounded-full bg-gray-400'></div>
                </div>

                {/* Name and email skeleton */}
                <div className='space-y-2'>
                    <div className='h-6 w-32 bg-gray-300 rounded lg:h-7 lg:w-40'></div>
                    <div className='h-4 w-48 bg-gray-300 rounded lg:w-60'></div>
                </div>

                {/* Bio skeleton */}
                <div className='mt-4 flex items-start gap-2 lg:mt-6'>
                    <div className='flex-1 space-y-2'>
                        <div className='h-4 w-full bg-gray-300 rounded'></div>
                        <div className='h-4 w-3/4 bg-gray-300 rounded'></div>
                        <div className='h-4 w-2/3 bg-gray-300 rounded'></div>
                        <div className='h-4 w-full bg-gray-300 rounded'></div>
                    </div>
                    <div className='h-7 w-7 rounded-full bg-gray-300'></div>
                </div>

                {/* Divider line skeleton */}
                <div className='w-3/4 border-b border-gray-400 py-6 lg:py-8' />
            </div>

            <h4 className='mt-6 text-xl lg:mt-8 lg:text-2xl'>Your Posts</h4>
            {/* Skeleton loader for the post card */}
            <PostSkeliton />
        </div>
    );
};

export default ProfilePageSkeliton;
