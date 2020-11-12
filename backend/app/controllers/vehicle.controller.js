const db = require("../models");
const Driver = db.vehicles;
const Op = db.Sequelize.Op;

// Create and Save a new Driver
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Driver
  const driver = {
    id:req.body.id,
    vehicle_type:req.body.vehicle_type,
    registration_no:req.body.registration_no,
    used_for:req.body.used_for,
    status:req.body.status,
    added_by:req.body.added_by,
    add_time:req.body.add_time
  };
  
  // Save Driver in the database
  Driver.create(driver)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Driver."
      });
    });
};

// Retrieve all Drivers from the database.
exports.findAll = (req, res) => {
  const used_for = req.query.used_for; 
  var condition = used_for ? { used_for: { [Op.like]: `%${used_for}%` } } : null;

  Driver.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving vehicles."
      });
    });
};

// Find a single Driver with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Driver.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Driver with id=" + id
      });
    });
};

// Update a Driver by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Driver.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Driver was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Driver with id=${id}. Maybe Driver was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Driver with id=" + id
      });
    });
};

// Delete a Driver with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Driver.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Driver was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Driver with id=${id}. Maybe Driver was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Driver with id=" + id
      });
    });
};

// Delete all Drivers from the database.
exports.deleteAll = (req, res) => {
  Driver.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Drivers were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all vehicles."
      });
    });
};

// find all published Driver
exports.findAllPublished = (req, res) => {
  Driver.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving vehicles."
      });
    });
};
