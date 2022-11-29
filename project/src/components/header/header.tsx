import {AuthorizationStatus} from '../../components/const';
import Logo from '../logo/logo';
import HeaderSingIn from '../header-sing-in/header-sing-in';
import HeaderSingOut from '../header-sing-out/header-sing-out';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            {authorizationStatus === AuthorizationStatus.Auth ? <HeaderSingOut/> : <HeaderSingIn/>}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
