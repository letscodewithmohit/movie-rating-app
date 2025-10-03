import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "6b37a579";
  const keywords = ["batman", "avengers", "spider","stranger things"]; // categories

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let allMovies = [];
        for (let keyword of keywords) {
          const res = await fetch(
            `http://www.omdbapi.com/?s=${keyword}&apikey=${API_KEY}`
          );
          const data = await res.json();
          if (data.Response === "True") {
            allMovies = [...allMovies, ...data.Search];
          }
        }
        setMovies(allMovies);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [keywords]);

  if (loading) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="bg-gray-900 min-h-screen text-white px-12 py-8">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">🎬 All Movies</h1>

      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <Link to={`/singlemovie/${movie.imdbID}`}>
            <div key={movie.imdbID} className="bg-gray-800 p-3 rounded-lg shadow">
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={movie.Title}
                className="w-full h-72 object-cover rounded"
              />
              <h2 className="mt-3 text-lg font-semibold">{movie.Title}</h2>
              <p className="text-sm text-gray-400">{movie.Year}</p>
            </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
