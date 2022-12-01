import {Link} from 'react-router-dom';
import cn from 'classnames';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {getCity} from '../../store/action-process/selectors';
import {changeCity} from '../../store/action-process/action-process';

type CityItemProps = {
  city: string;
}

function CityItem({city}: CityItemProps): JSX.Element {
  const currentCity = useAppSelector(getCity);
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item">
      <Link className={cn('locations__item-link', 'tabs__item', {'tabs__item--active' : currentCity === city})}
        to={'/'}
        onClick={() => dispatch(changeCity(city))}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CityItem;
