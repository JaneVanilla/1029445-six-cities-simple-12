import {Helmet} from 'react-helmet-async';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import Navigation from '../../components/navigation/navigation';
import CityList from '../../components/city-list/city-list';
import {useState} from 'react';
import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks/index';
import 'leaflet/dist/leaflet.css';
import SortOptions from '../../components/sort-options/sort-options';
import MainEmpty from '../main-empty/main-empty';
import {Offer} from '../../types/offers';


export default function Main() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const allOffers = useAppSelector((state) => state.offers);
  const cityFromReducer = useAppSelector((state) => state.cityTest.title);
  const currentOffers = useAppSelector((state) => state.currentOffers);
  const getCityForMap = (offer: Offer) => offer.city;

  if(allOffers.length === 0) {
    return <MainEmpty/>;
  }
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six cities. Choose place to stay.</title>
      </Helmet>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
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
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {cityFromReducer}</b>
              <SortOptions/>
              <OffersList classesName={{list:'tabs__content cities__places-list',item:'cities__card',image:'cities__image-wrapper'}} offersOpcion={currentOffers} onListItemHover={(id) => setActiveCard(id)} selectedPoint={activeCard}/>
            </section>
            <div className="cities__right-section">
              <Map city={getCityForMap(currentOffers[0])} offers={currentOffers} activeCardId={activeCard} classNameMap={'cities__map map'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
