import {Link} from 'react-router-dom';
import cn from 'classnames';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {changeCity} from '../../store/action';

type CityItemProps = {
  city: string;
}

function CityItem({city}: CityItemProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item">
      <Link className={cn('locations__item-link', 'tabs__item', {'tabs__item--active' : currentCity === city })}
        to={'/'}
        onClick={() => dispatch(changeCity(city))}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CityItem;
