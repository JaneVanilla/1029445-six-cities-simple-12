//import {useState} from 'react';
import {Offers} from '../../types/offers';
import Card from '../card/card';

type OffersListType = {
  offers: Offers;
  onListItemHover: (listItemName: number) => void;
  selectedPoint: number | null;
}
export default function OffersList({offers,onListItemHover,selectedPoint}:OffersListType) {
  return (
    <div className="cities__places-list places__list tabs__content" id={selectedPoint?.toString()}>
      {/* eslint-disable-next-line no-unused-expressions */}
      {offers.map((offer,index) => <Card offer={offer} key={offer.id} onMouseOverHandler={()=>{onListItemHover(offer.id);}}/>
      )}
    </div>
  );
}
