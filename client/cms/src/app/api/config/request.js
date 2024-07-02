import axios from "axios";
import { Config, logout, setAccessToken, setRefreshToken } from "./helper";
import { message } from "antd";
// export const request = async (
//   url = "",
//   method = "get",
//   data = {},
//   new_token
//   // timeoutDuration = 10000
// ) => {
//   var param_get = "";
//   // if (method === "get" && Object.keys(data).length > 0) {
//   //   //convert object url query ?txt_search=com&status=1&brand=a&group=b
//   //   Object.keys(data).map((key, i) => {
//   //     param_get += (i == 0 ? "?" : "&") + key + "=" + data[key];
//   //   });
//   // }

//   if (method === "get" && Object.keys(data).length > 0) {
//     param_get = "?" + new URLSearchParams(data).toString();
//   }
//   let headers = { "Content-Type": "application/json" };
//   if (data instanceof FormData) {
//     // check if param data is FormData
//     headers = { "Content-Type": "multipart/form-data" };
//   }
//   var token = localStorage.getItem("token");
//   if (new_token) {
//     token = new_token;
//   }
//   return axios({
//     url: apiUrl + url + param_get,
//     method: method.toLowerCase(),
//     data: data,
//     headers: {
//       ...headers,
//       Authorization: "Bearer " + token,
//     },
//     // timeout: timeoutDuration,
//   })
//     .then((res) => {
//       return res.data;
//     })
//     .catch((error) => {
//       console.log("Unexpected Error:", error);
//       var status = error.response?.status;
//       if (status === 403) {
//         message.error(error.message + "");
//       } else if (status == 404) {
//         message.error(error.message + "");
//       } else if (status === 405) {
//         message.error(error.message + "");
//       } else if (status == 500) {
//         message.error(error.message + "");
//       } else if (status == 401) {
//         if (error?.response?.data?.error?.name == "TokenExpiredError") {
//           console.log("Expired token need to refresh new");
//           return refreshToken(url, method, data);
//         } else if (error?.response?.data?.error?.name) {
//           logout();
//           return;
//         } else {
//           message.error("You don't have permission access this method");
//         }
//       } else if (status == 400) {
//         message.error(error.response.data.detail + "");
//       }
//       return false;
//     });
// };

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
    console.error("Unexpected Error:", error);
    const status = error.response?.status;

    switch (status) {
      case 400:
        message.error(error.response.data.detail);
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
      case 404:
      case 405:
      case 500:
        message.error(error.message);
        break;
      default:
        message.error("An unexpected error occurred");
    }
    return false;
  }
};
export const refreshToken = async (url, method, data) => {
  const refresh_token = localStorage.getItem("refresh_token");
  try {
    const res = await axios({
      url: `${BASE_URL}refresh_token`,
      method: "post",
      data: { refresh_token },
    });
    // Restore new access_token and refresh_token
    setAccessToken(res.data.access_token);
    setRefreshToken(res.data.refresh_token);
    const new_token = res.data.access_token;
    return request(url, method, data, new_token);
  } catch (error) {
    message.error("Failed to refresh token");
    logout();
    return false;
  }
};
