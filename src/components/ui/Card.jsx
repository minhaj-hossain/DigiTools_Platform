import React, { useState } from 'react';
import Button from './Button';
import { toast } from 'react-toastify';

const Card = ({ product, cart, setCart }) => {

    const { name, description, price, period, tag, tagType, features, icon } = product;
    const [buyNow, setBuyNow] = useState(false)

    const handleBuyNow = (product) => {

        const alreadyInCart = cart.find(item => item.id === product.id);

        if (alreadyInCart) {
            toast.error('This product is already in your cart!');
            return;
        }

        setBuyNow(true);
        setCart((prevCart) => [...prevCart, product])
        toast.success('Product added to cart!');

    }

    return (
        <div className='relative border border-[#f2f2f2] rounded-2xl p-6 space-y-4 transition-all duration-300 ease-in-out 
            hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-200/50 hover:scale-[1.02] 
            group cursor-pointer'>
            {
                tagType === 'highlight' && <div className="badge right-2 top-2 absolute py-1.5 px-3 bg-[#fef3c6] rounded-full font-medium text-[14px] capitalize text-[#bb4d00]">{tag}</div>
            }
            {
                tagType === 'status' && <div className="badge right-2 top-2 absolute py-1.5 px-3 bg-[#e1e7ff] rounded-full font-medium text-[14px] "> <span className='bg-linear-to-r from-[#4F39F6]  to-[#9514FA] bg-clip-text text-transparent capitalize'>{tag}</span></div>
            }

            {
                tagType === 'release' && <div className="badge right-2 top-2 absolute py-1.5 px-3 bg-[#dbfce7] rounded-full font-medium text-[14px] capitalize text-[#0a883e]">{tag}</div>
            }


            <div className='w-15 h-15 p-2 flex justify-center items-center rounded-full border border-[#f2f2f2]'>
                <img src={icon} alt={name} />
            </div>
            <div className='space-y-4'>
                <h3 className='font-bold text-2xl line-clamp-1'>{name}</h3>
                <p className='text-[#627382] mt-2 line-clamp-2'>{description}</p>
                <p className='text-[#627382]'><span className='font-bold text-2xl text-[#101727]'>${price.toFixed(2)}</span>/{period}</p>
            </div>
            <div>
                {
                    features.map((feature, index) => <p key={index} className='text-[#627382] flex items-center gap-2'><span className='text-green-500'>✓</span>{feature}</p>)
                }

            </div>



            <button
                onClick={() => handleBuyNow(product)}
                className={`btn w-full bg-linear-to-r from-[#4F39F6]  to-[#9514FA] rounded-full text-white font-semibold hover:from-[#4f39f6c7]  hover:to-[#9614fac4] hover:translate-0.5 transition-all duration-300`}>{buyNow ? 'Added to Cart' : 'Buy Now'}</button>

        </div>
    );
};

export default Card;