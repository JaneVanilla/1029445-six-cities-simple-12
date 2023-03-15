import {ChangeEvent} from 'react';

type ReviewInputProps = {
  func: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  title: string;
}

export default function ReviewInput({value,title,func}: ReviewInputProps) {
  return (
    <>
      <input onChange={func} className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio"/>
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
