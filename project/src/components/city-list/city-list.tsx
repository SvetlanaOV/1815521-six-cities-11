import CityItem from '../../components/city-item/city-item';

type CityListProps = {
  cities: string[];
}

function CityList({cities}: CityListProps) {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => <CityItem city={city} key={city}/>)}
    </ul>
  );
}

export default CityList;
