
import React, { useState,useContext } from "react";
import {useNavigate} from "react-router-dom";
import API from '../../api/api.js';
import { AuthContext } from "../../context/authContext/AuthContext";
import { ModalContext } from "../../context/modalContext/ModalContext.jsx";



const Login = ({ toggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const {login} = useContext(AuthContext);
  const { setAuthModalOpen } = useContext(ModalContext);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
    const res = await API.post('/auth/login',{email,password});
   
    // token in jwt
  //  localStorage.setItem("token", res.data.token);
      login(res.data.token)
      alert("Login Successful 🚀");
      console.log("User:", res.data.user);
     
      setAuthModalOpen(false);
      navigate('/profile')
      
      setEmail("");
      setPassword("");
      setError("")

   } catch (err) {
      setError(err.response?.data?.msg || "Something went wrong");
      console.log(error);
      
    }
  };

  return (
    <div className="text-white">
      {/* <h2 className="text-2xl font-bold mb-4 text-center">Login</h2> */}
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-white">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-red-400  py-2 rounded hover:bg-gray-500 text-white"
        >
          Login
        </button>
      </form>
      <p className="text-center mt-2 text-white">
        Don't have an account?{" "}
        <button onClick={toggle} className="text-blue-600 hover:underline">
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;
