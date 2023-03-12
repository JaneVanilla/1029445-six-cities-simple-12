import {useState} from 'react';
import {Offers} from '../../types/offers';
import Card from '../card/card';

type OffersListType = {
  offers: Offers;
}
export default function OffersList({offers}:OffersListType) {
  const [activeCard, setActiveCard] = useState('0');
  return (
    <div className="cities__places-list places__list tabs__content" id={activeCard}>
      {offers.map((offer,index) => (<Card offer={offer} key={index} onMouseOverHandler={()=>setActiveCard(offer.id.toString())} activeCard={activeCard}/>)
      )}
    </div>
  );
}
