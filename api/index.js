const express = require("express");

const app = express();

app.get("/hello-world", (req, res, next) => {
  res.send("hola mundo");
});

export default {
  path: "/api/v1/",
  handler: app,
};
