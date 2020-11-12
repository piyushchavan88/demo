module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey:true
    },
    dest_name: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
    added_by: {
      type:Sequelize.STRING
    },
    add_time: {
      type:Sequelize.TIME
    }
  });

 
  return Tutorial;
};
