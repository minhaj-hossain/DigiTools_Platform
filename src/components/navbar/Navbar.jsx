import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = () => {
    return (
        <div className=" bg-base-100  shadow-sm">
            <div className='navbar container mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Parent</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost min-h-15 font-extrabold text-4xl bg-linear-to-r from-[#4F39F6]  to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-black/90">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex items-center cursor-pointer gap-4">
                    <div className=' hidden md:flex items-center gap-4 '>
                        <CiShoppingCart className='text-2xl' />
                        <p className='font-semibold text-[#101727]'>Login</p>

                    </div>
                    <a className="btn bg-linear-to-r from-[#4F39F6]  to-[#9514FA] rounded-full text-white font-semibold hover:from-[#4f39f6c7]  hover:to-[#9614fac4] hover:translate-0.5 transition-all duration-300">Get Started</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;