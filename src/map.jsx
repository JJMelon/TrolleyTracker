// Alby Penney - 2022
// React Mapbox Framework credit to Sunny Ng https://github.com/blahblahblah-/theweekendest

import React from 'react';
import ReactDOM from 'react-dom/client';
import mapboxgl from 'mapbox-gl';

//Import Data about Trains/Stops


// Constants
mapboxgl.accessToken = "pk.eyJ1IjoiamptZWxvbnMiLCJhIjoiY2w2cGRuOTN1MDJ6NTNjanZib2tlcGtpYyJ9.FfmnDYcir75Ttra7-4APcQ"
const mapboxStyle = "mapbox://styles/jjmelons/cl6pk0ila006k15pc5pzb14j2"
const api = "http(s)://realtime.sdmts.com/api/api/gtfs_realtime/vehicle-positions-for-agency/MTS.pb?key=f4413482-ea68-417c-8b11-67ebfd43ce90"

const trainIds = [
  'O', 'B', 'R', 'S'
];


class Map extends React.Component {
  // Setup Map State Model
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      trainPositions: {},
    }
    this.showAll = true;
    this.mapLoaded = false;
  }

  // Map Initialization
  componentDidMount() {
    this.fetchData(); // Get initial data

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: mapboxStyle,
      center: center,
      minZoom: 9,
      zoom: 14,
      maxPitch: 0,
    });

    // Navigation Control Widget
    this.map.addControl(new mapboxgl.NavigationControl({ showCompass: true }), "bottom-right");

    this.map.on('load', () => {
      this.mapLoaded = true;
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
  };

  // Get train positions from MTS API backend
  fetchData() {
    this.setState({loading: true}, () => {

    }
  };

    return <div style={style} ref={el => this.mapContainer = el} />;
  }
}

export default Map;
