import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Upload from "../components/Upload";

const header = ({setAuth}) => {
    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem("token");
        setAuth(false);
    }

    return (
        <header className="h-16 bg-white border-b border-gray-primary mb-8">
            <div className="container mx-auto max-w-screen-lg h-full">
               <div className="flex justify-between h-full">
                   <div className=" text-center flex items-center align-items cursor-pointer">
                   <div className="bg-clip-text text-transparent from-green-600 via-teal-100 to-blue-400 bg-gradient-to-r text-5xl font-black">
                   <Link to="/home">RepDB</Link> 
                   </div>
                   <div className="">
                   </div>
                   <div className="">

                    </div>
                    </div>
                    </div>
                    </div>
        </header>
    )
};


export default header
