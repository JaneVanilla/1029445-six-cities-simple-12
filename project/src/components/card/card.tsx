import {Offer} from '../../types/offers';
import {Link} from 'react-router-dom';

type CardProps = {
  offer: Offer;
  onMouseOverHandler:() => void;
  classesName: {
    item: string;
    image: string;
  };
}

export default function Card({offer,onMouseOverHandler, classesName}: CardProps) {
  // eslint-disable-next-line no-console
  console.log(offer.rating);
  return (
    <article id={offer.id.toString()} className={`place-card ${classesName.item}`} onMouseOver={onMouseOverHandler}>
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`place-card__image-wrapper ${classesName.image}`}>
        <Link to={`offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${`${Math.round(offer.rating ) * 20}%`}`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
