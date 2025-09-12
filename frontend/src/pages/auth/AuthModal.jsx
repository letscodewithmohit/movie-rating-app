
import React, { useContext, useState } from "react";
import {ModalContext} from '../../context/modalContext/ModalContext'
import Login from "./Login";
import Signup from "./Signup";

const AuthModal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {isAuthModalOpen, setAuthModalOpen} = useContext(ModalContext);

 if (!isAuthModalOpen) return null;

  const toggleForm = () => setIsLogin(!isLogin);
  const close = () => setAuthModalOpen(false);
 

  return (
    <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-black w-full max-w-md p-6 shadow-lg relative">
        
      
        <button
          onClick={close}
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
        {isLogin ? <Login toggle={toggleForm} /> : <Signup  toggle={toggleForm} />}
      </div>
    </div>
  );
};

export default AuthModal;
