import React from 'react';

const Button = ({children, classes, pClass, onClick, disabled}) => {
    return (
        <div className={`${pClass}`}>
            <button disabled={disabled} onClick={onClick} className={`${disabled ? 'bg-white' : 'bg-primary'} text-[#fff] text-base md:py-3 py-2 rounded-md ${classes}`}>{children}</button>
        </div>
    );
};

export default Button;