import React from 'react';

const Button = ({children, classes, pClass}) => {
    return (
        <div className={`${pClass}`}>
            <button className={`bg-primary text-[#fff] text-base md:py-3 py-2 rounded-md ${classes}`}>{children}</button>
        </div>
    );
};

export default Button;