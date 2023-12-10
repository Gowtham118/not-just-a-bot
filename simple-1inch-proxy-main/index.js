require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

const headers = {
  Authorization: process.env.AUTHORIZATION,
  "Content-Type": "application/json",
};

// Middleware to handle request bodies
app.use(express.json());

// Middleware for URL validation
// app.use((req, res, next) => {
//   const url = req.query.url;

//   if (!url) {
//     return res
//       .status(400)
//       .send("Include `url` in the query string or request body");
//   }
//   if (!url.startsWith("https://api.1inch.dev")) {
//     return res
//       .status(400)
//       .send("Base URL must start with https://api.1inch.dev");
//   }
//   next();
// });

app.use(cors());

app.get("/", async (req, res) => {
  try {
    const response = await fetch(decodeURIComponent(req.query.url), {
      headers,
    });
    console.log("req.query.url :", decodeURIComponent(req.query.url));
    const data = await response.json();
    console.log("data :", data);
    return res.status(200).json({ data });
  } catch (error) {
    console.log("error :", error);
    return res
      .status(500)
      .send("Error occurred while fetching data: " + JSON.stringify(error));
  }
});

app.post("/", async (req, res) => {
  try {
    const response = await fetch(req.query.url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(req.body.data),
    });
    const data = await response.json();
    return res.send(data);
  } catch (error) {
    return res
      .status(500)
      .send("Error occurred while fetching data: " + JSON.stringify(error));
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
