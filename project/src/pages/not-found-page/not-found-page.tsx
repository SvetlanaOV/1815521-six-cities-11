import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {AppRoute} from '../../components/const';
import Logo from '../../components/logo/logo';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 Cities. Страница не найдена</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">404. Page not found</h1>
            <Link to={AppRoute.Root}>Вернуться на главную</Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
