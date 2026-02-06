import React from 'react';

const Watch = ({ watch }) => {
    const { brand, price } = watch;
    return (
        <div>
            <h3>Watches: {brand}</h3>
            <h3>Price: {price}</h3>
        </div>
    );
};

export default Watch;