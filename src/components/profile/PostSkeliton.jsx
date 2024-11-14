import React from "react";

const PostSkeliton = () => {
    return (
        <article className='card mt-6 lg:mt-8 animate-pulse'>
            {/* Post header skeleton */}
            <header className='flex items-center justify-between gap-4'>
                {/* Author info skeleton */}
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 lg:w-[58px] lg:h-[58px] rounded-full bg-gray-300'></div>
                    <div>
                        <div className='h-4 w-24 bg-gray-300 rounded lg:w-32 lg:h-6'></div>
                        <div className='flex items-center gap-1.5 mt-2'>
                            <div className='h-3 w-3 bg-gray-300 rounded-full'></div>
                            <div className='h-3 w-16 bg-gray-300 rounded lg:w-20'></div>
                        </div>
                    </div>
                </div>
                {/* Action dot skeleton */}
                <div className='w-6 h-6 bg-gray-300 rounded-full'></div>
            </header>

            {/* Post body skeleton */}
            <div className='border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl'>
                <div className='h-48 w-full bg-gray-300 rounded mb-4'></div>
                <div className='space-y-2'>
                    <div className='h-4 w-full bg-gray-300 rounded'></div>
                    <div className='h-4 w-3/4 bg-gray-300 rounded'></div>
                    <div className='h-4 w-2/3 bg-gray-300 rounded'></div>
                </div>
            </div>

            {/* Post actions skeleton */}
            <div className='flex items-center justify-between py-6 lg:px-10 lg:py-8'>
                <div className='h-4 w-16 bg-gray-300 rounded'></div>
                <div className='h-4 w-20 bg-gray-300 rounded'></div>
                <div className='h-4 w-16 bg-gray-300 rounded'></div>
            </div>

            {/* Comment section skeleton */}
            <div>
                {/* Comment input box skeleton */}
                <div className='flex items-center gap-3 mb-4'>
                    <div className='w-7 h-7 lg:w-[34px] lg:h-[34px] rounded-full bg-gray-300'></div>
                    <div className='h-8 w-full rounded-full bg-gray-300 sm:h-[38px]'></div>
                </div>
                {/* Comment filter button skeleton */}
                <div className='h-4 w-24 bg-gray-300 rounded mb-4'></div>

                {/* Comments skeleton */}
                <div className='space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3'>
                    {/* Single comment skeleton */}
                    <div className='flex items-center gap-3 pt-4'>
                        <div className='w-6 h-6 rounded-full bg-gray-300'></div>
                        <div className='h-4 w-3/4 bg-gray-300 rounded'></div>
                    </div>
                    {/* Single comment skeleton */}
                    <div className='flex items-center gap-3 pt-4'>
                        <div className='w-6 h-6 rounded-full bg-gray-300'></div>
                        <div className='h-4 w-3/4 bg-gray-300 rounded'></div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default PostSkeliton;
