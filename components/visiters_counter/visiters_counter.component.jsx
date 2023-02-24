//IN PROGRESS



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

    
    // function updateCounter(type){
    //     if(type == 'new_visit'){
    //         setPageviews(parseInt(localStorage.getItem('pageviews')) + 1);
    //         setVisits(localStorage.getItem('visits') + 1);
    //     }else if(type == 'page_view'){
    //         setPageviews(localStorage.getItem('pageviews') + 1);
    //     }
    // }
    
    function updateCounter(type) {
    
      fetch('http://127.0.0.1:3002/api?'+type) // Dynamic request with URL parameter
        .then(res => res.json())
        .then(data => {
          setPageviews(data.pageviews) ; // Display pageviews to user
          setVisits(data.visits); // Display visits to user
        })
    }



    
    // 'visit' item persists in storage for the remainder of the user session
    // This is used to determine if the user is visiting for the first time or not

    return (
        <div>
            <p class=" text-xl font-monospace font-bold font"></p>
            <span id="visits-count" >Your Visits: 
                <span class="px-2 bg-white text-black">{visits}</span>
            </span>
        </div>
    );
}
export default VisiterCounter;