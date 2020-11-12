const db = require("../models");
const Bookings = db.bookings;
const Op = db.Sequelize.Op;

// Create and Save a new Bookings
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Bookings
  const booking = {
    id: req.body.id,
    emp_no : req.body.emp_no,
    booked_by : req.body.booked_by,
    booked_by_name:req.body.booked_by_name,
    booked_self:req.body.booked_self,
    b_type:req.body.b_type,
    v_type:req.body.v_type,
    v_registration:req.body.v_registration,
    intender_name:req.body.intender_name,
    hod_id:req.body.hod_id,
    hod_name:req.body.hod_name,
    hod_desig:req.body.hod_desig,
    dir_id:req.bocy.dir_id,
    dir_name:req.body.dir_name,
    design:req.body.design,
    dept:req.body.dept,
    boardng_place:req.body.boardng_place,
    outside_dhn:req.body.outside_dhn,
    destination:req.body.destination,
    date:req.body.date,
    duration_from:req.body.duration_from,
    duration_to:req.body.duration_to,
    purpose:req.body.purpose,
    p_detail:req.body.p_detail,
    t_name_number:req.body.t_name_number,
    driver:req.body.driver,
    driver_name:req.body.driver_name,
    charge:req.body.charge,
    status:req.body.status,
    sup_id:req.body.sup_id,
    sup_app_time:req.body.sup_app_time,
    status_hod:req.body.status_hod,
    hod_app_time:req.body.hod_app_time,
    status_dir:req.body.status_dir,
    dir_app_time:req.body.dir_app_time,
    rej_reason:req.body.rej_reason,
    hod_rej_reasnon:req.body.hod_rej_reasnon,
    time_of_booking:req.body.time_of_booking,
    sup_remark:req.body.sup_remark,
    project_no:req.body.project_no
    //add your column information
  };
  
  
  // Save Bookings in the database
  Bookings.create(booking)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Bookings."
      });
    });
};

// Retrieve all Bookings from the database.
exports.findAll = (req, res) => {
  const id= req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  Bookings.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookings."
      });
    });
};

// Find a single Bookings with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Bookings.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Bookings with id=" + id
      });
    });
};

// Update a Bookings by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Bookings.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bookings was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Bookings with id=${id}. Maybe Bookings was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Bookings with id=" + id
      });
    });
};

// Delete a Bookings with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Bookings.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bookings was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Bookings with id=${id}. Maybe Bookings was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Bookings with id=" + id
      });
    });
};

// Delete all Bookings from the database.
exports.deleteAll = (req, res) => {
  Bookings.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Bookings were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all bookings."
      });
    });
};

// find all published Bookings
exports.findAllPublished = (req, res) => {
  Bookings.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookings."
      });
    });
};
