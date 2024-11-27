import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { HiMiniMapPin } from "react-icons/hi2";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const position = { lat: -16.742402269114272, lng: -49.27695113361739 };

export default function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: process.env.REACT_APP_GOOGLE_MAPS_ID,
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  return isLoaded ? (
    <div className="w-full flex flex-col justify-center items-center text-center pt-8 font-montserrat text-[#303030]">
      <div className=" w-fit flex flex-col items-center pb-4">
        <h3 className="tracking-wide text-3xl md:text-4xl font-semibold">
          Onde nos encontrar
        </h3>
        {/* <div className="w-[80%] border-b-2 border-[#A20003]" /> */}
      </div>
      <p className="text-lg md:text-xl text-balance px-1">
        Av. Rio Verde - Vila Sao Tomaz, Aparecida de Goiânia - GO, 74915-515.
        <br />
        No ponto comercial E-Business Rio Verde.
      </p>
      <div className="w-full py-4">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={position}
          defaultCenter={position}
          zoom={17}
          // onLoad={onLoad}
          // onUnmount={onUnmount}
        >
          <>
            <Marker position={position} />
          </>
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
}
