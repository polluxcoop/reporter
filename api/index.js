import express from "express";
const app = express();

const sqlite = require("./routes/db");

app.use(sqlite);

module.exports = {
  path: "/api",
  handler: app,
};

export default {
  path: "/api",
  handler: app,
};
