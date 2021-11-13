import { Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {user} = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const NewAdminuser = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `${user.email}`,
            },
            body: JSON.stringify(NewAdminuser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })  

        e.preventDefault()
    }

    return (
            <div className="bg-white dark:bg-gray-800">
                <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
                    <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Make Admin</p>
                            
                        </div>
                    </div>
                </div>
                <form onSubmit={handleAdminSubmit} >
                    <div className="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">
                        <div className="mx-auto pt-4">
                            <div className="container mx-auto">
                                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                    <label className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                        Email Address
                                    </label>
                                    <input onBlur={handleOnBlur} type="text" name="firstName" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                                </div>
                                
                            
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto w-11/12 xl:w-full">
                        <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex ">
                            <button className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" type="submit">
                                Make Admin
                            </button>
                        </div>
                    </div>
                </form>
                {success && <Alert severity="success">Made Admin successfully!</Alert>}
            </div>
    );
};

export default MakeAdmin;