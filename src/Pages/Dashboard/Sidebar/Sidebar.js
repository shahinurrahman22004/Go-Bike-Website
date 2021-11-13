import React from 'react';
import {
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const Sidebar = (props) => {
    const show = props.show;
    let { url } = useRouteMatch();
    const {logout, admin} = useAuth();
    return (
        <div className={`${show ? "hidden -translate-x-full" : "sm:w-64 translate-x-0"}  bg-indigo-700 transform  xl:translate-x-0 shadow xl:rounded-r  h-full top-22 sm:z-20 bg-white  ease-in-out transition duration-500 flex justify-start items-start `} >          

            <div id="Main" className=" bg-indigo-700 transform  xl:translate-x-0 shadow xl:rounded-r  h-full top-22 sm:z-20 bg-white  ease-in-out transition duration-500 flex justify-start items-start w-full sm:w-64 flex-col ">
                <div className="   mt-4 flex flex-col px-6 justify-start  px-4 w-full   ">
                    <Link to={`${url}/dashboard`}>
                        <button className="focus:outline-none focus:text-white  flex jusitfy-start   hover:text-white  text-indigo-200 hover:text-white rounded py-3  items-center space-x-6 w-full ">
                            
                            <p className="text-base leading-4 border-b border-transparent  hover:border-white focus:border-white  ">Dashboard</p>
                        </button>
                    
                    </Link>
                    {admin && <Link to={`${url}/add-product`}>
                        <button className="focus:outline-none focus:text-white  flex jusitfy-start   hover:text-white  text-indigo-200 hover:text-white rounded py-3  items-center space-x-6 w-full ">
                            <p className="text-base leading-4 border-b border-transparent  hover:border-white focus:border-white  ">Add Product</p>
                        </button>                    
                    </Link> }
                    {!admin && <Link to={`${url}/order`}>
                        <button className="focus:outline-none focus:text-white  flex jusitfy-start   hover:text-white  text-indigo-200 hover:text-white rounded py-3  items-center space-x-6 w-full ">
                            <p className="text-base leading-4 border-b border-transparent  hover:border-white focus:border-white  ">Order</p>
                        </button>                    
                    </Link>
                    }
                    {admin && <Link to={`${url}/order-admin`}>
                        <button className="focus:outline-none focus:text-white  flex jusitfy-start   hover:text-white  text-indigo-200 hover:text-white rounded py-3  items-center space-x-6 w-full ">
                            <p className="text-base leading-4 border-b border-transparent  hover:border-white focus:border-white  ">Order</p>
                        </button>                    
                    </Link> }
                    {admin &&
                    <Link to={`${url}/make-admin`}>
                        <button className="focus:outline-none focus:text-white  flex jusitfy-start   hover:text-white  text-indigo-200 hover:text-white rounded py-3  items-center space-x-6 w-full ">
                            <p className="text-base leading-4 border-b border-transparent  hover:border-white focus:border-white  ">Make Admin</p>
                        </button>                    
                    </Link>
                    }
                    <Link to={`${url}/add-review`}>
                        <button className="focus:outline-none focus:text-white  flex jusitfy-start   hover:text-white  text-indigo-200 hover:text-white rounded py-3  items-center space-x-6 w-full ">
                            <p className="text-base leading-4 border-b border-transparent  hover:border-white focus:border-white  ">Add Review</p>
                        </button>                    
                    </Link>
                    
                    <button onClick={logout} className="focus:outline-none focus:text-white  flex jusitfy-start   hover:text-white  text-indigo-200 hover:text-white rounded py-3  items-center space-x-6 w-full ">
                            <p className="text-base leading-4 border-b border-transparent  hover:border-white focus:border-white  ">Logout</p>
                        </button>   
                </div>    
            </div>
        </div>
    );
};

export default Sidebar;