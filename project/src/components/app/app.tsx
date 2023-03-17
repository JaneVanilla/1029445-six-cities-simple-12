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

type AppProps = {
  offers: Offers;
  reviews: Reviews;
  placesCount: number;
  city: City;
}

function App({offers,reviews, placesCount,city}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Main city={city} offers={offers} placesCount={placesCount}/>}/>
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
            <Route path={AppRoute.Room} element={<Room offers={offers} reviews={reviews} />}></Route>
            <Route path='*' element={<NotFoundScreen/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
export default App;
