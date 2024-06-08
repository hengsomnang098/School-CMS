import axios from "axios";
import express from "express";

const app = express();
const PORT = 8000; // You can change this to any port you prefer

// Route to get articles by category ID
app.get("/categories/:id/articles", async (req, res) => {
  const categoryId = req.params.id;

  try {
    // Fetch articles from the external API
    const response = await axios.get("http://localhost:8080/api/articles");

    if (response && response.data) {
      // Filter articles by category ID
      const filteredArticles = response.data.object.filter(
        (article) => article.category.id.toString() === categoryId
      );

      // Send the filtered articles as a response
      res.status(200).json({ object: filteredArticles });
    } else {
      res.status(404).json({ message: "No articles found" });
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
