import { Alert, Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Signup = () => {

    const [login, setLogin] = useState({});
    const {user, registerUser , isLoading, error}  = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...login};
        newLoginData[field] = value;
        setLogin(newLoginData);
        console.log(field, value);
    }

    const handleLoginBtn = e => {
        if(login.password !== login.password2){
            alert('Your password did not match');
            return
        }
        registerUser(login.email, login.password, history, login.name)
        e.preventDefault();
    }


    return (
        <div className="bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">
                
                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-10">
                    
                    <p tabIndex={0}  aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                        Register a new account
                    </p>
                    <p className="text-sm my-4 font-medium leading-none text-gray-500">
                        All ready have account?{" "}
                        <Link to="/signin">
                        
                            <span tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                                {" "}
                                Sign in here
                            </span>
                        </Link>
                    </p>
                    
                    { !isLoading && <form onSubmit={handleLoginBtn}>
                        <TextField
                            sx={{width: '98%', m: 1}}
                            id="standard-basic"
                            label="Your Name" 
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{width: '98%', m: 1}}
                            id="standard-basic"
                            type="email"
                            label="Your Email" 
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField 
                            sx={{width: '98%', m: 1}}
                            id="standard-basic"
                            label="Your Password" 
                            name="password"
                            type="password"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField 
                            sx={{width: '98%', m: 1}}
                            id="standard-basic"
                            label="ReType Your Password" 
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard"
                            type="password"
                        />
                        <br />
                        <Button 
                        sx={{width: '98%', m: 1}} type="submit"  variant="contained">Register</Button>
                    </form>}
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">Create User SuccessFully</Alert>
                    }
                    {
                        error && <Alert severity="error">{error}</Alert>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Signup;