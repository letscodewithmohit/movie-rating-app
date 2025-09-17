import React from "react";

const MovieOfTheDay = ({ movie, songs = [] }) => {
  if (!movie) return null;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: Movie Details */}
      <div className="flex flex-col items-center text-center">
       <h2 className="text-xl font-bold mb-4 text-yellow-400"> Movie of the day!</h2>
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-40 h-56 object-cover rounded mb-3"
        />
        <h3 className="text-xl font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-300 mb-2">{movie.overview.slice(0, 100)}...</p>
        <p className="text-yellow-400 mb-2">⭐ {movie.rating}</p>
        <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 text-sm">
          View Details
        </button>
      </div>

      {/* Right: Songs List */}
      <div>
        <h4 className="text-lg font-bold mb-3 text-yellow-400">🎵 Songs</h4>
        {songs.length > 0 ? (
          <ul className="space-y-2">
            {songs.map((song, idx) => (
              <li
                key={idx}
                className="bg-gray-700 p-2 rounded hover:bg-gray-600 cursor-pointer"
              >
                {song}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No songs available</p>
        )}
      </div>
    </div>
  );
};

export default MovieOfTheDay;
