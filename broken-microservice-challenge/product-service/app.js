const express = require("express");

const app = express();
const PORT = 3000;

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 35000 },
    { id: 2, name: "Mouse", price: 800 },
    { id: 3, name: "Keyboard", price: 1500 }
  ]);
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "product-service",
    dbHost: process.env.DB_HOST || null
  });
});

app.listen(PORT, () => {
  console.log(`product-service running on port ${PORT}`);
  console.log(`DB_HOST=${process.env.DB_HOST || "undefined"}`);
});
