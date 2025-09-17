import { useState, useEffect } from "react";

const HeroSlider = ({ movies }) => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [movies.length]);

  return (
    <div className="relative w-[100%] h-[400px] md:h-[495px] overflow-hidden rounded-sm">
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background image */}
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-start px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{movie.title}</h2>
            <p className="mb-4 max-w-lg">{movie.overview}</p>
            <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">
              ⭐ {movie.rating} / 5
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
