import React from 'react';
import CartedProduct from '../ui/CartedProduct';
import Button from '../ui/Button';
import { toast } from 'react-toastify';

const Cart = ({ cart, setCart }) => {

    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    const handleProceed = () => {
        setCart([])
        toast.success('Product purchase successfully.')
    }

    return (
        <section className='p-10 border border-[#f2f2f2] rounded-2xl'>

            <h2 className='font-bold text-2xl text-[#101727] mb-4'>Your Cart</h2>

            <div>
                {
                    cart.map((product) => <CartedProduct product={product} key={product.id} cart={cart} setCart={setCart} />)
                }
            </div>

            <div className='mt-10 p-5 rounded-2xl'>
                <div className='flex justify-between items-center'>
                    <span className='font-bold text-lg text-[#627382]'>Total:</span>
                    <span className='font-bold text-2xl text-[#101727]'>${totalPrice.toFixed(2)}</span>
                </div>
            </div>

            <div>
                <button
                    onClick={handleProceed}
                    className={`btn w-full bg-linear-to-r from-[#4F39F6]  to-[#9514FA] rounded-full text-white font-semibold hover:from-[#4f39f6c7]  hover:to-[#9614fac4] hover:translate-0.5 transition-all duration-300`}>Proceed to Checkout</button>
            </div>

        </section>
    );
};

export default Cart;