const express = require("express");
const app = express();
const PORT = 7000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
app.post("/data", (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `Hello, ${name}. You are ${age} years old.` });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
