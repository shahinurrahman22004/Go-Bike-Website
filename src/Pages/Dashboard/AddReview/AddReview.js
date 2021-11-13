import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
const AddReview = () => {

    // const ratingChanged = (newRating) => {
    //     console.log(newRating);
        
    // };
    // render(
    //     <ReactStars
    //         count={5}
    //         onChange={ratingChanged}
    //         size={24}
    //         isHalf={true}
    //         emptyIcon={<i className="far fa-star"></i>}
    //         halfIcon={<i className="fa fa-star-half-alt"></i>}
    //         fullIcon={<i className="fa fa-star"></i>}
    //         activeColor="#ffd700"
    //     />,

    //     document.getElementById("where-to-render")
    // )


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
            <div className="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">
                <div className="mx-auto pt-4">
                    <div className="container mx-auto">
                        <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                            <label htmlFor="FirstName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                Reviewer Name
                            </label>
                            <input type="text" name="firstName" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                            <label htmlFor="LastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                               Ratting
                            </label>
                            <input type="number" name="lastName" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                            <label htmlFor="LastName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                               Product Description
                            </label>
                            <textarea id="about" name="about" required className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"  rows={5} defaultValue={""} />
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="container mx-auto w-11/12 xl:w-full">
                <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex ">
                    <button className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" type="submit">
                        Add Review
                    </button>
                </div>
            </div>
        </div>
    </>
    );
};

export default AddReview;