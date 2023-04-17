import {ChangeEvent, useState, useEffect, Fragment, FormEvent } from 'react';
import {MIN_CHARACTER_COMMENT, MAX_CHARACTER_COMMENT, RATING_STARS_COUNT} from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ReviewData } from '../../types/review-data';
import { sendReviewAction } from '../../store/api-actions';
import {Offer} from '../../types/offers';

function ReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);
  const [isFormEnabled, setFormEnabled] = useState(false);

  const onSubmit = (reviewData: ReviewData) => {
    setFormEnabled(true);
    dispatch(sendReviewAction(reviewData));
    setFormEnabled(false);
    clearForm();
  };

  const offer = useAppSelector((state) => state.offer) as Offer;
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({
      hotelId: offer.id,
      comment: review,
      rating: rating,
    });
  };

  useEffect(() => {
    const isDisable = !!(review.length > MAX_CHARACTER_COMMENT || review.length < MIN_CHARACTER_COMMENT || rating === 0);
    setSubmitDisabled(isDisable);
  }, [rating, review]);

  const onReviewChangeHandle = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(target.value);
  };

  const clearForm = () => {
    if (rating) {
      const ratingElement = document.getElementById(`${rating}-stars`);
      if (ratingElement) {
        (ratingElement as HTMLInputElement).checked = false;
      }
    }

    setRating(0);
    setReview('');
    setSubmitDisabled(false);
  };

  const ratingValues = Array.from({length: RATING_STARS_COUNT}, (_, index) => index + 1);

  return (
    <form className="reviews__form form" action="" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingValues.reverse().map((value: number) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={() => setRating(value)}
              disabled={isFormEnabled}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>)
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onReviewChangeHandle}
        value={review}
        disabled={isFormEnabled}
        maxLength={300}
      >
      </textarea>
      {review.length === MAX_CHARACTER_COMMENT && <div className='hint'>Maximum number of characters 300</div>}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_CHARACTER_COMMENT} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled || isFormEnabled}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
