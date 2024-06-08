import axios from "axios";
const BASE_URL = "http://localhost:8080/api/";

// Function to fetch data using Axios GET request
export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data; // Assuming the response contains JSON data
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error; // Propagate the error so it can be handled further up the chain
  }
};

// Function to fetch articles by category ID
export const fetchArticlesByCategoryId = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/categories/${id}/articles`);
    return response.data.object; // Assuming the response contains JSON data with an 'object' property
  } catch (error) {
    console.error(`Error fetching articles for category ID ${id}:`, error);
    throw error; // Propagate the error so it can be handled further up the chain
  }
};
