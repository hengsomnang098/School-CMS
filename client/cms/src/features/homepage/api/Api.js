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
export const fetchContentsByArtName = async (articleName) => {
  try {
    const allContentsResponse = await fetchData("contents");

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
    console.error("Error fetching articles by category name:", error.message);
    throw error;
  }
};
export const fetchContentsByArticleName = async (articleName) => {
  try {
    const response = await axios.get(
      `http://194.233.87.193:8080/api/contents/article/`,
      {
        params: { name: articleName },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching contents by article name:", error);
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

export const fetchMediaListByContentsId = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/medias/content/${id}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const mediaList = await response.json();
    return mediaList;
  } catch (error) {
    console.error("Error fetching media list:", error.message);
    return [];
  }
};
