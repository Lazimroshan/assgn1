import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [Signup, setSignup] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handlesignup = (event) => {
    setSignup({ ...Signup, [event.target.name]: event.target.value });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    const signup = await axios.post(`http://localhost:5000/create`, Signup);
    console.log(signup.data);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl bg-[url('/img6.jpg')] bg-cover bg-center bg-no-repeat justify-center">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <div>
          <form
            onSubmit={handlesubmit}
            className="flex flex-col items-center space-y-4"
          >
            <div className="w-full max-w-xs">
              <label
                htmlFor="username"
                className="block text-gray-700 font-bold"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handlesignup}
                required
                className="w-full px-3 py-2 border border-black rounded-md text-center"
              />
            </div>

            <div className="w-full max-w-xs">
              <label htmlFor="email" className="block text-gray-700 font-bold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handlesignup}
                required
                className="w-full px-3 py-2 border border-black rounded-md"
              />
            </div>

            <div className="w-full max-w-xs">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handlesignup}
                required
                className="w-full px-3 py-2 border border-black rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full max-w-xs bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Signup
            </button>

            <Link
              to="/"
              className="block text-center mt-4 text-blue-500 hover:text-blue-700 font-bold"
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
