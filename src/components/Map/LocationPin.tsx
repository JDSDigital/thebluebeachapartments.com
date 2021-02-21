import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import "./map.scss";

type Props = {
  lat: number;
  lng: number;
};

const LocationPin = ({ lat, lng }: Props) => (
  <RoomIcon fontSize="large" color="primary" className="location-icon" />
);

export default LocationPin;
