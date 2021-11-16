module.exports = (app) => {
  const evaluations = require("../controllers/evaluation.controller.js");

  var router = require("express").Router();

  // Create a new Evaluation
  router.post("/", evaluations.create);

  // Retrieve all Evaluations
  router.get("/", evaluations.findAll);

  // Retrieve a single Evaluation with id
  router.get("/:id", evaluations.findOne);

  // Update a Evaluation with id
  router.put("/:id", evaluations.update);

  // Delete a Evaluation with id
  router.delete("/:id", evaluations.delete);

  // Retrieve a establishment Evaluation with id
  router.get("/establishment/:id", evaluations.findEstablishment);

  // Retrieve a food Evaluation with id
  router.get("/food/:id", evaluations.findFood);

  // Retrieve a user Evaluation with id
  router.get("/user/:id", evaluations.findUser);

  app.use("/api/evaluations", router);
};
