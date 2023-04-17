//import {useState} from 'react';
import {Offers} from '../../types/offers';
//import {OffersNearby} from '../../types/offersNearby';
import Card from '../card/card';

type OffersListType = {
  offersOpcion: Offers;
  onListItemHover: (listItemName: number | null) => void;
  selectedPoint: number | null;
  classesName: {
    list: string;
    item: string;
    image: string;
  };
}
export default function OffersList({offersOpcion,onListItemHover,selectedPoint,classesName}:OffersListType) {
  return (
    <div className={`places__list ${classesName.list}`} id={selectedPoint?.toString()}>
      {/* eslint-disable-next-line no-unused-expressions */}
      {offersOpcion.map((offer,index) => <Card classesName={classesName} offer={offer} key={offer.id} onMouseOverHandler={()=>{onListItemHover(offer.id);}}/>
      )}
    </div>
  );
}
