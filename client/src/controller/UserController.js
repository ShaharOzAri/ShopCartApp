import axios from "axios";
const url = process.env.REACT_APP_API_URL + "user/";

export const AddNewUser = async (user) => {
  user.chat = false;
  try {
    var res = await axios.post(url + "signup/", {
      params: user,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const checkUserPassword = async (user) => {
  try {
    var res = await axios.post(url + "signin/", {
      params: user,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getAllUsers = async () => {
  var res = await axios.get(url + "getAll/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const getUserById = async (userId) => {
  try {
    var res = await axios.get(url + "getUserById/", {
      params: {
        id: userId,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const updateUser = async (user) => {
  try {
    var res = await axios.post(url + "update/", {
      params: user,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const deleteuser = async (id) => {
  var res = await axios.post(url + "delete/", {
    params: id,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
