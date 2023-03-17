import {useState} from 'react';
import {Offers} from '../../types/offers';
import Card from '../card/card';

type OffersListType = {
  offers: Offers;
  onListItemHover: (listItemName: number) => void;
}
export default function OffersList({offers,onListItemHover}:OffersListType) {
  const [activeCard, setActiveCard] = useState(0);
  // eslint-disable-next-line no-console
  onListItemHover(activeCard);
  return (
    <div className="cities__places-list places__list tabs__content" id={activeCard.toString()}>
      {/* eslint-disable-next-line no-unused-expressions */}
      {offers.map((offer,index) => <Card offer={offer} key={offer.id} onMouseOverHandler={()=>{setActiveCard(offer.id);}} activeCard={activeCard}/>
      )}
    </div>
  );
}
