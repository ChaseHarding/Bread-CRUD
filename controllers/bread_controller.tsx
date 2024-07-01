const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread.js");
const Baker = require("../models/baker.js");


// NEW
breads.get("/new", (_req: any, res: { render: (arg0: string, arg1: { bakers: any; }) => void; }) => {
  Baker.find().then((foundBakers: any) => {
    res.render("new", {
      bakers: foundBakers,
    });
  });
});

// CREATE
breads.post("/", (req: { body: { image: undefined; hasGluten: string; }; }, res: { redirect: (arg0: string) => void; }) => {
  if (!req.body.image) {
    req.body.image = undefined;
  }
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = "true";
  } else {
    req.body.hasGluten = "false";
  }
  Bread.create(req.body);
  res.redirect("/breads");
});

// INDEX
breads.get("/", (_req: any, res: { render: (arg0: string, arg1: { breads: any; bakers: any; title: string; }) => void; }) => {
  Baker.find().then((foundBakers: any) => {
    Bread.find().then((foundBreads: any) => {
      res.render("index", {
        breads: foundBreads,
        bakers: foundBakers,
        title: "Index Page",
      });
    });
  });
});

// SHOW
breads.get("/:id", (req: { params: { id: any; }; }, res: { render: (arg0: string, arg1: { bread: any; }) => void; send: (arg0: string) => void; }) => {
  Bread.findById(req.params.id)
    .populate("baker")
    .then((foundBread: { getBakedBy: () => any; }) => {
      const bakedBy = foundBread.getBakedBy();
      console.log(bakedBy);
      res.render("show", {
        bread: foundBread,
      });
    })
    .catch(() => {
      res.send("404");
    });
});



// EDIT
breads.get("/:id/edit", (req, res) => {
  Baker.find().then((foundBakers) => {
    Bread.findById(req.params.id).then((foundBread) => {
      res.render("edit", {
        bread: foundBread,
        bakers: foundBakers,
      });
    });
  });
});

// UPDATE
breads.put("/:id", (req, res) => {
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedBread) => {
      console.log(updatedBread);
      res.redirect(`/breads/${req.params.id}`);
    })
    .catch((error) => {
      console.error("Error updating bread: ", error);
      res.status(500).send("Error updating bread");
    });
});





// DELETE
breads.delete("/:id", (req, res) => {
  Bread.findByIdAndDelete(req.params.id).then((deletedBread) => {
    res.status(303).redirect("/breads");
  });
});

module.exports = breads;
