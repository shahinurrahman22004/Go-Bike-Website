import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';


const Checkout = () => {
    const {productId} = useParams();
    const { user } = useAuth();
    
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
    }
    
    const [product, setProduct] = useState();
    
    useEffect( () => {
        fetch(`https://blooming-harbor-85251.herokuapp.com/product/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    },[productId]);

    
    const initialiInfo = {productid: productId, shipped: 'Pending', district: '', divishion: '', zipCode: '', username: user.displayName, email: user.email, phone: '', address: ''}
    const [orderInfo, setOrderInfo] = useState(initialiInfo);
    const [sucess, setSucess] = useState(false);
    const handlePaySubmit = e => {
        fetch('https://blooming-harbor-85251.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => {
            
           if(data.insertedId){
                setSucess(true);
           }
        })

        e.preventDefault();
    }
   
    return (
        <>
        <Header></Header>
        <div className="flex justify-center items-center">
            <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                <div className="flex flex-col justify-start items-start w-full space-y-9">
                    <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                        <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                            <div className="flex flex-col justify-start items-start w-full space-y-4">
                                <p className="text-xl md:text-2xl leading-normal text-gray-800">{product?.name}</p>
                                <p className="text-base font-semibold leading-none text-gray-600">${product?.price}</p>
                            </div>
                            <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                                <img src={product?.img} alt={product?.name} />
                            </div>
                        </div>

                        <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
                            <form onSubmit={handlePaySubmit}>
                               
                                <input 
                                    className="border mb-2 border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" 
                                    type="text"
                                    name="username"
                                    onBlur={handleOnBlur}
                                    defaultValue={user.displayName}
                                    disabled
                                />
                                
                                <input
                                    name="email"
                                    onBlur={handleOnBlur}
                                    defaultValue={user.email} 
                                    className="border mb-2  border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                    type="email" 
                                    disabled
                                 />
                                <input 
                                    className="border  mb-2 border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"  
                                    type="tel"
                                    placeholder="Phone Number"
                                    name="phone"
                                    required
                                    onBlur={handleOnBlur}
                                />
                                <input
                                className="border mb-2 border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                type="text" 
                                name="address"
                                placeholder="Street Address"
                                required 
                                onBlur={handleOnBlur}
                                />
                                <input
                                className="border mb-2 border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                type="text" 
                                name="district"
                                required
                                placeholder="District" 
                                onBlur={handleOnBlur}
                                />
                                <input
                                className="border mb-2 border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                type="text" 
                                name="divishion"
                                placeholder="Divishion" 
                                required
                                onBlur={handleOnBlur}
                                />
                                <input
                                className="border mb-2 border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                type="text" 
                                name="zipCode"
                                required
                                placeholder="ZIP Code" 
                                onBlur={handleOnBlur}
                                />
                                
                                <button 
                                type="submit"
                                className="mt-6 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                                    <div>
                                        <p className="text-base leading-4">Order</p>
                                    </div>
                                </button>
                                {
                                    sucess && <Alert severity="success">Order has been SuccessFully</Alert>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Checkout;

