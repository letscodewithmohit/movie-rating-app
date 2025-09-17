const TopRatedMovies = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p className="text-center py-10">No top-rated movies</p>;
  }

  return (
    <div className=" flex justify-center items-center">
      <div className="flex space-x-4 snap-x snap-mandatory">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[200px] bg-gray-800 rounded-lg overflow-hidden shadow-lg snap-start hover:scale-105 transition-transform duration-300"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
              <p className="text-sm text-gray-400">⭐ {movie.rating}/5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;
