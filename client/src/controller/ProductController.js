import axios from "axios";
const url = process.env.REACT_APP_API_URL + "product/";

export const getAllProducts = async () => {
  var res = await axios.get(url + "getAll/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
