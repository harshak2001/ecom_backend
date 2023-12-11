const express = require("express");
// What is cors
const cors = require("cors");

const app = express();

// configure env
require("dotenv").config();

// Port
const PORT = process.env.PORT || 8080;

// middlewares
app.use(express.json());

// cross origin resource shairing - control req from 1 domain to another domain
app.use(cors());

//express -middleware used to have logs of http requests
const morgan = require("morgan");
app.use(morgan("dev"));

// routes
const authRoutes = require("./routes/authRoute");
app.use("/api/v1/auth", authRoutes);

const categoryRoutes = require("./routes/categoryRoutes");
app.use("/api/v1/category", categoryRoutes);

const productRoutes = require("./routes/productRoutes");
app.use("/api/v1/product", productRoutes);

// run listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// DataBase Connection
const connectDB = require("./config/db");

connectDB();

// rest API
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});
