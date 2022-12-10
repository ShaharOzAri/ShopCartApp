import axios from "axios";
const url = process.env.REACT_APP_API_URL + "order/";

export const AddNewOrder = async (order) => {
  var res = await axios.post(url + "create/", {
    params: order,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
