import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import {
    Link,
    NavLink
  } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { Button } from '@mui/material';


const Header = () => {

    const {user, logout} = useAuth();

    return (
        <Popover className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/"><span className="text-indigo-600 text-3xl font-bold ml-2 cursor-pointer">GoBike</span></Link>
                        
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-indigo-600 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover as="nav" className="hidden md:flex space-x-10">  
                       
                        <NavLink to="/" className="text-base font-medium text-gray-500 hover:text-indigo-600">Home</NavLink>
                        <NavLink to="/products" className="text-base font-medium text-gray-500 hover:text-indigo-600">Products</NavLink>
                        {
                            user?.email && 
                            <NavLink to="/dashboard" className="text-base font-medium text-gray-500 hover:text-indigo-600">Dashboard</NavLink>
                        }         
                    </Popover>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        {
                            user?.email ? 
                            <Button onClick={logout} variant="contained">LogOut</Button>
                            :
                            <NavLink to="/signin" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >Sign In</NavLink>
                        }
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="z-50 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                <Link to="/"> <span className="text-indigo-600 text-3xl font-bold">GoBike</span></Link>
                                </div>
                                <div className="-mr-2">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                <NavLink to="/" className="text-base font-medium text-gray-500 hover:text-indigo-600">Home</NavLink>
                        <NavLink to="/products" className="text-base font-medium text-gray-500 hover:text-indigo-600">Products</NavLink>
                        <NavLink to="/checkout" className="text-base font-medium text-gray-500 hover:text-indigo-600">Checkout</NavLink>
                        <NavLink to="/dashboard" className="text-base font-medium text-gray-500 hover:text-indigo-600">Dashboard</NavLink>
                                </nav>
                            </div>
                        </div>
                    <div className="py-6 px-5 space-y-6">                    
                        {
                            user?.email ? 
                            <Button onClick={logout} variant="contained">LogOut</Button>
                            :
                            <NavLink to="/signin" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >Sign In</NavLink>
                        }
                    </div>
                </div>
            </Popover.Panel>
        </Transition>
        </Popover>
    );
};

export default Header;