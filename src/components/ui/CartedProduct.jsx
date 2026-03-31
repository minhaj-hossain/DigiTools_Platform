import React from 'react';
import { toast } from 'react-toastify';

const CartedProduct = ({ product, cart, setCart }) => {

    const { icon, name, price, id } = product;


    // console.log(id)

    const handleDelete = (id) => {

        const newCart = cart.filter(elem => elem.id !== id)

        setCart([...newCart])
        toast.success("Product deleted successfully.")

    }

    return (
        <div className='flex justify-between items-center bg-[#f9fafc] p-5 mb-4 rounded-2xl'>
            <div className='flex gap-5'>
                <div className='w-15 h-15 p-2 flex justify-center items-center rounded-full border border-[#f2f2f2]'>
                    <img src={icon} alt={name} />
                </div>

                <div className='space-y-2'>
                    <h3 className='font-semibold text-[#101727] text-[20px] line-clamp-1'>{name}</h3>
                    <p className='font-medium text-[#627382]'>${price.toFixed(2)}</p>
                </div>

            </div>

            <div>
                <button

                    onClick={() => handleDelete(id)}
                    className=' cursor-pointer text-[#ff3980]'>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartedProduct;