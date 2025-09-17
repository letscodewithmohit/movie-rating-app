import React from "react";

const TrendingMoviesWidget = ({ movies }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md md:h-[495px] overflow-hidden ">
      <h2 className="text-xl font-bold mb-4 text-yellow-400">🔥 Trending Movies</h2>
      <ul className="space-y-3">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="flex items-center gap-3 bg-gray-700 p-2 rounded hover:bg-gray-600 cursor-pointer"
          >
            {/* Small poster */}
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-12 h-16 object-cover rounded"
            />

            {/* Movie info */}
            <div className="flex-1">
              <p className="font-semibold text-sm">{movie.title}</p>
              <p className="text-yellow-400 text-sm">⭐ {movie.rating}</p>
            </div>
          </li>
        ))}
      </ul>

     
    </div>
  );
};

export default TrendingMoviesWidget;
