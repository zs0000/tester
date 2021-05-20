import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from "../components/Header";
const Register = ({ setAuth }) => {

    const [inputs, setInputs] = useState({
        email:"",
        password:"",
        name:""
    });

    const { email, password, name } =  inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]
        : e.target.value})
    }
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {email, password, name};
            const response = await fetch("http://localhost:3001/auth/register", {
                method: "POST",
                headers: { "Content-Type" :  "application/json" },
                body: JSON.stringify(body)
            });
            const parseRes = await response.json()
            if(parseRes.token) {
                localStorage.setItem("token", parseRes.token);
                setAuth(true);
    
                toast.success("Logged in successfully")
               } else {
                   setAuth(false);
                   toast.error(parseRes);
               }
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <div className="absolute min-w-full">
                <Header />
            </div>
            <div className="bg-gray-50 min-h-screen flex flex-col justify-center">
                <div className='max-w-md w-full mx-auto'>
                    <div className="text-center font-medium text-2xl">
                        Welcome.
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mt-2 text-center">
                            We're happy you're here!
                            </div>
                            </div>
            <div className="max-w-md w-full  mx-auto mt-4 bg-white p-8 border border-gray-300">
            <form onSubmit={onSubmitForm}>
            <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">Name</label>
            <input 
            className="w-full p-2 border bg-gray-200 focus:bg-white border-gray-300 rounded mt-1"
            type="text" 
            name="name" 
            placeholder="name"
            value={name}
            onChange={e=> onChange(e)}
            />
            </div>
            <div>
                <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
                <input 
                type="email" 
                name="email" 
                placeholder="email"
                value={email}
                className="w-full p-2 border bg-gray-200 focus:bg-white border-gray-300 rounded mt-1" 
                onChange={e=> onChange(e)} />
                </div>
                <div>
                <label htmlFor="" className="text-sm font-bold text-gray-600 block">Password</label>
                <input 
                type="password" 
                name="password" 
                placeholder="password"
                value={password}
                className="w-full p-2 border bg-gray-200 focus:bg-white border-gray-300 rounded mt-1" 
                onChange={e=> onChange(e)}
                 />
                 </div>
                 <div>
                 </div>
                 <div>
                <button className="w-full py-2 px-4 mt-4 bg-green-600 hover:bg-green-700 rounded-md shadow-sm text-white text-sm">Register</button>
                </div>
                <div className="flex flex-col justify-center text-center lg:mx-w-md sm:mx-auto">
            <Link to="/login" className="w-full my-4 py-2 px-4 bg-green-600 hover:bg-green-700 rounded-md  shadow-2xl text-white text-sm">Already Signed Up?</Link>
            </div>
            </form>
            <div>
            </div>
            
            </div>
            
            </div>
            
        </Fragment>
    );
};

export default Register
