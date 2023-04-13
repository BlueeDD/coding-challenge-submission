const express = require("express");
const axios = require("axios");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors(
    {  origin: "http://localhost:3000", }
));

app.get("/api/country/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const response = await axios.get(
      `https://restcountries.com/v2/name/${name}`
    );
    res.json(response.data[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
