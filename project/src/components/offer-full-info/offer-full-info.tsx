import {Offers} from '../../types/offers';
import ReviewsForm from '../reviews-form/reviews-form';
import {useParams} from 'react-router-dom';
import ReviewsList from '../reviews-list/reviews-list';
//import {Review} from '../../types/review';
import Map from '../../components/map/map';
//import {OffersNearby} from '../../types/offersNearby';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { useEffect, useState } from 'react';
//import {Offer} from '../../types/offers';
import {getValueByKey} from '../../common';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import {PlaceTypes} from '../../const';
import {AuthorizationStatus} from '../../const';

import { fetchNearOffersAction, fetchOfferByIdAction, fetchReviewsAction } from '../../store/api-actions';
import OffersList from '../offers-list/offers-list';
//import LoadingScreen from '../../pages/loading-screen/loading-screen';
//import Review from "../../types/review";
//import LoadingScreen from '../../pages/loading-screen/loading-screen';

type OfferItemParams = {
  id: string;
}
export default function OfferFullInfo() {
  const params = useParams<keyof OfferItemParams>() as OfferItemParams;
  const dispatch = useAppDispatch();
  const {id} = params;
  const hotelId = parseInt(id, 10);
  const currentOffer = useAppSelector((state) => state.offer);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  //const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  //const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  useEffect(() => {
    dispatch(fetchOfferByIdAction({ id : hotelId }));
    dispatch(fetchNearOffersAction({ id : hotelId }));
    dispatch(fetchReviewsAction({ id : hotelId }));
  }, [id]);


  const cardType = currentOffer ? getValueByKey<PlaceTypes>(currentOffer.type, PlaceTypes) : '';
  const neighbours = useAppSelector((state) => state.neighbours);
  const [neighboringOffers, setNeighboringOffers] = useState<Offers>([]);
  useEffect(() => {
    setNeighboringOffers(neighbours);
  }, [neighbours, dispatch]);
  const galleryItems = currentOffer?.images.slice(0,6).map((img) => (
    <div key={`${currentOffer.id}-${img}`} className='property__image-wrapper'><img className='property__image' src={img} alt='Photo studio'/></div>)
  );

  let ratingMathRound = 0;
  let result = 0;
  let imgSrc = '';
  if(currentOffer) {
    ratingMathRound = Math.round(currentOffer.rating);
    result = ratingMathRound * 20;
    imgSrc = currentOffer.host.avatarUrl;
  }
  if (currentOffer?.id === undefined) {
    return (
      <NotFoundScreen/>
    );
  }

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
              <span style={{width: `${result}%`}}/>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{ratingMathRound}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {cardType}
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
              {currentOffer?.goods}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img className="property__avatar user__avatar" src={imgSrc} width="74" height="74"
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
            <ReviewsList/>
            { authStatus === AuthorizationStatus.Auth && <ReviewsForm />}
          </section>
        </div>
      </div>
      <section className="property__map map" style={{backgroundImage:'none', height:'auto'}}>
        <Map city={currentOffer.city} offers={neighbours} currentOffer={currentOffer} activeCardId={ null } classNameMap='property__map map'/>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OffersList offersOpcion={neighboringOffers} onListItemHover={(e) => {setActiveCard(e); }} selectedPoint={activeCard} classesName={{list:'near-places__list',item:'near-places__card',image:'near-places__image-wrapper'}}></OffersList>
        </section>
      </div>
    </section>
  );
}
