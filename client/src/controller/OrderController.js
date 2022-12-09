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

export const getOrdersNameGroupBy = async () => {
  var res = await axios.get(url + "getOrdersGroupBy/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const getOrdersByDate = async (date) => {
  var res = await axios.get(url + "getOrdersByDate/", {
    params: date,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const getOrdersByUser = async (user) => {
  var res = await axios.get(url + "getOrdersByUser/", {
    params: user,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const getOrderById = async (id) => {
  var res = await axios.get(url + "getOrderById/", {
    params: id,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const updateOrder = async (order) => {
  var res = axios.post(url + "update/", {
    params: order,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const deleteOrder = async (id) => {
  var res = await axios.post(url + "delete/", {
    params: id,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
