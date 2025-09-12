import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout ,loading} = useContext(AuthContext);
 
 
 


  const handleLogout = () => {
    logout();
    navigate("/");
  };
  if(loading){
  return <p>Loading Profile....</p>
  }
 
  const dummyReviews = [
  { movie: "Inception", rating: 4, comment: "Amazing movie..." },
  { movie: "Interstellar", rating: 5, comment: "Mind-blowing visuals!" },
  { movie: "The Dark Knight", rating: 5, comment: "Best superhero movie ever." },
  { movie: "Tenet", rating: 3, comment: "Confusing but brilliant concept." },
];

  return (
    <div className="mx-auto p-6 text-black bg-blue-100 ">
  {/* Profile Header */}
  <div className="flex items-center gap-4 mb-6 ">
    <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-3xl font-bold">
      {user?.username?.[0].toUpperCase()}
    </div>
    <div>
      <h1 className="text-2xl font-bold">{user?.username}</h1>
      <p className="text-gray-600">{user?.email}</p>
      <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
        Edit Profile
      </button>
    </div>
  </div>

  {/* Stats */}
  <div className=" max-w-2xl w-full grid grid-cols-3 gap-4 mb-6 ">
    <div className="bg-white shadow-md rounded-xl p-4 text-center">
      <p className="text-xl font-bold">12</p>
      <p className="text-gray-600">Reviews</p>
    </div>
    <div className="bg-white shadow-md rounded-xl p-4 text-center">
      <p className="text-xl font-bold">24</p>
      <p className="text-gray-600">Ratings</p>
    </div>
    <div className="bg-white shadow-md rounded-xl p-4 text-center">
      <p className="text-xl font-bold">3</p>
      <p className="text-gray-600">Blogs</p>
    </div>
  </div>

  {/* Recent Activity */}
<div className="mb-6">
  <h2 className="text-lg font-semibold mb-2">Recent Reviews</h2>
  <ul className="space-y-2">
    {dummyReviews.map((review, index) => (
      <li
        key={index}
        className="p-3 bg-gray-100 rounded-lg flex justify-between items-center"
      >
        <div>
          <p className="font-semibold">{review.movie}</p>
          <p className="text-gray-600 text-sm">“{review.comment}”</p>
        </div>
        <span className="text-yellow-500 text-lg">⭐ {review.rating}</span>
      </li>
    ))}
  </ul>
</div>

  {/* Logout */}
  <button
    onClick={handleLogout}
    className="w-50 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
  >
    Logout
  </button>
</div>

  );
};

export default Profile;
