import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
//import {City} from '../../types/city';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';
import {useAppSelector} from '../../hooks/index';


type MapProps = {
  selectedPoint: number | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const city = useAppSelector((state) => state.cityTest);
  const currentOffersReducer = useAppSelector((state) => state.currentOffers);
  const {selectedPoint} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const currentCityReducer = useAppSelector((state) => state.cityTest);
  useEffect(() => {
    map?.flyTo([currentCityReducer.lat,currentCityReducer.lng]);
    if (map) {
      currentOffersReducer.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(selectedPoint !== null && point.id === selectedPoint
            ? currentCustomIcon
            : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, selectedPoint, city]);

  return <div style={{height: '500px', width: '100%'}} ref={mapRef}></div>;
}

export default Map;
