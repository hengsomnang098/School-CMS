import dayjs from "dayjs";

export const Config = {
  base_url: "http://localhost:8080/api/",
  // base_url: "http://194.233.87.193:8080/api/",
  // base_url: import.meta.env.BACK_END_API_URL,
  image_path: "http://localhost:8080/api/medias/photo/",
  version: "",
  token: "",
};

export const isEmptyOrNull = (value) => {
  if (
    value === "" ||
    value === null ||
    value === undefined ||
    value === "null" ||
    value === "undefined"
  ) {
    return true;
  }
  return false;
};

export const getUser = () => {
  var user = localStorage.getItem("profile");
  if (user != null && user != "") {
    user = JSON.parse(user);
    return user;
  }
  return null;
};

export const setUser = (user = {}) => {
  localStorage.setItem("profile", JSON.stringify(user));
  localStorage.setItem("isLogin", "1");
};

export const setAccessToken = (token) => {
  localStorage.setItem("token", token);
};

export const setRoles = (roles) => {
  localStorage.setItem("roles", JSON.stringify(roles));
};

export const getRoles = () => {
  var roles = localStorage.getItem("roles");
  if (roles != null && roles != "") {
    roles = JSON.parse(roles);
    return roles;
  }
  return "";
};

export const getAccessToken = (token) => {
  return localStorage.getItem("token", token);
};

export const setRefreshToken = (refresh_token) => {
  localStorage.setItem("refresh_token", refresh_token);
};

export const getRefreshToken = (refresh_token) => {
  return localStorage.getItem("refresh_token", refresh_token);
};

export const logout = () => {
  localStorage.setItem("profile", "");
  localStorage.setItem("isLogin", "0");
  localStorage.setItem("token", "");
  // localStorage.setItem("refresh_token", "");
  localStorage.setItem("roles", "");
  window.location.href = "login";
};

export const isLogin = () => {
  // if (localStorage.getItem("isLogin") == "1") {
  //   return true;
  // } else {
  //   return false;
  // }
  if (
    localStorage.getItem("token") != undefined &&
    localStorage.getItem("isLogin") == "1"
  ) {
    return true;
  } else {
    return false;
  }
};

export const formartDateClient = (date) => {
  if (date !== null && date !== "") {
    return dayjs(date).format("YYYY-MM-DD");
  }
  return null;
};

export const formartDateServer = (date) => {
  if (date !== null && date !== "") {
    return dayjs(date).format("YYYY-MM-DD");
  }
  return null;
};
