import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Testimonials = () => {
   // const {review, setReview} = useState({});

   const [orders, setOrders] = useState();
   useEffect(()=>{
       fetch(`https://blooming-harbor-85251.herokuapp.com/reviews`)
       .then(res => res.json())
       .then(data => setOrders(data));
   },[])


    console.log(orders);
    return (
        
        <div className="bg-gray-100 pt-16">
            <div>
                <h2 className="text-2xl leading-6 text-gray-800 text-center px-4">Testimonials</h2>
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 mt-6 text-center">What our client says</h1>
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-20 px-10 py-20 gap-6">
                {
                        orders?.map(review => <SingleReview review={review}></SingleReview>)
                    }
               </div>
            </div>
        </div>
    );
};

export default Testimonials;
