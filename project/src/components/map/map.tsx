import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import {Marker, Icon} from 'leaflet';
import useMap from '../../hooks/useMap';
import {UrlMapMarker, MapMarker, MapMarkerAnchor} from '../const';
import {Offer} from '../../types/offer';

type MapProps = {
  offers: Offer[];
  city: string;
  className: string;
  selectedOffer: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: UrlMapMarker.Default,
  iconSize: [MapMarker.Height, MapMarker.Width],
  iconAnchor: [MapMarkerAnchor.Height, MapMarkerAnchor.Width],
});

const currentCustomIcon = new Icon({
  iconUrl: UrlMapMarker.Active,
  iconSize: [MapMarker.Height, MapMarker.Width],
  iconAnchor: [MapMarkerAnchor.Height, MapMarkerAnchor.Width],
});

function Map({className, offers, city, selectedOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return <section className={`${className} map`} ref={mapRef}></section>;
}

export default Map;
