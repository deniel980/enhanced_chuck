import React, { useState, useEffect } from 'react';

const VisiterCounter = () => {


    const [visitors, setVisitors] = useState(0);

    useEffect(() => {
        if (localStorage.getItem('visitors') === null) {
            localStorage.setItem('visitors', 1);
        } else {
            localStorage.setItem('visitors', parseInt(localStorage.getItem('visitors')) + 1);
        }
        setVisitors(localStorage.getItem('visitors'));
    }, []);

    return (
        <div>
            <p>Visitors: {visitors}</p>
        </div>
    );

}


export default VisiterCounter;