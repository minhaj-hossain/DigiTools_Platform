import React from 'react';

const Stats = () => {
    return (
        <div className='relative z-20 bg-linear-to-r from-[#4F39F6]  to-[#9514FA] my-15 '>
            <div className='container mx-auto px-10 flex flex-wrap items-center justify-center gap-15 md:gap-20 '>
                <div className='flex items-center gap-15 py-10'>
                    <div className='text-white space-y-3'>
                        <h2 className='font-extrabold text-6xl '>50K+</h2>
                        <p className='font-medium text-2xl text-white/80'>Active Users</p>
                    </div>
                    <div className='h-15 w-px hidden sm:block border border-white/50 rounded-full'></div>
                </div>
                <div className='flex items-center gap-15 py-10'>
                    <div className='text-white space-y-3'>
                        <h2 className='font-extrabold text-6xl '>200+</h2>
                        <p className='font-medium text-2xl text-white/80'>Premium Tools</p>
                    </div>
                    <div className='h-15 w-px hidden sm:block border border-white/50 rounded-full'></div>
                </div>
                <div className='flex items-center gap-15 py-10'>
                    <div className='text-white space-y-3'>
                        <h2 className='font-extrabold text-6xl '>4.9</h2>
                        <p className='font-medium text-2xl text-white/80'>Rating</p>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Stats;