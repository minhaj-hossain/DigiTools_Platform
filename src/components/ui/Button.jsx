import React from 'react';

const Button = ({ Text, width }) => {
    return (
        <button 
        className={`btn ${width} bg-linear-to-r from-[#4F39F6]  to-[#9514FA] rounded-full text-white font-semibold hover:from-[#4f39f6c7]  hover:to-[#9614fac4] hover:translate-0.5 transition-all duration-300`}>{Text}</button>

    );
};

export default Button;