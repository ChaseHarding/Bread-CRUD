const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread.js");

// INDEX
breads.get("/", (req, res) => {
  res.render("Index", {
    breads: Bread,
    title: "Index Page",
  });
});

// NEW
breads.get('/New', (req, res) => {
    res.render('New')
})


// SHOW
breads.get("/:arrayIndex", (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render("Show", {
      bread: Bread[req.params.arrayIndex],
    });
  } else {
    res.render("error404");
  }
});

// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = "https://placekitten.com/350/350"
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = 'true'
    } else {
      req.body.hasGluten = 'false'
    }
    Bread.push(req.body)
    res.redirect('/breads')
  })
  

module.exports = breads;
