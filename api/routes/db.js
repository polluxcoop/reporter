import express from "express";
import sqlite3 from "sqlite3";

const { Router } = require("express");

const db = new sqlite3.Database(":memory:");

db.serialize(function () {
  db.run(
    "CREATE TABLE reports (signature NVARCHAR(132) PRIMARY KEY NOT NULL, description TEXT NOT NULL, title NVARCHAR(50) NOT NULL)"
  );

  db.run(
    "CREATE TABLE nonces (signature NVARCHAR(132) PRIMARY KEY NOT NULL, nonce INTEGER NOT NULL)"
  );

  const stmt = db.prepare(
    "INSERT INTO reports (signature, description, title) VALUES (?,?,?)"
  );

  stmt.run(["lorem", "hola", "mundo"]);

  stmt.finalize();

  db.each("SELECT * FROM reports", function (err, row) {
    console.log(row.signature + ": " + row.description);
  });

  const router = Router();

  router.use(express.json());

  router.get("/reports/:signature", function (req, res, next) {
    const sql = `SELECT * FROM reports where signature = '${req.params.signature}'`;

    db.get(sql, function (err, row) {
      res.json(row);
    });
  });

  router.get("/nonces/:signature", function (req, res, next) {
    const sql = `SELECT * FROM nonces where signature = '${req.params.signature}'`;

    db.get(sql, function (err, row) {
      res.json(row);
    });
  });

  module.exports = router;
});
