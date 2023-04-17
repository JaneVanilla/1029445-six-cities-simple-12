import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
export default function Navigation() {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const emailName = useAppSelector((state) => state.userData?.email);
  const dispatch = useAppDispatch();
  if(authStatus === 'NO_AUTH') {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link" to="/Login">
              <span className="header__signout">Login</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">{emailName}</span>
          </div>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" to='/login' onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          >
            <span className="header__signout">Log Out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
