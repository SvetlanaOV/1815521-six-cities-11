import {Link} from 'react-router-dom';
import {AppRoute} from '../../components/const';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getUserData} from '../../store/user-process/selectors';
import {getFavoriteOffers} from '../../store/data-process/selectors';

function HeaderSingOut():JSX.Element {
  const dispatch = useAppDispatch();

  const userData = useAppSelector(getUserData);
  const favoritesOffers = useAppSelector(getFavoriteOffers);

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img src={userData?.avatarUrl} style={{'borderRadius': '100%'}} alt='User avatar' />
          </div>
          <span className="header__user-name user__name">{userData?.name}</span>
          <span className="header__favorite-count">{favoritesOffers?.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          to={AppRoute.Root}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

export default HeaderSingOut;
