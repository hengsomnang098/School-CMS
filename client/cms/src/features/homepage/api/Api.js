import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://api.southwest-internationalschool.site/api/";

const GENERIC_ERROR_MESSAGE =
  "An error occurred while fetching data. Please try again later.";

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error.message);
    throw new Error(GENERIC_ERROR_MESSAGE);
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
      console.error("Unexpected response format");
      throw new Error(GENERIC_ERROR_MESSAGE);
    }
  } catch (error) {
    console.error("Error fetching articles by category name:", error.message);
    throw new Error(GENERIC_ERROR_MESSAGE);
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
      console.error("Unexpected response format");
      throw new Error(GENERIC_ERROR_MESSAGE);
    }
  } catch (error) {
    console.error("Error fetching contents by article name:", error.message);
    throw new Error(GENERIC_ERROR_MESSAGE);
  }
};

export const fetchTeams = async (page, pageSize) => {
  const endpoint = `teams?page=${page}&pageSize=${pageSize}`;
  try {
    return await fetchData(endpoint);
  } catch (error) {
    console.error("Error fetching teams:", error.message);
    throw new Error(GENERIC_ERROR_MESSAGE);
  }
};

export const fetchContentsByArticleName = async (articleName) => {
  try {
    const response = await axios.get(`${BASE_URL}contents/article/`, {
      params: { name: articleName },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching contents by article name:", error.message);
    throw new Error(GENERIC_ERROR_MESSAGE);
  }
};
