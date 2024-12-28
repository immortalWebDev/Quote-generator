const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 3000;

// Enable CORS for smooth front-back communication even with diff ports (5500-3000)
app.use(cors());

app.get("/api/quotes", async (req, res) => {
  try {
    const response = await fetch(process.env.RESOURCE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch quotes");
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
