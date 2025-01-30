import { useState } from "react"
import {  Link, useNavigate } from "react-router-dom"
import axios from "axios";


function Login() {

   const navigate = useNavigate()

  const [Login,setLogin] = useState({
    email:"",
    password:""
  })

  const handlelogin = (event) => {
    setLogin({ ...Login, [event.target.name]: event.target.value });
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    const response=await axios.post(`http://localhost:5000/login`,{
      email:Login.email,
        password:Login.password
    });
    console.log(response.data)
    
    if(response.data.message === "success"){
        localStorage.setItem("token",JSON.stringify(response.data.token))
        const userid=response.data.userId
        navigate(`/Home/${userid}`)
    }else {
        alert("invalid username or password")
    }

}


    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-200"> 
                <div className="h-fit p-8 rounded-lg shadow-md w-full max-w-5xl bg-[url('/img6.jpg')] bg-cover bg-center bg-no-repeat justify-center ">
                    <div className="grid grid-cols-2 gap-4  ">
                    <div className="flex justify-center items-center h-full text-center">
                        <h1 className="font-bold text-3xl font">WELCOME BACK</h1>
                    </div>
                    <div>
                    <h1 className="text-3xl font-bold tracking-[.20em] mb-5 text-center">LOGIN</h1>
                    <form action="" onSubmit={handleSubmit} >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="username">
                           Email
                        </label>
                        <input type="email" id="username" className="border border-gray-300  p-2 w-full rounded-2xl" 
                        name="email"
                         onChange={handlelogin}
                        
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input type="password" id="password" className="border border-gray-300  p-2 w-full rounded-2xl"
                        name="password"
                        onChange={handlelogin}  />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl justify-center w-full">
                        Login
                    </button>
                    <Link to="/signup" className="text-center block mt-4 text-black hover:text-blue-700 font-bold">signup</Link>
                    </form> 
                    </div>
                    
                    </div>
                    
                </div>
            </div>
        </>
    )
  }
  
  export default Login
