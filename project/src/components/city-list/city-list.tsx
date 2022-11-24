import CityItem from '../../components/city-item/city-item';
import {CITIES} from '../const';

function CityList() {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => <CityItem city={city.name} key={city.name}/>)}
    </ul>
  );
}

export default CityList;
