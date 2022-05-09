import * as React from 'react';
import {useState, useMemo} from 'react';
import {render} from 'react-dom';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';

import './App.css';

import ControlPanel from './control-panel';

import GazePin from './GazePin';
import SecurityPin from './SecurityPin';
import PolicePin from './PolicePin';

import GUARDIAN from './.data/guardian_gaze.json';
import SECURITY from './.data/security_lens.json';
import POLICE from './.data/police_surveillance.json';

//const TOKEN = ''; // Set your mapbox token here
const TOKEN = 'pk.eyJ1IjoiZGVrb2c2NjYiLCJhIjoiY2wyb3dtOWJlMDByNTNpbzAzMWpxdmlhdiJ9.xaH0xW0K5LqxNimFtTz4Pw'; // Set your mapbox token here


function App() {
  const [popupInfo, setPopupInfo] = useState(null);

  const pins = useMemo(
    () =>
    GUARDIAN.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <GazePin />
        </Marker>
      )),
    []
  );

  const pins0 = useMemo(
    () =>

      SECURITY.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <SecurityPin />
        </Marker>
      )),
    []
  );

  const pins1 = useMemo(
    () =>
      POLICE.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <PolicePin />
        </Marker>
      )),
    []
  );

  return (
    <>
      <Map 
        initialViewState={{
          longitude: -73.99060736894333,
        latitude: 40.73452333371205,
          zoom: 12,
          bearing: 0,
          pitch: 0
        }}
        style={{width: "100vw", height: "100vh"}}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={TOKEN}
      >
        {/* <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl /> */}

        {pins}
        {pins0}
        {pins1}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              <h1>{popupInfo.type}</h1>
              {/* {popupInfo.city}, {popupInfo.state} |{' '} */}
              {popupInfo.city}, {popupInfo.neigborhood}
            </div>
            <img width="100%" src={popupInfo.image} />
            <p>
            {popupInfo.desc}
            </p>
          </Popup>
        )}
      </Map>

      <ControlPanel />
    </>
  );
}

export default App;
