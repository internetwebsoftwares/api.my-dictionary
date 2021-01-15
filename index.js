const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
app.use(cors());

app.get("/version", (req, res) => {
  res.json({
    version: "1.0.0",
  });
});

app.listen(PORT, () => console.log(`http://localhost:5000`));
