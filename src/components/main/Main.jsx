import React, { use } from 'react';
import Card from '../ui/Card';
import Cart from '../cart/Cart';

const Main = ({ btn, setBtn, productData, cart, setCart }) => {

    const data = use(productData);


    // console.log(data);

    return (
        <section className='container mx-auto space-y-1.5 px-3 sm:px-0'>

            {/* main header  */}
            <div className='text-center flex flex-col items-center gap-5 '>
                <h3 className=' font-extrabold text-3xl md:text-5xl text-[#101727]'>Premium Digital Tools</h3>
                <p className='text-[#627382] max-w-120 '>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
            </div>

            {/* btn state */}
            <div className='flex justify-center'>
                <div className='border border-[#f6f6f6] p-px w-fit rounded-full space-x-1'>
                    <button
                        onClick={() => setBtn('Products')}
                        className={`${btn === 'Products' ? 'bg-linear-to-r from-[#4F39F6]  to-[#9514FA]  text-white font-semibold hover:from-[#4f39f6c7]  hover:to-[#9614fac4]  hover:shadow-[0_3px_8px_0_rgba(97,7,236,0.3)] transition-all duration-100' : ' font-medium text-[#25065d]'}  btn rounded-full `}>Products</button>


                    <button
                        onClick={() => setBtn('Cart')}
                        className={`${btn === 'Cart' ? ' bg-linear-to-r from-[#4F39F6]  to-[#9514FA]  text-white font-semibold hover:from-[#4f39f6c7]  hover:to-[#9614fac4] hover:shadow-[0_3px_8px_0_rgba(97,7,236,0.3)] transition-all duration-300' : ' font-medium text-[#25065d]'} btn rounded-full px-6`}>Cart <span className={` ${cart.length > 0 ? 'block' : 'hidden'} `}>({cart.length})</span> </button>


                </div>
            </div>

            <section className='pt-15 mb-10'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        btn === 'Products' && data.map((product) => <Card
                            cart={cart}
                            setCart={setCart}
                            product={product}
                            key={product.id} />)
                    }
                </div>

                <div>
                    {
                        btn === 'Cart' && cart.length === 0 && (
                            <div className='text-center h-50 border border-[#f2f2f2] rounded-2xl text-2xl flex items-center justify-center  text-[#10172758]'>
                                <span>Your cart is empty.</span>
                            </div>
                        )
                    }

                    {
                        btn === 'Cart' && cart.length > 0 && (<Cart cart={cart} setCart={setCart} />)
                    }
                </div>

            </section>
        </section>
    );
};

export default Main;