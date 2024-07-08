import axios from "axios";
import { Config, logout, setAccessToken, setRefreshToken } from "./helper";
const BASE_URL = Config.base_url;
export const request = async (
  url = "",
  method = "get",
  data = {},
  new_token
  // timeoutDuration = 10000
) => {
  let param_get = "";
  if (method === "get" && Object.keys(data).length > 0) {
    // Convert object to URL query parameters
    param_get = "?" + new URLSearchParams(data).toString();
  }

  let headers = { "Content-Type": "application/json" };
  if (data instanceof FormData) {
    headers = { "Content-Type": "multipart/form-data" };
  }

  let token = localStorage.getItem("token");
  if (new_token) {
    token = new_token;
  }
  try {
    const response = await axios({
      url: `${BASE_URL}${url}${param_get}`,
      method: method.toLowerCase(),
      data: data,
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
      // timeout: timeoutDuration,
    });
    return response.data;
  } catch (error) {
    // console.error("Unexpected Error:", error);
    const status = error.response?.status;
    const data = error.response?.data;

    if (data && data.email && data.password) {
      // Handle the case where the response contains email and password
    }

    switch (status) {
      case 400:
        console.error(data.email ? data.email : data.password);
        break;
      case 401:
        if (error?.response?.data?.error?.name === "TokenExpiredError") {
          console.log("Expired token, need to refresh");
          return refreshToken(url, method, data);
        } else {
          logout();
        }
        break;
      case 403:
        console.error("Forbidden: " + error.message);
        break;
      case 404:
        console.error("Not Found: " + error.message);
        break;
      case 405:
        console.error("Method Not Allowed: " + error.message);
        break;
      case 500:
        window.location.href = "/server-error";
        console.error("Internal Server Error: " + error.message);
        break;
      default:
        if (!status) {
          window.location.href = "/server-error";
          console.error("An unexpected error occurred: " + error.message);
        } else {
          console.error("An unexpected error occurred: " + error.message);
          window.location.href = "/server-error";
        }
    }
    return false;
  }
};
export const refreshToken = async (url, method, data) => {
  const refresh_token = localStorage.getItem("refresh_token");
  try {
    const res = await axios({
      url: Config.base_url + "refresh_token",
      method: "post",
      data: {
        refresh_token: refresh_token,
      },
    });
    // restore new (access_token and refresh_token)
    setAccessToken(res.data.access_token);
    setRefreshToken(res.data.refesh_token);
    var new_token = res.data.access_token;
    return request(url, method, data, new_token);
  } catch (error) {
    console.error("Unexpected Error:", error);
    logout();
    return false;
  }
};
