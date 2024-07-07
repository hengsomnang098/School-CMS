import dayjs from "dayjs";

export const Config = {
  // base_url: "http://localhost:8080/api/",
  base_url: "https://api.southwest-internationalschool.site/api/",
  // base_url: import.meta.env.VITE_API_URL,
  // image_path: "http://localhost:8080/api/medias/photo/",
  version: "",
  token: "",
};
export function truncate(str) {
  if (str) {
    return str.length > 40 ? str.substring(0, 37) + "..." : str;
  }
}

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
export const initializeLocalStorage = () => {
  if (localStorage.getItem("email") === null) {
    localStorage.setItem("email", ""); // Assuming default profile is an empty object
  }
  if (localStorage.getItem("isLogin") === null) {
    localStorage.setItem("isLogin", "0"); // Assuming default is not logged in
  }
  if (localStorage.getItem("token") === null) {
    localStorage.setItem("token", ""); // Assuming default token is an empty string
  }

  if (localStorage.getItem("roles") === null) {
    localStorage.setItem("roles", ""); // Assuming default roles is an empty array
  }
  if (localStorage.getItem("profile") === null) {
    localStorage.setItem("profile", ""); // Assuming default profile is an empty object
  }
  if (localStorage.getItem("refresh_token") === null) {
    localStorage.setItem("refresh_token", ""); // Assuming default token is an empty string
  }
};

export const setProfile = (profile = {}) => {
  localStorage.setItem("profile", JSON.stringify(profile)); // Assuming default profile is an empty object
};

export const getProfile = () => {
  var profile = localStorage.getItem("profile");
  if (profile != null && profile != "") {
    profile = JSON.parse(profile);
    return profile;
  }
  return null;
};

export const getUser = () => {
  var user = localStorage.getItem("email");
  if (user != null && user != "") {
    user = JSON.parse(user);
    return user;
  }
  return null;
};

export const setUser = (user = {}) => {
  localStorage.setItem("email", JSON.stringify(user));
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

export const setLanguage = (lang) => {
  localStorage.setItem("lang", lang);
};
export const getLanguage = () => {
  return localStorage.getItem("lang");
};

export const logout = () => {
  localStorage.setItem("email", "");
  localStorage.setItem("profile", "");
  localStorage.setItem("isLogin", "0");
  localStorage.setItem("token", "");
  localStorage.setItem("refresh_token", "");
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
    localStorage.getItem("isLogin") == "1" &&
    localStorage.getItem("refresh_token") != undefined
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
