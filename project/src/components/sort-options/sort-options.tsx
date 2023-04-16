//import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {
  setcurrentOffersDefault,
  sortHide,
  sortPriceFilter,
  sortPriceFilterName,
  sortShowOrHide
} from '../../store/action';
import {SortTypes} from '../../const';
export default function SortOptions() {
  //const [isActive, setIsActive] = useState(false);
  //function onListHAndler() {
  //  setIsActive((current) => !current);
  //}
  const dispatch = useAppDispatch();
  const isActiveReducer = useAppSelector((state) => state.isActive);
  const filterNameReducer = useAppSelector((state) => state.filterName);
  // eslint-disable-next-line no-console
  //console.log(currentOffers);
  dispatch(dispatch(setcurrentOffersDefault()));
  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption" onClick={() => dispatch(sortShowOrHide())}>Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => dispatch(sortShowOrHide())}>
        {filterNameReducer}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref={'#icon-arrow-select'}></use>
        </svg>
      </span>
      <ul className={isActiveReducer ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}>
        <li className="places__option places__option--active" tabIndex={0} onClick={() => {dispatch(sortPriceFilter('popular'));dispatch(sortHide());dispatch(sortPriceFilterName(SortTypes.DEFAULT));}}>{SortTypes.DEFAULT}</li>
        <li className="places__option" tabIndex={0} onClick={() => {dispatch(sortPriceFilter('lowToHight'));dispatch(sortHide());dispatch(sortPriceFilterName(SortTypes.PRICE_DOWN));}}>{SortTypes.PRICE_DOWN}</li>
        <li className="places__option" tabIndex={0} onClick={() => {dispatch(sortPriceFilter('hightToLow'));dispatch(sortHide());dispatch(sortPriceFilterName(SortTypes.PRICE_UP));}}>{SortTypes.PRICE_UP}</li>
        <li className="places__option" tabIndex={0} onClick={() => {dispatch(sortPriceFilter('topRating'));dispatch(sortHide());dispatch(sortPriceFilterName(SortTypes.RATING));}}>{SortTypes.RATING}</li>
      </ul>
    </form>
  );
}
