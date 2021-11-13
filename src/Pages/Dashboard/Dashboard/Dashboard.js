import React, { useState } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import AddProduct from '../AddProduct/AddProduct';
import Sidebar from '../Sidebar/Sidebar';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import Order from '../Order/Order';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminOrder from '../AdminOrder/AdminOrder';
import AdminRoute from '../../LogIn/AdminRoute/AdminRoute';

const Dashboard = () => {
    const [show, setShow] = useState(false);
    let { path } = useRouteMatch();  
    return (
        <>
        
            <Header></Header>
            <div className="bg-indigo-700 rounded-r shadow xl:hidden flex justify-between w-full p-6 items-center border-b border-transparent sm:border-gray-200 ">
                
                <div aria-label="toggler" className="flex justify-center items-center">
                    <button id="open" aria-label="open" onClick={() => setShow(!show)} className={`${show ? "" : "hidden"} focus:outline-none focus:ring-2 `}>
                        <svg className="text-indigo-200" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button id="close" aria-label="close" onClick={() => setShow(!show)} className={`${show ? "hidden" : ""} focus:outline-none focus:ring-2  `}>
                        <svg className="text-indigo-200" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="w-full flex ">  
                <div className="bg-indigo-700">
                    <Sidebar show={show}></Sidebar>
                </div>          
                <div className="w-full ml-11 mt-11">
                    <Switch>
                        <AdminRoute path={`${path}/add-product`} >
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <Route path={`${path}/order`} >
                            <Order></Order>
                        </Route>
                        <AdminRoute path={`${path}/order-admin`} >
                            <AdminOrder></AdminOrder>
                        </AdminRoute>
                        <Route path={`${path}/add-review`} >
                            <AddReview></AddReview>
                        </Route>
                        <AdminRoute path={`${path}/make-admin`} >
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                    </Switch>
                   
                </div>
            </div>                  
              
            <Footer></Footer>
        </>
    );
};

export default Dashboard;