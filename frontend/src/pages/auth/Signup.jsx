import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { ModalContext } from "../../context/modalContext/ModalContext.jsx";
import API from '../../api/api.js';

const Signup = ({ toggle }) => {
 const [formData, setFormData] = useState({name : "", email : "", password : ""})
const [error , setError] = useState();
const {login} = useContext(AuthContext);


  const handleChange = (e) =>{
   const {name , value} = e.target;
   setFormData({...formData, [name] : value})
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await API.post("/auth/register", {
      name: formData.name, 
      email: formData.email, 
      password: formData.password
    });

  
    login(res.data.token); 
    alert("Registration Successful frontend 🎉");
    toggle();
    setFormData({name : "", email : "", password : ""});

   
  } catch (err) {
    setError(err.response?.data?.msg || "Something went wrong");
  }
};

  return (
    <div className="text-white">
      {/* <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2> */}
        {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-white">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded text-white"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded text-white"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded text-white"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-red-400 py-2 rounded hover:bg-gray-500 text-white"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center mt-2 text-white">
        Already have an account?{" "}
        <button onClick={toggle} className="text-blue-600 hover:underline">
          Login
        </button>
      </p>
    </div>
  );
};

export default Signup;
