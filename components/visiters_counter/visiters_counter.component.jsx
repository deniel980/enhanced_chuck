import React, { useState, useEffect } from 'react';

const VisiterCounter = () => {
    const [visits, setVisits] = useState(0);
    useEffect(() => {
        if (localStorage.getItem('visitors') === null) {
            localStorage.setItem('visitors', 1);
        } else {
            localStorage.setItem('visitors', parseInt(localStorage.getItem('visitors')) + 1);
        }
        setVisits(localStorage.getItem('visitors'));
    }, []);

    return (
        <div>
            <p className=" text-xl font-monospace font-bold font"></p>
            <span id="visits-count" >Your Visits:
                <span className="px-2 bg-white text-black">{visits}</span>
            </span>
        </div>
    );
}

export default VisiterCounter;