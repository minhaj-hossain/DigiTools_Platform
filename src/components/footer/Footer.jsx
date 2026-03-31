import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='space-y-20 bg-[#101727] '>

            <div className='container mx-auto pt-25'>
                <div className='text-white flex gap-10 xl:gap-20 flex-wrap px-3 sm:px-0 mb-15'>

                    <div className=' space-y-4 text-center sm:text-left'>
                        <h3 className='font-black  text-3xl lg:text-5xl'>DigiTools</h3>
                        <p className='opacity-80  sm:max-w-87.5'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className='space-y-4'>

                        <h3 className='font-medium text-[20px]'>Product</h3>

                        <ul className='space-y-4'>
                            <li><a href="#" className='opacity-80 hover:opacity-100'>Features</a></li>
                            <li><a href="#" className='opacity-80 hover:opacity-100'>Pricing</a></li>
                            <li><a href="#" className='opacity-80 hover:opacity-100'>Templates</a></li>
                            <li><a href="#" className='opacity-80 hover:opacity-100'>Integrations</a></li>
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='font-medium text-[20px]'>Company</h3>

                        <ul className='space-y-4'>
                            <li><a href="#" className='opacity-80 hover:opacity-100'>About</a></li>
                            <li><a href="#" className='opacity-80 hover:opacity-100'></a></li>
                            <li><a href="#" className='opacity-80 hover:opacity-100'>Blog</a></li>
                            <li><a href="#" className='opacity-80 hover:opacity-100'>Careers</a></li>
                            <li><a href="#" className='opacity-80 hover:opacity-100'>Press</a></li>
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='font-medium text-[20px]'>Resources</h3>

                        <ul className='space-y-4'>
                            <li><a href="#" className='opacity-80 hover:opacity-100'>Documentation</a></li>
                            <li><a href="#" className='opacity-80 hover:opacity-100'>Help Center</a></li>
                            <li><a href="#" className='opacity-80 hover:opacity-100'>Community</a></li>
                            <li><a href="#" className='opacity-80 hover:opacity-100'>Contact</a></li>
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='font-medium text-[20px]'>Company</h3>

                        <div className='flex gap-4 cursor-pointer'>
                            <div className=' w-7 h-7 flex items-center justify-center rounded-full bg-white'><FaGithub color='black' /></div>
                            <div className=' w-7 h-7 flex items-center justify-center rounded-full bg-white'><FaFacebook color='black' /></div>
                            <div className=' w-7 h-7 flex items-center justify-center rounded-full bg-white'><BsTwitterX color='black' /></div>
                        </div>
                    </div>


                </div>

                <div className=' grid grid-cols-1 sm:flex   sm:justify-between sm:items-center border-t border-gray-700 py-3 px-3 sm:px-0'>
                    <p className='text-center text-sm text-gray-500 '>© 2026 Digitools. All rights reserved.</p>

                    <div className='space-x-5 text-sm  text-gray-500 text-center sm:text-left'>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookies</span>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;