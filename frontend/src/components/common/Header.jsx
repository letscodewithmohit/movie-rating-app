import {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/authContext/AuthContext";
import {ModalContext} from "../../context/modalContext/ModalContext";

const Header = () => {
  const {setAuthModalOpen} = useContext(ModalContext);
  const {isAuthenticated, user} = useContext(AuthContext);

  return (
    <>
      <header className=" bg-gray-900 text-white px-4">
        <div className="flex justify-between items-center py-3 ">
          {/* Logo */}
          <Link to="/">
            {" "}
            <p className=" logo-text text-2xl font-bold">🎬 Movie-Blog's</p>
          </Link>

          {/*Search bar */}
          <div className="w-100 ">
            <input
              type="search"
              placeholder="Search By Movie Title..."
              className="text-black bg-white px-2 py-1 w-full  outline-none border border-gray-500"
            />
          </div>

          <nav className="flex flex-row gap-4 justify-center text-lg font-medium">
            <a href="/">Home</a>
            <a href="/movies">Movies</a>
            <a href="/blogs">Blogs</a>
            <a href="/reviews">Reviews</a>
          </nav>

          {/* Auth button */}
          {isAuthenticated ? (
            <Link to="/profile">
              <p className="cursor-pointer px-2 py-1 font-bold bg-white text-black rounded-2xl">
                {user?.username.toUpperCase()[0]}
              </p>
            </Link>
          ) : (
            <div className="flex gap-5 items-center justify-center">
              <button
                onClick={() => setAuthModalOpen(true)}
                className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-500 cursor-pointer "
              >
                Login / Sign Up
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
