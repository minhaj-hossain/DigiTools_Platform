import React from 'react';
import Button from '../ui/Button';

const Pricing = () => {
    return (
        <section className='py-25'>
            <div className='container mx-auto'>
                <header className='space-y-4 text-center mb-10'>
                    <h3 className='font-extrabold text-3xl lg:text-5xl text-[#101727]'>Simple, Transparent Pricing</h3>
                    <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </header>

                <section className='grid grid-cols-1 text-center md:text-left md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    {/* basic */}
                    <div className='bg-[#f9fafc] space-y-6 p-6 rounded-2xl border border-[#f2f2f2] flex flex-col justify-between' >
                        <div className='space-y-6'>
                            <div className='space-y-2'>
                                <h4 className='font-bold text-2xl text-[#101727]'>Starter</h4>
                                <p className='text-[#627382]'>Perfect for getting started</p>
                            </div>

                            <div>
                                <p className='text-4xl font-bold text-[#101727]'>$0<span className='text-lg font-normal text-[#627382]'>/month</span> </p>
                            </div>

                            <ul>
                                <li className='flex items-center gap-2 text-[#627382]'><span className='text-green-500'>✓</span> Access to 10 free tools</li>
                                <li className='flex items-center gap-2 text-[#627382]'><span className='text-green-500'>✓</span> Basic templates</li>
                                <li className='flex items-center gap-2 text-[#627382]'><span className='text-green-500'>✓</span> Community support</li>
                                <li className='flex items-center gap-2 text-[#627382]'><span className='text-green-500'>✓</span> 1 project per month</li>
                            </ul>
                        </div>
                        <Button width='w-full' Text="Get Started For Free" />

                    </div>

                    {/* pro  */}
                    <div className='bg-[#f9fafc] space-y-6 p-6 rounded-2xl border border-[#f2f2f2]  bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white flex flex-col justify-between ' >
                        <div className='space-y-6'>
                            <div className='space-y-2'>
                                <h4 className='font-bold text-2xl '>pro</h4>
                                <p className='opacity-80'>Best for professionals</p>
                            </div>

                            <div>
                                <p className='text-4xl font-bold'>$19<span className='text-lg font-normal '>/month</span> </p>
                            </div>

                            <ul>
                                <li className='flex items-center gap-2 '><span>✓</span> Access to all premium tools</li>
                                <li className='flex items-center gap-2'><span>✓</span>Unlimited templates</li>
                                <li className='flex items-center gap-2 '><span>✓</span>Priority support</li>
                                <li className='flex items-center gap-2 '><span >✓</span>Unlimited projects</li>
                                <li className='flex items-center gap-2 '><span>✓</span>Cloud sync</li>
                                <li className='flex items-center gap-2'><span>✓</span>Advanced analytics</li>
                            </ul>
                        </div>
                        <button
                            className={`btn w-full  rounded-full  bg-white text-[#4f39f6] font-semibold hover:from-[#4f39f6c7]  hover:to-[#9614fac4] hover:translate-0.5 transition-all duration-300`}>Start Pro Trial</button>

                    </div>

                    {/* Enterprise */}
                    <div className='bg-[#f9fafc] space-y-6 p-6 rounded-2xl border border-[#f2f2f2] flex flex-col justify-between' >
                        <div className='space-y-6'>
                            <div className='space-y-2'>
                                <h4 className='font-bold text-2xl text-[#101727]'>Enterprise</h4>
                                <p className='text-[#627382]'>For teams and businesses</p>
                            </div>

                            <div>
                                <p className='text-4xl font-bold text-[#101727]'>$99<span className='text-lg font-normal text-[#627382]'>/month</span> </p>
                            </div>

                            <ul>
                                <li className='flex items-center gap-2 text-[#627382]'><span className='text-green-500'>✓</span> Everything in Pro</li>
                                <li className='flex items-center gap-2 text-[#627382]'><span className='text-green-500'>✓</span> Team collaboration</li>
                                <li className='flex items-center gap-2 text-[#627382]'><span className='text-green-500'>✓</span> Custom integrations</li>
                                <li className='flex items-center gap-2 text-[#627382]'><span className='text-green-500'>✓</span> Dedicated support</li>
                                <li className='flex items-center gap-2 text-[#627382]'><span className='text-green-500'>✓</span> SLA guarantee</li>
                                <li className='flex items-center gap-2 text-[#627382]'><span className='text-green-500'>✓</span> Custom branding</li>
                            </ul>
                        </div>
                        <Button width='w-full' Text="Contact Sales" />

                    </div>
                </section>
            </div>
        </section>
    );
};

export default Pricing;