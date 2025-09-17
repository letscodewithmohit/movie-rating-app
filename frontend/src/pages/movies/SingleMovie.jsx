import React from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();

  // Dummy movie data for now
  const movie = {
    id,
    title: "Inception",
    releaseYear: 2010,
    overview:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 4.8,
    genres: ["Action", "Sci-Fi", "Thriller"],
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    cast: [
      { id: 1, name: "Leonardo DiCaprio", role: "Cobb" },
      { id: 2, name: "Joseph Gordon-Levitt", role: "Arthur" },
      { id: 3, name: "Elliot Page", role: "Ariadne" },
    ],
    watchLink: "https://www.netflix.com/title/70131314",
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[450px] w-full overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center px-12">
          <div>
            <h1 className="text-5xl font-bold">{movie.title}</h1>
            <p className="text-lg text-gray-300 mt-2">{movie.releaseYear}</p>
            <div className="flex space-x-2 mt-3">
              {movie.genres.map((genre, i) => (
                <span
                  key={i}
                  className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
            <p className="mt-4 text-yellow-400 font-bold text-xl">
              ⭐ {movie.rating}
            </p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="px-12 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">📖 Overview</h2>
        <p className="text-gray-300 max-w-4xl">{movie.overview}</p>
      </div>

      {/* Trailer */}
      <div className="px-12 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">🎬 Trailer</h2>
        <iframe
          width="100%"
          height="500"
          src={movie.trailerUrl}
          title="YouTube trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl shadow-lg"
        ></iframe>
      </div>

      {/* Cast & Crew */}
      <div className="px-12 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">🎭 Cast</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {movie.cast.map((actor) => (
            <div
              key={actor.id}
              className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
            >
              <p className="font-semibold">{actor.name}</p>
              <p className="text-sm text-gray-400">as {actor.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Watch Links */}
      <div className="px-12 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">🎥 Watch Now</h2>
        <a
          href={movie.watchLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-800"
        >
          Go to Netflix
        </a>
      </div>
    </div>
  );
};

export default SingleMovie;
