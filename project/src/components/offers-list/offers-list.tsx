import {Offers} from '../../types/offers';
import Card from '../card/card';

type OffersListType = {
  offers: Offers;
}
export default function OffersList({offers}:OffersListType) {
  return (
    <>
      {offers.map((offer) => {
        const keyValue = `${offer.id}`;
        return (<Card offer={offer} key={keyValue}/>);}
      )}
    </>
  );
}
