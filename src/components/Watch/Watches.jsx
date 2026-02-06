import React, { useEffect, useState } from 'react';
import Watch from './Watch';
import './Watches.css'
const Watches = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('watches.json')
            .then(res => res.json())
            .then(data => setWatches(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h3>Total Item:{watches.length}</h3>
            <div className='watches-container'>
                {
                    watches.map(watch => <Watch
                        watch={watch}
                        key={watch.id}></Watch>)
                }
            </div>
        </div>
    );
};

export default Watches;