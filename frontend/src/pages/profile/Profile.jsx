import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import API from "../../api/api";

const Profile = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState(null);
  const {logout} = useContext(AuthContext);
  const [loading, setLoading] = useState(true); // 👈 loading state
  const [error, setError] = useState(null);
  
 useEffect(()=>{
  const fetchProfile = async () => {
   try{
 const res = await API.get('/auth/profile');
    setUser(res.data);
    
   }catch(err){
    setError("Failed to load profile");
    console.log("error fetching profile!",err);
   }finally {
        setLoading(false);
    }
  };
  
  fetchProfile()

 },[])

  const handleLogout = () => {
    // Remove token from localStorage
    logout();
    navigate("/");
  };
  
    //  Loading state
  if (loading) {
    return <p className="text-black">Loading profile...</p>;
  }

  //  Error state
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  return (

 <div className="text-black p-4">
  {/* {!user ? <p className="text-black">Loading profile... </p> : <p>{error}</p>} */}
      <h1 className="text-2xl font-bold mb-4">👤 Profile</h1>
      <p><strong>Name:</strong> {user?.username}</p>
      <p><strong>Email:</strong> {user?.email}</p>

      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>


   
  );
};

export default Profile;
