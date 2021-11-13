import React, { useEffect, useState } from 'react';
import SingleAorder from './SingleAorder';

const AdminOrder = () => {

    
    const [orders, setOrders] = useState();
    useEffect(()=>{
        fetch(`https://blooming-harbor-85251.herokuapp.com/orders`)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])
    return (
        <div class="flex flex-col w-4/5 mb-10">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product Title
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User Information
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                        Action
                    </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">

                {
                    orders?.map( order => <SingleAorder key={order._id} order={order}></SingleAorder>) 
                    
                }
                   
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>

    );
};

export default AdminOrder;