import Review from './types/review';
import {Offer} from './types/offers';
export function getValueByKey<T>(offerType: string, enums: object): T{
  return Object.values(enums)[Object.keys(enums).indexOf(offerType)] as T;
}
export function sortCommentDateDown(reviews: Review[]) {
  const items = [...reviews];
  items.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  return items;
}

export function currentOfferHelper(currentOffer:Offer | undefined) {
  const ratingMathRound = 0;
  const result = 0;
  const imgSrc = '';
  const mass = {
    result,imgSrc,ratingMathRound
  };
  if(currentOffer) {
    mass.ratingMathRound = Math.round(currentOffer.rating);
    mass.result = ratingMathRound * 20;
    mass.imgSrc = currentOffer.host.avatarUrl;
  }

  return mass;
}

