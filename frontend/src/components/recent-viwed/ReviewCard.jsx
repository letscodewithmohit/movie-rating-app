const ReviewCard = ({ review }) => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300">
      {/* Movie Title */}
      <h3 className="text-lg font-semibold mb-1">{review.movieTitle}</h3>

      {/* Rating */}
      <p className="text-yellow-400 mb-2">⭐ {review.rating} / 5</p>

      {/* Review Text */}
      <p className="text-gray-300 text-sm italic">"{review.comment}"</p>

      {/* Reviewer */}
      <p className="text-gray-400 text-xs mt-2">- {review.user}</p>
    </div>
  );
};

export default ReviewCard;