const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.get("/orders", async (req, res) => {
  try {
    const baseUrl = process.env.PRODUCT_SERVICE_URL;
    const response = await axios.get(`${baseUrl}/products`, {
      timeout: 3000
    });

    res.json({
      orderId: 1,
      itemCount: response.data.length,
      products: response.data
    });
  } catch (error) {
    res.status(500).json({
      error: "product service unreachable",
      target: process.env.PRODUCT_SERVICE_URL,
      details: error.message
    });
  }
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "order-service",
    productServiceUrl: process.env.PRODUCT_SERVICE_URL || null
  });
});

app.listen(PORT, () => {
  console.log(`order-service running on port ${PORT}`);
  console.log(`PRODUCT_SERVICE_URL=${process.env.PRODUCT_SERVICE_URL || "undefined"}`);
});
