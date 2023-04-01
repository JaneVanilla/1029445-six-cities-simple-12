import {BrowserRouter, Route, Routes} from'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../../components/private-route/private-route';
import {HelmetProvider} from 'react-helmet-async';
import Main from'../../pages/main/main';
import NotFoundScreen from'../../pages/not-found-screen/not-found-screen';
import Login from'../../pages/login/login';
import Room from'../../pages/room/room';
import {Offers} from '../../types/offers';
import {Reviews} from '../../types/reviews';
import {City} from '../../types/city';
import {OffersNearby} from '../../types/offersNearby';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {useAppSelector} from '../../hooks';

type AppProps = {
  offers: Offers;
  reviews: Reviews;
  placesCount: number;
  city: City;
  offersOpcion: OffersNearby;
  arrayOfCities: string[];
}

function App({offers,reviews, placesCount,city, offersOpcion, arrayOfCities}: AppProps): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.isQuestionsDataLoading);
  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Main arrayOfCities={arrayOfCities} city={city} offers={offers} placesCount={placesCount}/>}/>
            <Route path={AppRoute.Login}
              element={
                <PrivateRoute
                  authorizationStatus={AuthorizationStatus.NoAuth}
                >
                  <Login/>
                </PrivateRoute>
              }
            >
            </Route>
            <Route path={AppRoute.Room} element={<Room offers={offers} offersOpcion={offersOpcion} reviews={reviews} city={city}/>}></Route>
            <Route path='*' element={<NotFoundScreen/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
export default App;
