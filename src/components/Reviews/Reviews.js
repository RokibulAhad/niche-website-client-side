import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

import Rating from 'react-rating';
import './Reviews.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Reviews = () => {
    const [reviews, setreviews] = useState([])

    useEffect(()=>{
        fetch('https://gruesome-labyrinth-21556.herokuapp.com/reviewses')
        .then(res=>res.json())
        .then(data=>setreviews(data))
    })

    var settings = {
        dots: true,
        infinite: false,
        arrows:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,             
              
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    

    return (
        <div className="container review">
            <h2 className="section_title my-4">Product Review</h2>
            <div className="row ">
       
         <Slider {...settings} className="my-5 ">

            {
            reviews.map(rv=><div 
            rv={rv}> 
                          
          
            <h3>{rv.name}</h3>
            <Rating 
            
            initialRating={rv.rating}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color" readonly
            />
            <p>Rating: {rv.rating}</p>
            <p>Review: {rv.review}</p>
            
                         
            </div>)
            }
            </Slider>
            </div>
        </div>
    );
};

export default Reviews;