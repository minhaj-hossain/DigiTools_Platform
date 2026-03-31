import React from 'react';
import Button from '../ui/Button';
import { CiPlay1 } from 'react-icons/ci';
import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='container  relative z-50 mx-auto mt-12 px-3 sm:px-0'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className="left-banner flex items-center">
                    <div className='left-container space-y-4 flex flex-col justify-center items-center text-center md:text-left md:block'>

                        <button className='flex items-center gap-2 mb-4 bg-[#e1e7ff] px-4 py-2 rounded-full hover:translate-1 transition-transform duration-300 text-sm font-medium'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.2" width="16" height="16" rx="8" fill="url(#paint0_linear_2_340)" />
                                <rect opacity="0.4" x="2" y="2" width="12" height="12" rx="6" fill="url(#paint1_linear_2_340)" />
                                <rect x="5" y="5" width="6" height="6" rx="3" fill="url(#paint2_linear_2_340)" />
                                <defs>
                                    <linearGradient id="paint0_linear_2_340" x1="-5.10067" y1="8.91954" x2="16.009" y2="8.60591" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4F39F6" />
                                        <stop offset="1" stop-color="#9514FA" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2_340" x1="-1.8255" y1="8.68966" x2="14.0068" y2="8.45443" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4F39F6" />
                                        <stop offset="1" stop-color="#9514FA" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_2_340" x1="3.08725" y1="8.34483" x2="11.0034" y2="8.22722" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4F39F6" />
                                        <stop offset="1" stop-color="#9514FA" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className='bg-linear-to-r from-[#4F39F6]  to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</span></button>

                        <h1 className='font-extrabold text-4xl lg:text-5xl leading-tight tracking-tighter text-[#101727]/90'>Supercharge Your <br />Digital Workflow</h1>
                        <p className='text-[18px] text-[#627382]'>Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.

                            Explore Products
                        </p>
                        <div className="btns flex gap-4 mt-8">
                            <Button Text='Explore Products' />

                            <button className='btn bg-linear-to-r from-[#4F39F6]  to-[#9514FA] bg-clip-text text-transparent group rounded-full font-semibold hover:from-[#4f39f6c7]  hover:to-[#9614fac4] hover:translate-0.5 transition-all duration-300 border border-[#4F39F6]'><CiPlay1 className='group-hover:translate-x-1 transition-all duration-300 bg-linear-to r from-[#4F39F6]  to-[#9514FA]  bg-clip-text text-transparent' color='#4F39F6' /> Watch Demo</button>
                        </div>

                    </div>
                </div>

                <div className="right-banner flex justify-center lg:justify-end">
                    <div className='py-6'>
                        <img className='rounded-xl' src={bannerImg} alt="Banner" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;