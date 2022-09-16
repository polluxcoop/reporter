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

  const router = Router();

  router.use(express.json());

  router.get("/reports/:signature", function (req, res, next) {
    const sql = `SELECT * FROM reports where signature = '${req.params.signature}'`;

    db.get(sql, function (err, row) {
      if (err) {
        return res.status(404).json({ err });
      }

      res.json(row);
    });
  });

  router.post("/reports", function (req, res, next) {
    const { nonceSignature, reportSignature, title, description } = req.body;

    const reportInsert = db.prepare(
      "INSERT INTO reports (signature, description, title) VALUES (?,?,?)"
    );

    reportInsert.run([reportSignature, description, title]);

    reportInsert.finalize();

    const selectNonce = `SELECT * FROM nonces where signature = '${nonceSignature}'`;

    db.get(selectNonce, function (err, row) {
      if (row) {
        const noncesUpdate = db.prepare(
          "UPDATE nonces SET nonce = ? WHERE signature = ?"
        );

        noncesUpdate.run([row.nonce + 1, nonceSignature]);

        noncesUpdate.finalize();
      } else {
        const noncesInsert = db.prepare(
          "INSERT INTO nonces (signature, nonce) VALUES(?,?)"
        );

        noncesInsert.run([nonceSignature, 1]);

        noncesInsert.finalize();
      }

      return res.json({ row, err });
    });
  });

  router.get("/nonces/:signature", function (req, res, next) {
    const sql = `SELECT * FROM nonces where signature = '${req.params.signature}'`;

    db.get(sql, function (err, row) {
      if (err) {
        return res.json({ nonce: 0 });
      }

      res.json({ nonce: row.nonce });
    });
  });

  module.exports = router;
});
