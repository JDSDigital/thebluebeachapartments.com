import React from "react";
import LocationPin from "./LocationPin";
import GoogleMapReact from "google-map-react";
import "./map.scss";

type Props = {
  lat?: number;
  lng?: number;
  zoom?: number;
  language?: string;
};

const MapView = ({
  lat = 28.029797,
  lng = -16.59129,
  zoom = 18,
  language = "es",
}: Props) => (
  <section className="map-container">
    <GoogleMapReact
      bootstrapURLKeys={{
        key: `${process.env.GOOGLE_MAPS_API_KEY}`,
        language,
      }}
      defaultCenter={{ lat, lng }}
      defaultZoom={zoom}
    >
      <LocationPin lat={lat} lng={lng} />
    </GoogleMapReact>
  </section>
);

export default MapView;