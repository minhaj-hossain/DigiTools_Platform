import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import Button from '../ui/Button';

const Navbar = ({ cart }) => {
    return (
        <div className=" bg-base-100  shadow-sm ">
            <div className='navbar container mx-auto '>
                <div className="navbar-start ">
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
                        <div className='relative'>
                            <CiShoppingCart className='text-2xl' />
                            <span className={`absolute ${cart.length > 0 ? 'block' : 'hidden'} -top-2 -right-2 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center`}>
                                {cart.length}
                            </span>
                        </div>
                        <p className='font-semibold text-[#101727]'>Login</p>
                    </div>
                    <Button width='hidden sm:block' Text="Get Started" />

                </div>
            </div>

        </div>
    );
};

export default Navbar;