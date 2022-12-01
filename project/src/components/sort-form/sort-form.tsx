import {useState} from 'react';
import cn from 'classnames';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {SortType} from '../const';
import {getSortType} from '../../store/action-process/selectors';
import {changeSortType} from '../../store/action-process/action-process';

function SortForm(): JSX.Element {
  const currentSortType = useAppSelector(getSortType);
  const dispatch = useAppDispatch();

  const [isOpened, setOpened] = useState<boolean>(false);

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpened(!isOpened)}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options', 'places__options--custom', {
        'places__options--opened': isOpened === true
      })}
      >
        {Object.values(SortType).map((type) => (
          <li key={`sort-${type}`}
            className={cn('places__option', {'places__option--active': currentSortType === type})}
            tabIndex={0}
            onClick={() => {
              dispatch(changeSortType(type));
              setOpened(!isOpened);
            }}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortForm;
