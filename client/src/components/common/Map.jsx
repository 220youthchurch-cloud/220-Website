import React from 'react'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet'

const mapIcon = new Icon({
 iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
 iconSize: [25,41]
})

const Map = () => {
  const position = [32.8465488, -96.6850057];

  return (
    <section>
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className="h-96 w-full rounded-t-xl"
        style={{ zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={mapIcon}>
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold text-[#2c6598] mb-1">
                Gospel Light Eritrean Baptist Church
              </h3>
              <p className="text-sm text-[#2c6598] mb-2">
                11110 Garland Rd<br />
                Dallas, TX 75218
              </p>
              <a
                href="https://maps.app.goo.gl/17oLXgmbpW4BTJgB9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                Get Directions →
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>    
    </section>
  )
}

export default Map