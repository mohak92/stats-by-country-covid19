import React from "react";
import GoogleMapReact from "google-map-react";
import { Avatar, Chip } from "@material-ui/core";

export default function InffectedCountryMap() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={1}
      ></GoogleMapReact>
    </div>
  );
}
