import {Reviews} from '../../types/reviews';
import ReviewListItem from '../review-list-item/review-list-item';
type ReviewsListType = {
  reviews: Reviews;
}
export default function ReviewsList({reviews}: ReviewsListType) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewListItem key={review.id} review={review}/>
      ))}
    </ul>
  );
}
