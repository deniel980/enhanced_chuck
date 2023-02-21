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
            <p class="text-xl font-monospace font-bold font">Your visits: {visitors}</p>
            <div id="credentials">
                <p class="text-xl font-monospace font-semi-bold font">&#169 Daniel Weiner</p>

            </div>
            






        </div>
    );

}


export default VisiterCounter;