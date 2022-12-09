import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Box, Flex } from "@chakra-ui/react";
import { getLocations } from "../../controller/LocationController";
import { useState, useEffect } from "react";
import React from "react";

export default function Map() {
  const [locations, setLocations] = useState(null);

  const getAllLocations = async () => {
    const recivedLocatios = await getLocations();
    if (recivedLocatios.status == 200) {
      setLocations(recivedLocatios.data.msg);
    }
  };

  useEffect(() => {
    getAllLocations();
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAirgb_ESgT3BISdOZL8D-_189_aEL0R7g",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      h="100vh"
    >
      <Box position="absolute" bottom={0} h="85%" w="80%">
        <GoogleMap
          zoom={10}
          center={{ lat: 32.03514, lng: 34.876912 }}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          {locations != null
            ? locations.map((marker, index) => (
                <Marker
                  position={{ lat: marker.latitude, lng: marker.longtitude }}
                  key={index}
                />
              ))
            : ""}
        </GoogleMap>
      </Box>
    </Flex>
  );
}
