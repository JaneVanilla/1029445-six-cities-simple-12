import {Helmet} from 'react-helmet-async';
import {Offers} from '../../types/offers';
import {Reviews} from '../../types/reviews';
import OfferFullInfo from '../../components/offer-full-info/offer-full-info';
import Navigation from '../../components/navigation/navigation';
import {City} from '../../types/city';
import {useState} from 'react';
import OffersList from '../../components/offers-list/offers-list';
import {OffersNearby} from '../../types/offersNearby';
import Header from '../../components/header/header';

type RoomProps = {
  offers: Offers;
  reviews: Reviews;
  city: City;
  offersOpcion: OffersNearby;
}

export default function Room({offers, reviews, city, offersOpcion}: RoomProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="page">
      <Helmet>
        <title>Six cities. Nice option.</title>
      </Helmet>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path
              d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"
            >
            </path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            >
            </path>
          </symbol>
        </svg>
      </div>

      <Header navigation={<Navigation/>}/>

      <main className="page__main page__main--property">
        <OfferFullInfo offersOpcion={offersOpcion} offers={offers} reviews={reviews} city={city} activeCard={activeCard}/>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList offersOpcion={offersOpcion} onListItemHover={(id) => setActiveCard(id)} selectedPoint={activeCard} classesName={{list:'near-places__list',item:'near-places__card',image:'near-places__image-wrapper'}}></OffersList>
          </section>
        </div>
      </main>
    </div>
  );
}
