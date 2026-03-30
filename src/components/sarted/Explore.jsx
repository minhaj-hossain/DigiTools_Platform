import React from 'react';

const Explore = () => {
    return (
        <section className='bg-linear-to-r from-[#4f39f6] to-[#9514fa]  py-25'>
            <div className='container mx-auto text-white text-center'>
                <div className='space-y-4'>
                    <div className='space-y-4'>
                        <h2 className='font-extrabold text-3xl lg:text-5xl'>Ready to Transform Your Workflow?</h2>
                        <p className='opacity-90'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>

                    </div>
                    <div className='space-x-4 mt-10'>
                        <button className='btn rounded-full font-semibold bg-white text-black btn-ghost'>Explore Products</button>
                        <button className='btn rounded-full border border-white text-white btn-ghost font-semibold'>View Pricing</button>
                    </div>
                    <p className='opacity-80'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>

        </section>
    );
};

export default Explore;