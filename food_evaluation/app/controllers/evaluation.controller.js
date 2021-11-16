const db = require("../models");
const Evaluation = db.evaluations;
const Op = db.Sequelize.Op;

// Create and Save a new Evaluation
exports.create = (req, res) => {
  // Validate request
  if (
    !req.body.establishment_id ||
    !req.body.food_id ||
    !req.body.user_id ||
    !req.body.stars
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
      teste: req.body,
    });
    return;
  }

  // Create a Evaluation
  const evaluation = {
    establishment_id: req.body.establishment_id,
    establishment_name: req.body.establishment_name,
    food_id: req.body.food_id,
    food_name: req.body.food_name,
    user_id: req.body.user_id,
    user_name: req.body.user_name,
    stars: req.body.stars,
    whats_did_like: req.body.whats_did_like,
    comment: req.body.comment,
  };

  // Save Evaluation in the database
  Evaluation.create(evaluation)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Evaluation.",
      });
    });
};

// Retrieve all Evaluations from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Evaluation.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving evaluations.",
      });
    });
};

// Find a single Evaluation with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Evaluation.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Evaluation with id=" + id,
      });
    });
};

// Update a Evaluation by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Evaluation.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Evaluation was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Evaluation with id=${id}. Maybe Evaluation was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Evaluation with id=" + id,
      });
    });
};

// Delete a Evaluation with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Evaluation.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Evaluation was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Evaluation with id=${id}. Maybe Evaluation was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Evaluation with id=" + id,
      });
    });
};

// Find a Establishment Evaluation with an id
exports.findEstablishment = (req, res) => {
  const id = req.params.id;

  Evaluation.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Evaluation with id=" + id,
      });
    });
};

// Find a Food Evaluation with an id
exports.findFood = (req, res) => {
  const id = req.params.id;

  Evaluation.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Evaluation with id=" + id,
      });
    });
};

// Find a User Evaluation with an id
exports.findUser = (req, res) => {
  const id = req.params.id;

  Evaluation.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Evaluation with id=" + id,
      });
    });
};
