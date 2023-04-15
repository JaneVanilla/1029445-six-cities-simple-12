import { useEffect, useState } from 'react';
//import { sortCommentDateDown } from '../../common';
import { MAX_COUNT_COMMENTS } from '../../const';
import { useAppSelector } from '../../hooks';
import Review from '../../types/review';
import ReviewListItem from '../review-list-item/review-list-item';

function ReviewsList(): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);
  const [currentReviews, setCurrentReviews] = useState<Review[]>([]);

  useEffect(() => {
    setCurrentReviews(reviews);
  }, [reviews]);
  let comments;
  if(currentReviews.length !== 0) {
    comments = currentReviews.slice(0, MAX_COUNT_COMMENTS).map((comment:Review) => (
      <ReviewListItem
        key={comment.id}
        comment={comment.comment}
        date={comment.date}
        id={comment.id}
        rating={comment.rating}
        user={comment.user}
      />)
    );
  }
  return (
    <><h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <div>
        <ul className="reviews__list">
          {comments}
        </ul>
      </div>
    </>
  );
}

export default ReviewsList;
