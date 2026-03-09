const express = require("express");

const app = express();
const PORT = 3000;

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Ali", role: "student" },
    { id: 2, name: "Ayşe", role: "mentor" },
    { id: 3, name: "Mehmet", role: "participant" }
  ]);
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "user-service" });
});

app.listen(PORT, () => {
  console.log(`user-service running on port ${PORT}`);
});
