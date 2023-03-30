//import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {sortHide, sortPriceHighToLow, sortPriceLowToHigh, sortShowOrHide, sortTopRatingFirst} from '../../store/action';
export default function SortOptions() {
  //const [isActive, setIsActive] = useState(false);
  //function onListHAndler() {
  //  setIsActive((current) => !current);
  //}
  const dispatch = useAppDispatch();
  const isActiveReducer = useAppSelector((state) => state.isActive);
  // eslint-disable-next-line no-console
  //console.log(currentOffers);
  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption" onClick={() => dispatch(sortShowOrHide())}>Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => dispatch(sortShowOrHide())}>
        Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref={'#icon-arrow-select'}></use>
        </svg>
      </span>
      <ul className={isActiveReducer ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}>
        <li className="places__option places__option--active" tabIndex={0}>Popular</li>
        <li className="places__option" tabIndex={0} onClick={() => {dispatch(sortPriceLowToHigh());dispatch(sortHide());}}>Price: low to high</li>
        <li className="places__option" tabIndex={0} onClick={() => {dispatch(sortPriceHighToLow());dispatch(sortHide());}}>Price: high to low</li>
        <li className="places__option" tabIndex={0} onClick={() => {dispatch(sortTopRatingFirst());dispatch(sortHide());}}>Top rated first</li>
      </ul>
    </form>
  );
}
