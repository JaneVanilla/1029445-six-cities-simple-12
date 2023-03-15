import {Reviews} from '../../types/reviews';
import {ChangeEvent, FormEvent, useState} from 'react';
import ReviewInput from '../review-input/review-input';
type ReviewsFormProps = {
  reviews: Reviews;
}
export default function ReviewsForm({reviews}:ReviewsFormProps) {
  const [formData, setFormData] = useState({
    review: '',
    rating: '',
  });

  const fieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
    const {value, name} = evt.target;
    setFormData({...formData, [name]: value});
    // eslint-disable-next-line no-console
    //console.log('name',value);
  };
  function onSubmitHandler(evt: FormEvent) {
    evt.preventDefault();
  }

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmitHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <ReviewInput func={fieldChange} title="perfect" value="5" />
        <ReviewInput func={fieldChange} title="good" value="4" />
        <ReviewInput func={fieldChange} title="not bad" value="3" />
        <ReviewInput func={fieldChange} title="badly" value="2" />
        <ReviewInput func={fieldChange} title="terribly" value="1" />
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={fieldChange} value={formData.review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
