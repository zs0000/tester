import React, { Fragment, useState, useEffect } from 'react';
import Header from "../components/Header";
import Timeline from "../components/Timeline";
import Sidebar from "../components/Sidebar";
import Upload from "../components/Upload";

const Dashboard = ({setAuth}) => {
    
    const [name, setName] = useState("");

    async function getName(){
        try {
            const response = await fetch("http://localhost:3001/dashboard/" , {
                method: "GET",
                headers: { token: localStorage.token }
            });
            const parseRes = await response.json();
            setName(parseRes.user_name);
        } catch (err) {
            console.error(err.message);
        }
    }
    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem("token");
        setAuth(false);
    }
    useEffect(()=>{
        getName();
    },[]);
    
    return (
        <Fragment>
        <div className="bg-grey-background">
            <Header />
            <div>
                <button type="button" className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 rounded-md  shadow-2xl text-white text-sm" onClick={e=> logout(e)}>Log Out (temp)</button>
            </div>
            <div className="flex justify-start items-start">
                <Upload />
            </div>
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
            <div className="col-span-3">
            <Timeline />
            </div>
        </div>
        </div>
        </Fragment>
    );
};

export default Dashboard
