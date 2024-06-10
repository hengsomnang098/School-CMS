import axios from "axios";

// const BASE_URL = "http://localhost:8080/api/";
const BASE_URL = "http://194.233.87.193:8080/api/";
export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};

export const fetchArticlesByCatName = async (categoryName) => {
  try {
    const allArticlesResponse = await fetchData("articles");

    if (allArticlesResponse && Array.isArray(allArticlesResponse.object)) {
      const filteredArticles = allArticlesResponse.object.filter(
        (article) => article.category.nameEn === categoryName
      );
      return { object: filteredArticles };
    } else {
      console.error("Unexpected response format:", allArticlesResponse);
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error fetching articles by category name:", error.message);
    throw error;
  }
};

export const fetchArticlesByCategoryId = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/categories/${id}/articles`);
    return response.data.object;
  } catch (error) {
    console.error(`Error fetching articles for category ID ${id}:`, error);
    throw error;
  }
};
export const fetchContentsByArticlesId = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/articles/${id}/contents`);
    return response.data.object;
  } catch (error) {
    console.error(`Error fetching contents for article ID ${id}:`, error);
    throw error;
  }
};
