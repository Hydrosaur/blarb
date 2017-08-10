const express = require("express");
const router = express.Router();

import { renderToString } from "react-dom/server";
import App from "../public/js/components/app";
import React from "react";

/* GET home page. */
router.get("/", function(req, res) {
  // const markup = renderToString(<App />);

  res.render("index", {
    title: "Blarb"
  });
});

module.exports = router;
