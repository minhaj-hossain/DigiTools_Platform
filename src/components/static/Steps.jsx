import React from 'react';
import userImg from '../../assets/user.png'
import packageImg from '../../assets/package.png'
import rocketImg from '../../assets/rocket.png'


const Steps = () => {
    return (

        <section className='bg-[#f9fafc] py-25'>
            <div className='container mx-auto px-3 sm:px-0'>
                <header className='space-y-4 text-center mb-10'>
                    <h3 className='font-extrabold text-3xl lg:text-5xl text-[#101727]'>Get Started in 3 Steps</h3>
                    <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </header>

                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className="card border-2 border-[#f1f1f1] rounded-2xl p-6 relative transition-all duration-300 ease-in-out 
                    hover:-translate-y-1 hover:shadow-2xl
                    hover:shadow-purple-200/50 hover:scale-[1.02] 
                    group cursor-pointer">

                        <div className=' absolute top-3 right-3 flex justify-center items-center bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white hover:translate-0.5 transition-transform duration-300 font-bold text-[14px] p-4 rounded-full h-4 w-4'><span>01</span></div>
                        <div className="card-body space-y-4 flex flex-col items-center justify-center">
                            <div className='w-20 h-20 rounded-full bg-linear-to-r from-[#4f39f6]/10 to-[#9514fa]/10 flex items-center justify-center p-4'>
                                <img className='' src={userImg} alt="User" />
                            </div>
                            <h3 className='font-bold text-2xl text-[#101727]'>Create Account</h3>
                            <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className="card border-2 border-[#f1f1f1] rounded-2xl p-6 relative transition-all duration-300 ease-in-out 
                    hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-200/50 hover:scale-[1.02] 
                    group cursor-pointer">

                        <div className=' absolute top-3 right-3 flex justify-center items-center bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white hover:translate-0.5 transition-transform duration-300 font-bold text-[14px] p-4 rounded-full h-4 w-4'><span>01</span></div>
                        <div className="card-body space-y-4 flex flex-col items-center justify-center">
                            <div className='w-20 h-20 rounded-full bg-linear-to-r from-[#4f39f6]/10 to-[#9514fa]/10 flex items-center justify-center p-4'>
                                <img className='' src={packageImg} alt="Package" />
                            </div>
                            <h3 className='font-bold text-2xl text-[#101727]'>Choose Products</h3>
                            <p className='text-[#627382] text-center'>Browse our catalog and select the toolsthat fit your needs.</p>
                        </div>
                    </div>
                    <div className="card border-2 border-[#f1f1f1] rounded-2xl p-6 relative transition-all duration-300 ease-in-out 
                    hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-200/50 hover:scale-[1.02] 
                    group cursor-pointer">

                        <div className=' absolute top-3 right-3 flex justify-center items-center bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white hover:translate-0.5 transition-transform duration-300 font-bold text-[14px] p-4 rounded-full h-4 w-4'><span>01</span></div>
                        <div className="card-body space-y-4 flex flex-col items-center justify-center">
                            <div className='w-20 h-20 rounded-full bg-linear-to-r from-[#4f39f6]/10 to-[#9514fa]/10 flex items-center justify-center p-4'>
                                <img className='' src={rocketImg} alt="Rocket" />
                            </div>
                            <h3 className='font-bold text-2xl text-[#101727]'>Start Creating</h3>
                            <p className='text-[#627382] text-center'>Download and start using your premiumtools immediately.</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Steps;