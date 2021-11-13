import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import SingleOrder from './SingleOrder';

const Order = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState();
    useEffect(()=>{
        fetch(`https://blooming-harbor-85251.herokuapp.com/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[user])
    return (
        <>
            <div className="w-2/3 mb-10 px-4">
                <div className="border rounded-lg border pb-6 border-gray-200">
                    <div className="flex items-center border-b border-gray-200 justify-between px-6 py-3">
                        <p className="text-sm lg:text-xl font-semibold leading-tight text-gray-800">Product Order</p>
                        <div className="flex cursor-pointer items-center justify-center px-3 py-2.5 border rounded border-gray-100">
                            <p className="text-xs md:text-sm leading-none text-gray-600">Filter by: Latest</p>
                        </div>
                    </div>
                    <div className="px-6 pt-6 overflow-x-auto">
                        <table className="w-full whitespace-nowrap">
                            <tbody>

                                {
                                orders?.map( order => <SingleOrder key={order._id} order={order}></SingleOrder>) 
                                
                                }
                                    
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;