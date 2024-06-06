import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";

// Function to fetch data using Axios GET request
const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data; // Assuming the response contains JSON data
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error; // Propagate the error so it can be handled further up the chain
  }
};

export { fetchData };
