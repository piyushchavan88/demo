module.exports = (sequelize, Sequelize) => {
  const Vehicle = sequelize.define("vehicle", {
   
    id: {
      type: Sequelize.INTEGER,
      primaryKey:true
    },
    vehicle_type: {
    type: Sequelize.STRING
    },
    registration_no: {
      type: Sequelize.STRING
    },
    used_for: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.INTEGER
    },
    added_by: {
      type: Sequelize.STRING
    },
    add_time: {
      type: Sequelize.TIME
    },
  });

 
  return Vehicle; 
};
