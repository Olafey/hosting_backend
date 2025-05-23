const express = require("express");
const app = express();

app.use(express.json());

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Responding to PORT ${PORT}`);
});

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to Hosting API",
  });
});
