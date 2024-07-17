import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { IoHome } from "react-icons/io5";
import { IoIosPeople, IoMdPin } from "react-icons/io";

const containerStyle = {
    width: '100%',
    height: '400px'
};

const position = { lat: -16.679974, lng: -49.256513 }

export default function MapComponent() {

    const { isLoaded } = useJsApiLoader({
        id: process.env.REACT_APP_GOOGLE_MAPS_ID,
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })

    return isLoaded ? (
        <div className="w-full flex flex-col justify-center items-center py-12 font-montserrat text-[#606060]">

            <h1 className="text-4xl flex items-center gap-2">
                <IoMdPin className="inline text-[#FF9467] text-4xl" />
                Onde nos encontrar
            </h1>
            <p className="text-xl text-balance">
                Rua 1043, 100 - St. Pedro Ludovico, Goiânia - GO, 74823-350
            </p>

            <GoogleMap
                mapContainerStyle={containerStyle}
                center={position}
                zoom={16}
            // onLoad={onLoad}
            // onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <>
                    <Marker position={position} />
                </>
            </GoogleMap>
        </div>
    ) : <></>

}