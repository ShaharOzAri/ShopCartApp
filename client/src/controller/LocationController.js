import axios from "axios";

export const AddNewLocation = async (location) => {
  var res = await axios.post(
    process.env.REACT_APP_API_URL + "location/createlocation/",
    {
      params: location,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};

export const getLocations = async () => {
  const result = await axios.get(
    process.env.REACT_APP_API_URL + "location/getLocations/",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return result;
};
