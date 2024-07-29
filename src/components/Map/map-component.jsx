import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { HiMiniMapPin } from "react-icons/hi2";

const containerStyle = {
    width: '100%',
    height: '400px'
};

const position = { lat: -16.742402269114272, lng: -49.27695113361739 }

export default function MapComponent() {

    const { isLoaded } = useJsApiLoader({
        id: process.env.REACT_APP_GOOGLE_MAPS_ID,
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })

    return isLoaded ? (
        <div className="w-full h-full flex flex-col justify-center items-center text-center py-12 font-montserrat text-[#606060]">
            <h1 className="text-3xl md:text-5xl pb-3 flex items-center font-normal">
                <HiMiniMapPin className="inline text-[#FF9467] text-4xl" />
                Onde nos encontrar
            </h1>
            <p className="text-lg md:text-xl text-balance px-1">
                Av. Rio Verde - Vila Sao Tomaz, Aparecida de Goiânia - GO, 74915-515.
                <br />
                No prédio comercial E-Business Rio Verde.
            </p>
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
    ) : <></>

}