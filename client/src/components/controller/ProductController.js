import axios from "axios";
const url = process.env.REACT_APP_API_URL + "product/";

export const AddNewProduct = async (product) => {
  var res = await axios.post(url + "create/", {
    params: product,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const getProductsNameGroupBy = async () => {
  var res = await axios.get(url + "getProductsNameGroupBy/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const getProductsMaterialGroupBy = async () => {
  var res = await axios.get(url + "getProductsMaterialGroupBy/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const getAllProducts = async () => {
  var res = await axios.get(url + "getAll/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const getProductById = async (id) => {
  var res = await axios.get(url + "getProductById/", {
    params: {
      id: id,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const getProductByName = async (name) => {
  var res = await axios.get(url + "getProductByName/", {
    params: name,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const getProductsByCategory = async (category) => {
  var res = await axios.get(url + "getProductsByCategory/", {
    params: {
      category: category,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const updateProduct = async (product) => {
  var res = await axios.post(url + "update/", {
    params: product,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const deleteProduct = async (id) => {
  var res = await axios.post(url + "delete/", {
    params: id,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
