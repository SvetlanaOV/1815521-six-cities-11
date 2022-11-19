import CityItem from '../../components/city-item/city-item';
import {City} from '../../types/city';

type CityListProps = {
  cities: City[];
}

function CityList({cities}: CityListProps) {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => <CityItem city={city.name} key={city.name}/>)}
    </ul>
  );
}

export default CityList;
