const express = require("express");
const app = express();
const PORT = 5000 || process.env.PORT;

app.get("/version", (req, res) => {
  res.json({
    version: "1.0.0",
  });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
