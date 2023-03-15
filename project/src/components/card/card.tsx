import {Offer} from '../../types/offers';
import {Link} from 'react-router-dom';
type CardProps = {
  offer: Offer;
  onMouseOverHandler:() => void;
  activeCard: number;
}

export default function Card({offer,onMouseOverHandler, activeCard}: CardProps) {
  return (
    <article id={offer.id.toString()} className="cities__card place-card" onMouseOver={onMouseOverHandler}>
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${activeCard === offer.id ? 'active' : 'disactive'}`}></div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width:'80%'}}/>
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
