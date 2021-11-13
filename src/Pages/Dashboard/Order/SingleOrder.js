import React, { useEffect, useState } from 'react';

const SingleOrder = (props) => {
    const {productid, _id } = props.order;
    const [product, setProduct] = useState();
    useEffect( () => {
        fetch(`https://blooming-harbor-85251.herokuapp.com/product/${productid}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    },[productid]);
    
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

        fetch(`https://blooming-harbor-85251.herokuapp.com/product/${productid}`)
        .then(res => res.json())
        .then(data => setProduct(data));
        
    }
    return (
        <tr>
            <td>
                <div className="flex items-center">
                    <div className="bg-gray-100 rounded-sm p-2.5">
                        <img style={{width:'100px', height:'100px'}} src={product?.img} alt={product?.name} />
                    </div>
                    <div className="pl-3">
                        <div className="flex items-center text-sm leading-none">
                            <p className="font-semibold text-gray-800">{product?.name}</p>
                            <p className="text-blue-500 ml-3">Order id: {_id}</p>
                        </div>
                        <p className="text-xs md:text-sm leading-none text-gray-600 mt-2"><button onClick={() => handCanceled(_id) }>Canceled Your Order</button></p>
                    </div>
                </div>
            </td>
            <td className="pl-16">
                <div>
                    <p className="text-sm font-semibold leading-none text-right text-gray-800">${product?.price}</p>
                       
                    <div className="flex items-center justify-center px-2 py-1 mt-2 bg-green-100 rounded-full">
                        <p className="text-xs leading-3 text-green-700">{props.order.shipped}</p>
                    </div>
                        
                </div>
            </td>
        </tr>
    );
};

export default SingleOrder;