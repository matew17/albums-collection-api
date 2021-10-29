const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");

const { dbConnection } = require("./db/config");
const albumsRoutes = require("./routes/albums");

// Configure app
const app = express();

dotenv.config();
dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/albums", albumsRoutes);

// Run App
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}.`));
