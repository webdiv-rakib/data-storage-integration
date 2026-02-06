import React from 'react';
import './Watch.css'
const Watch = ({ watch }) => {
    const { brand, model, price } = watch;
    return (
        <div className='watch-container'>
            <h3>{brand}</h3>
            <h3>Model: {model}</h3>
            <h3>Price: {price}</h3>
        </div>
    );
};

export default Watch;