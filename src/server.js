const cors = require("cors");
const express = require("express");
require("dotenv").config();

const { dbConnection } = require("./db/config");

// Configure app
const app = express();

dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/albums", require("./routes/albums"));

// Run App
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}.`));
