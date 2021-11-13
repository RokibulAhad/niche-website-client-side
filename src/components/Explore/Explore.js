import React, { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';
import './Explore.css';

const Explore = () => {
    const [allwatch, setAllWatch] = useState([])

    useEffect(() =>{
        fetch("https://gruesome-labyrinth-21556.herokuapp.com/watches")
        .then(res => res.json())
        .then(data =>setAllWatch(data))
        
    })
    return (
        <div className="container my-5">

            {allwatch.length===0?
            <div style={{minHeight:"100vh"}} className="d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                
            </div>:
            <div>
            <h2 className="my-5 section_title">Our Watch Collections</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                {
                    allwatch.map(watch=><Watch
                        key={watch.key}
                        watch={watch}>
                        
                    </Watch>
                    )
                }
            </div>
            </div>}

         
           
            
        </div>
    );
};

export default Explore;