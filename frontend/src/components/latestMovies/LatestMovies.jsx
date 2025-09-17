

const LatestMovies = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p className="text-center py-10">No movies available</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-60 object-cover"
          />
          <div className="p-3">
            <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
            <p className="text-sm text-gray-400">⭐ {movie.rating}/5</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestMovies;
