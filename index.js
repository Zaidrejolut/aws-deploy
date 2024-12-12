const express = require("express");
const app = express();

app.get("/api/get", (req, res) => {
  res.send({ message: "Hello this is backend" });
});

app.listen(3000);
