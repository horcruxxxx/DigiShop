import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
// GET PRODUCT ROUTE

app.get("/api/products", (req, res) => {
  res.json(products);
});

// GET ROUTE...
app.get("/", (req, res) => {
  res.send(`API is Running.... on PORT ${PORT} on ${process.env.NODE_ENV} mode`);
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
);
