import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import {Marker, Icon, LayerGroup} from 'leaflet';
import useMap from '../../hooks/useMap';
import {UrlMapMarker, MapMarker, MapMarkerAnchor} from '../const';
import {Offer} from '../../types/offer';
import {getSelectedOffer} from '../../store/data-process/selectors';
import {useAppSelector} from '../../hooks/useAppSelector';

type MapProps = {
  offers: Offer[];
  city: string;
  className: string;
  //selectedOffer: Offer | undefined;
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

function Map({className, offers, city}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const selectedOffer = useAppSelector(getSelectedOffer);

  useEffect(() => {
    const newLayer: LayerGroup = new LayerGroup();

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
          .addTo(newLayer);
      });
      newLayer.addTo(map);
    }

    return () => {
      map?.removeLayer(newLayer);
    };
  }, [map, offers, selectedOffer]);

  return <section className={`${className} map`} ref={mapRef}></section>;
}

export default Map;
