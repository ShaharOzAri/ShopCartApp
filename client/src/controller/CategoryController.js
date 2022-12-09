import axios from "axios";
const url = process.env.REACT_APP_API_URL + "category/";

export const AddNewCategory = (category) => {
  return axios
    .post(url + "create/", {
      params: category,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(
      (response) => {},
      (error) => {}
    );
};

export const getAllCategories = async () => {
  const result = await axios.get(url + "getAll/", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return result;
};

export const getCategoryById = async (id) => {
  var res = await axios.post(url + "getCategoryById/", {
    params: id,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const getCategoryByName = async (name) => {
  var res = await axios.get(url + "getCategoryByName/", {
    params: name,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const updateCategory = async (category) => {
  var res = await axios.post(url + "update/", {
    params: category,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const deleteCategory = async (id) => {
  var res = await axios.post(url + "delete/", {
    params: id,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
