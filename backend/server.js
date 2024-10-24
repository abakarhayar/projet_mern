const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const products = require("./routes/products");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({ origin: "http://localhost:3000" })); // Autoriser les requêtes de l'application React
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/product", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.use('/', products);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
