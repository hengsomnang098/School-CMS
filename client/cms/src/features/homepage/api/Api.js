import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
// const BASE_URL = "http://localhost:8080/api/";
// const BASE_URL = "https://api.southwest-internationalschool.site/api/";
// const BASE_URL = "http://194.233.87.193:8080/api/";

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

export const fetchContentsByArtName = async (articleName) => {
  try {
    const allContentsResponse = await fetchData("contents/status");

    if (allContentsResponse && Array.isArray(allContentsResponse.object)) {
      const filteredContents = allContentsResponse.object.filter(
        (content) => content.article.name === articleName
      );
      return { object: filteredContents };
    } else {
      console.error("Unexpected response format:", allContentsResponse);
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error fetching contents by article name:", error.message);
    throw error;
  }
};

export const fetchTeams = async (page, pageSize) => {
  const endpoint = `teams?page=${page}&pageSize=${pageSize}`;
  return fetchData(endpoint);
};

export const fetchContentsByArticleName = async (articleName) => {
  try {
    const response = await axios.get(`${BASE_URL}contents/article/`, {
      params: { name: articleName },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching contents by article name:", error);
    throw error;
  }
};
