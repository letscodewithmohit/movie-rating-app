import ReviewCard from "./ReviewCard";

const RecentReviews = ({ reviews }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
      <p>see more...</p>
    </div>
  );
};

export default RecentReviews ;
