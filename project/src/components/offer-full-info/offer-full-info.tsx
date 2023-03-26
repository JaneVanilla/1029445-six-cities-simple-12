import {Offers} from '../../types/offers';
import ReviewsForm from '../reviews-form/reviews-form';
import {useParams} from 'react-router-dom';
import ReviewsList from '../reviews-list/reviews-list';
import {Reviews} from '../../types/reviews';
import {City} from '../../types/city';
import Map from '../../components/map/map';
import {OffersNearby} from '../../types/offersNearby';

type OfferFullInfoProps = {
  offers: Offers;
  reviews: Reviews;
  city: City;
  activeCard: null | number;
  offersOpcion: OffersNearby;
}
type OfferItemParams = {
  id: string;
}
export default function OfferFullInfo({offers, reviews, city, activeCard, offersOpcion}: OfferFullInfoProps) {
  const params = useParams<keyof OfferItemParams>() as OfferItemParams;
  const {id} = params;

  const currentOffer = offers.find((offer) => offer.id === +id);
  const goodsList = currentOffer?.goods.map((good) => <li key={`${currentOffer.id}-${good}`} className='property__inside-item'>{good}</li>);
  const galleryItems = currentOffer?.images.map((img) => (
    <div key={`${currentOffer.id}-${img}`} className='property__image-wrapper'><img className='property__image' src={img} alt='Photo studio'/></div>)
  );
  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {galleryItems}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {currentOffer?.isPremium &&
          <div className="property__mark">
            <span>Premium</span>
          </div>}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {currentOffer?.title}
            </h1>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: '80%'}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{currentOffer?.rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {currentOffer?.type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {currentOffer?.bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {currentOffer?.maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{currentOffer?.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {goodsList}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img className="property__avatar user__avatar" src={currentOffer?.host.avatarUrl} width="74" height="74"
                  alt="Host avatar"
                />
              </div>
              <span className="property__user-name">
                {currentOffer?.host.name}
              </span>
              {currentOffer?.host.isPro &&
              <span className="property__user-status">
                    Pro
              </span>}
            </div>
            <div className="property__description">
              <p className="property__text">
                {currentOffer?.description}
              </p>
            </div>
          </div>

          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
            <ReviewsList reviews={reviews}/>
            <ReviewsForm reviews={reviews}/>
          </section>
        </div>
      </div>
      <section className="property__map map" style={{backgroundImage:'none', height:'auto'}}>
        <Map selectedPoint={activeCard}/>
      </section>
    </section>
  );
}
