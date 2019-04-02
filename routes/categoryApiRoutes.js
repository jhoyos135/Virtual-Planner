let db = require("../models");

module.exports = function (app) {

    // GET all categories
    app.get("/api/categories", function(req, res) {
      let query = {};
      if (req.query.id) {
        query.id = req.query.id;
      }
  
      db.Category.findAll({
        where: query,
        include: [db.User]
      }).then(function(dbCategory) {
        res.json(dbCategory);
      });
    });
  
    // GET one Category by categoryId
    app.get("/api/categories/:id", function(req, res) {
      db.Category.findOne({
        where: {
          categoryId: req.params.id
        },
        include: [db.User]
      }).then(function(dbCategory) {
        res.json(dbCategory);
      });
    });
  
    // POST a new Category
    app.post("/api/categories", function(req, res) {
      db.Category.create(req.body).then(function(dbCategory) {
        res.json(dbCategory);
      });
    });
  
    // DELETE a Category by categoryId
    app.delete("/api/categories/:id", function(req, res) {
      db.Category.destroy({
        where: {
          categoryId: req.params.id
        }
      }).then(function(dbCategory) {
        res.json(dbCategory);
      });
    });
  
    // PUT route to update a category
    app.put("/api/categories", function(req, res) {
      db.Category.update(
        req.body,
        {
          where: {
            categoryId: req.body.id
          }
        }).then(function(dbCategory) {
        res.json(dbCategory);
      });
    });
    
  };
  