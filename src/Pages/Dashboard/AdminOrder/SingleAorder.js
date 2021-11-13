import React, { useEffect, useState } from 'react';



const SingleAorder = (props) => {

    const {productid, _id, username, phone, address, shipped } = props.order;
    const [product, setProduct] = useState();
    useEffect( () => {
        fetch(`https://blooming-harbor-85251.herokuapp.com/product/${productid}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    },[productid]);
    
    const handShipped = shippedId => {
        const id = shippedId;
        const url = `https://blooming-harbor-85251.herokuapp.com/orders?ship=shipped&id=${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
           // body: JSON.stringify(id)
        })
    }
    const handCanceled = canId => {
        const id = canId;
        const url = `https://blooming-harbor-85251.herokuapp.com/orders?can=cancheled&id=${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
           // body: JSON.stringify(id)
        })
    }


    return (
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src={product?.img} alt={product?.name} />
                </div>
                <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                   {product?.name}
                    </div>
                    
                </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500"> Name: {username}, <br /> Phone: {phone}, <br />Address: {address} </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {shipped}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {product?.price}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={() => handShipped(_id) }>Shipped</button> | <button onClick={() => handCanceled(_id) }>Canceled</button>
            </td>
        </tr>
    );
};

export default SingleAorder;