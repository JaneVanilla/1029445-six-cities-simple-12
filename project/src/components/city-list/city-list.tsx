import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {changeCity, completeOffers, changeCityTest, sortHide} from '../../store/action';

export default function CityList() {
  const dispatch = useAppDispatch();
  const cityFromReducer = useAppSelector((state) => state.cityTest.title);
  const cityList = useAppSelector((state) => state.citiesList);
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityList.map((city,index) => (
            <li key={city} className='locations__item'>
              <Link className={cityFromReducer === city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link'} to="/" onClick={() => {dispatch(changeCity(`${city}`)); dispatch(changeCityTest(`${city}`)); dispatch(completeOffers());dispatch(sortHide());}}>
                <span>{city}</span>
              </Link>
            </li>))}
        </ul>
      </section>
    </div>);
}
