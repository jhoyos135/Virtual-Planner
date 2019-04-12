let db = require("../models");

module.exports = function (app) {

  app.get("/api/events", function (req, res) {
    console.log(req.body)
    let query = {};
    if (req.query.id) {
      query.id = req.query.id;
    }

    db.Calendr.findAll({
      where: query,
      include: [db.User]
    }).then(function (dbCalendr) {
      res.json(dbCalendr);
    });

  });

  app.post("/api/events", function (req, res) {
    db.Calendr.create(req.body).then(function (dbCalendr) {
      res.json(dbCalendr);
    });
  });

  // DELETE a single Event by id
  app.delete("/api/events/single/:eventid", function (req, res) {
    db.Calendr.destroy({
      where: {
        id: req.params.eventid
      }
    }).then(function (dbCalendr) {
      res.json(dbCalendr);
    });
  });
  // DELETE all Events by UserId
  app.delete("/api/events/:id", function (req, res) {
    db.Calendr.destroy({
      where: {
        UserId: req.params.id
      }
    }).then(function (dbCalendr) {
      res.json(dbCalendr);
    });
  });

    /* DASHBOARD */
    // Get the most recent Dates from calendar
    app.get("/api/events/recent/:id", function (req, res) {
      let query = {};
      if (req.query.id) {
        query.id = req.query.id;
        query.startDate = {[Op.gte]: req.query.startDate};
      }
  
      db.Calendr.findAll({
        where: {
          UserId: req.params.id
        },
        order: [['startDate', 'ASC']],
        limit: 4,
        include: [db.User]
      }).then(function (dbCalendr) {
        res.json(dbCalendr);
      });
      
    });


}