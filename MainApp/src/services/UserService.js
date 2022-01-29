import axios from "axios";

const USER_SERVICE = "http://localhost:9087/";

const signUp = async (userName, firstName, lastName, email, age, password) => {
  const response = await axios.post(USER_SERVICE + "registerUser", {
    userName,
    firstName,
    lastName,
    email,
    age,
    password,
  });
  return response;
};

const signIn = async (userName, password) => {
  const response = await axios.post(USER_SERVICE + "authenticate", {
    userName,
    password,
  });
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
export default { signUp, signIn, logout, getCurrentUser };
