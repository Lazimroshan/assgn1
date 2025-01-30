import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

function Home  () {

    const {userid}= useParams()
    console.log(userid)

    const navigate = useNavigate()

    const [user,setUser]=useState([])

    useEffect   (() => {

        const token=JSON.parse(localStorage.getItem("token"))

        try{
            axios.get(`http://localhost:5000/user/${userid}`,{
                headers:{Authorization:`Bearer ${token}`}
            })
            .then((res)=>{
                setUser(res.data)
            })
        } catch (error) {
            console.log(error)
        }

        if(!token){
            alert("Please login first")
            navigate("/")
        }

    }, [userid]);


    const logout = () => {
        localStorage.removeItem("token")
        
        navigate("/")
    }



    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 bg-[url('/bg1.jpg')] bg-cover bg-center bg-no-repeat"> 
            <div className="bg bg-gray-200 bg-opacity-10 h-fit p-8 rounded-lg shadow-md w-full max-w-5xl min-h-96 flex flex-col justify-between">
                <div className="justify-center items-center h-full text-center">
                    <h1 className="font-bold text-3xl">WELCOME TO HOME PAGE</h1>
                    <h1 className='text-lg font-bold  pt-16'>User name : {user.username}</h1> 
                    <h1 className='text-lg font-bold pt-2'>Email : {user.email}</h1>
                </div>
                <div className="flex justify-center mt-4">
                    <button onClick={logout} className="bg-red-500 text-white p-2 rounded-md">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;