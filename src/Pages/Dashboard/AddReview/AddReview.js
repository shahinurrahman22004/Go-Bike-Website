import { Alert } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
const AddReview = () => {
    const {user}  = useAuth();
    const initialiInfo = {name: user.displayName, email: user.email, rat: '', description: ''}
    const [review, setReview] = useState(initialiInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...review};
        newReview[field] = value;
        setReview(newReview);
    }
    const [sucess, setSucess] = useState(false);
    const handleReiewSubmit = e => {
        console.log(review)
        fetch('https://blooming-harbor-85251.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
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
        <div className="bg-white dark:bg-gray-800">
            <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
                <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
                    <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                        <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Add New Review</p>
                        
                    </div>
                </div>
            </div>
            <form onSubmit={handleReiewSubmit}>
                <div className="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">
                    <div className="mx-auto pt-4">
                        <div className="container mx-auto">
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                
                                <input 
                                onBlur={handleOnBlur}
                                type="text" 
                                name="name" 
                                value={user?.displayName}
                                disabled
                                required 
                                className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                
                                />
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                
                                <input 
                                type="number"
                                name="rat"
                                required
                                className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                placeholder="5"                         
                                onBlur={handleOnBlur}
                                />
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                               
                                <textarea name="description"
                                required
                                className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"                                
                                onBlur={handleOnBlur}
                                />
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className="container mx-auto w-11/12 xl:w-full">
                    <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex ">
                        <button type="submit" className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" >
                            Add Review
                        </button>
                    </div>
                </div>
                {
                    sucess && <Alert severity="success">Review Added SuccessFully</Alert>
                }
            </form>
        </div>
    </>
    );
};

export default AddReview;