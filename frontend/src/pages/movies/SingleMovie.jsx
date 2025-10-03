import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "6b37a579";

const SingleMovie = () => {
  const { id } = useParams(); // imdbID
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // Dummy recommendations + soundtracks
  const recommendations = [
    { id: "tt4154796", title: "Avengers: Endgame", poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2NjYzOV5BMl5BanBnXkFtZTgwODk5OTQ3NzM@._V1_SX300.jpg" },
    { id: "tt1375666", title: "Inception", poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwODI5OTM0Mw@@._V1_SX300.jpg" },
    { id: "tt1877830", title: "The Batman", poster: "https://m.media-amazon.com/images/M/MV5BMmUwNTlmYzUtNzFiYS00YjA2LWI1NjItN2Y4ZTZjY2U3YmQ0XkEyXkFqcGc@._V1_SX300.jpg" },
  ];

  const soundtracks = [
    { id: 1, title: "Main Theme", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { id: 2, title: "Battle Theme", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { id: 3, title: "Love Theme", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  ];

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}&plot=full`
        );
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (!movie) return <p className="text-center text-white">Movie not found</p>;

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Back Button */}
      <div className="px-12 py-4">
        <Link to="/movies" className="text-yellow-400 hover:underline">
          ← Back to Movies
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-[450px] w-full overflow-hidden">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center px-12">
          <div>
            <h1 className="text-5xl font-bold">{movie.Title}</h1>
            <p className="text-lg text-gray-300 mt-2">{movie.Year}</p>
            <p className="mt-4 text-yellow-400 font-bold text-xl">
              ⭐ {movie.imdbRating}
            </p>
          </div>
        </div>
      </div>

      {/* Trailer */}
      <div className="px-12 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">🎬 Trailer</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-[400px] rounded-lg"
            src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Overview */}
      <div className="px-12 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">📖 Overview</h2>
        <p className="text-gray-300 max-w-4xl">{movie.Plot}</p>
      </div>

      {/* Cast */}
      <div className="px-12 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">🎭 Cast</h2>
        <p className="text-gray-300">{movie.Actors}</p>
      </div>

      {/* Genre & Runtime */}
      <div className="px-12 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">📌 Details</h2>
        <p className="text-gray-300">Genre: {movie.Genre}</p>
        <p className="text-gray-300">Runtime: {movie.Runtime}</p>
        <p className="text-gray-300">Released: {movie.Released}</p>
      </div>

      {/* Recommendations */}
      <div className="px-12 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">🎥 Recommendations</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommendations.map((rec) => (
            <Link to={`/movie/${rec.id}`} key={rec.id}>
              <div className="bg-gray-800 rounded-lg p-3 hover:scale-105 transition">
                <img
                  src={rec.poster}
                  alt={rec.title}
                  className="rounded-md h-60 w-full object-cover"
                />
                <h3 className="mt-3 text-lg font-semibold">{rec.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Soundtracks */}
      <div className="px-12 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">🎵 Soundtracks</h2>
        <ul className="list-disc pl-6 text-gray-300">
          {soundtracks.map((track) => (
            <li key={track.id} className="mb-2">
              <a
                href={track.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {track.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Reviews Section */}
      <div className="px-12 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">⭐ User Reviews</h2>
        <p className="text-gray-400">Reviews feature coming soon...</p>
      </div>
    </div>
  );
};

export default SingleMovie;
