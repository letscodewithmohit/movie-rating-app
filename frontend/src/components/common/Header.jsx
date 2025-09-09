
import React, { useContext, useState } from "react";
import AuthModal from "../../pages/auth/AuthModal"; // import modal
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
const [isModalOpen, setIsModalOpen] = useState(false);
// const token = localStorage.getItem("token");

  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <header className="sticky bg-blue-500  text-white shadow-gray-400 shadow-lg ">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
          {/* Logo */}
         <Link to="/"> <p className=" logo-text text-2xl font-bold">🎬 Movie-Blog's</p></Link>

              {/*Search bar */}
          <div className="w-100">
           <input type="search" placeholder="Search By Movie Title..." className="text-black bg-white px-2 py-1 w-full text-xl outline-none border border-gray-500"/>
          </div>

          {/* Auth button */}
          {isAuthenticated ? <Link to='/profile'><p className="cursor-pointer px-2 py-1 font-bold bg-white text-black rounded-2xl">M</p></Link> : <div className="flex gap-5 items-center justify-center">
      
            <button
              onClick={() => setIsModalOpen(true)} 
              className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-500 cursor-pointer "
            >
              Login / Sign Up
            </button>
          </div>  }
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </>
  );
};

export default Header;
