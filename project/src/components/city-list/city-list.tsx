import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {changeCity, completeOffers, changeCityTest} from '../../store/action';


type CityListType = {
  arrayOfCities: string[];
}

export default function CityList({arrayOfCities}: CityListType) {
  const dispatch = useAppDispatch();
  const cityFromReducer = useAppSelector((state) => state.city);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {arrayOfCities.map((city,index) => (
            <li key={city} className='locations__item'>
              <Link className={cityFromReducer === city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link'} to="/" onClick={() => {dispatch(changeCity(`${city}`)); dispatch(changeCityTest(`${city}`)); dispatch(completeOffers());}}>
                <span>{city}</span>
              </Link>
            </li>))}
        </ul>
      </section>
    </div>);
}
