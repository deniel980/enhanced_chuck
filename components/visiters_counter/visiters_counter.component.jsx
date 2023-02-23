//IN PROGRESS



import React, { useState, useEffect } from 'react';


const VisiterCounter = () => {


    const [pageviews, setPageviews] = useState(0);
    const [visits, setVisits] = useState(0);
    
    useEffect(() => {
        if (window.sessionStorage.getItem('visit') === null) {
            // New visit and pageview
            // updateCounter('type=visit-pageview');
            updateCounter('new_visit');
          } else {
            // Pageview
            // updateCounter('type=pageview');
            updateCounter('page_view');
          }

          window.sessionStorage.setItem('visit', 'x');
    }, []);

    
    function updateCounter(type){
        if(type == 'new_visit'){
            setPageviews(pageviews + 1);
            setVisits(visits + 1);
        }else if(type == 'page_view'){
            setPageviews(pageviews + 1);
        }
    }
    
    // function updateCounter(type) {
    
    //   fetch('http://127.0.0.1:3002/api?'+type) // Dynamic request with URL parameter
    //     .then(res => res.json())
    //     .then(data => {
    //       setPageviews(data.pageviews) ; // Display pageviews to user
    //       setVisits(data.visits); // Display visits to user
    //     })
    // }



    
    // 'visit' item persists in storage for the remainder of the user session
    // This is used to determine if the user is visiting for the first time or not

    return (
        <div>
            <p class=" text-xl font-monospace font-bold font"></p>
            <span id="pageviews-count" class="p-7">Page Views: 
                <span class="px-2 bg-white text-black">{pageviews}</span>
            </span>
            <span id="visits-count" >Visits: 
                <span class="px-2 bg-white text-black">{visits}</span>
            </span>
            {/* <div id="credentials" class="">
                <p class="text-xl font-monospace font-semi-bold font">&copy; Daniel Weiner</p>
            </div> */}
        </div>
    );
}
export default VisiterCounter;