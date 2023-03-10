export type Offer = {
  id: string;
  mark?: string;
  image: string;
  price: number;
  rating: string;
  title: string;
  type: string;
  roomConfiguration?: RoomConfiguration;
}

export type RoomConfiguration = {
  bedrooms: number;
  maxAdults: number;
  roomFilling: string[];
  ratingValue: number;
  reviews: Reviews;
}

export type Reviews = {
  avatar: string;
  userName: string;
  text: string;
  time: string;
}

{/*export type FullOrder = Offer & RoomConfiguration;

export type FullOrders = FullOrder[];*/}

export type Offers = Offer[];
