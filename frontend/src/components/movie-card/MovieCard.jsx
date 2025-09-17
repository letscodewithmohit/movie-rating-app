import React from "react";
import {Link} from "react-router-dom";

const MovieCard = ({movie}) => {
  const {id, title, poster, rating, year} = movie;

  return (
    <article className="bg-gray-800 rounded-lg overflow-hidden shadow ">
      <Link to={`/singlemovie/${id}`} aria-label={`View details for ${title}`}>
        <img
          src={poster}
          alt={`${title} poster`}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
      </Link>

      <div className="p-3">
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>

        <div className="flex items-center justify-between mt-2">
          <div className="text-yellow-400 font-medium">⭐ {rating}</div>
          <div className="text-sm text-gray-400">{year}</div>
        </div>

        <Link
          to={`/singlemovie/${id}`}
          className="mt-3 block text-center bg-red-600 hover:bg-red-700 py-2 rounded text-sm font-medium"
        >
          View Details
        </Link>
      </div>
    </article>
  );
};

export default MovieCard;
