// src/components/Auth/AuthModal.jsx
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-black w-full max-w-md p-6 shadow-lg relative">
        
      
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white  font-bold text-2xl cursor-pointer"
        >
          ×
        </button>
        {/* Toggle Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={` text-white px-4 py-2  ${
              isLogin ? "bg-blue-600 font-semibold " : "bg-gray-700 "
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`text-white px-4 py-2 ${
              !isLogin ? "bg-blue-600 font-semibold" : "bg-gray-700 "
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Render Form */}
        {isLogin ? <Login toggle={toggleForm} onClose={onClose} /> : <Signup  toggle={toggleForm} onClose={onClose} />}
      </div>
    </div>
  );
};

export default AuthModal;
