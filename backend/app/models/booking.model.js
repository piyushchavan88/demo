

module.exports = (sequelize, Sequelize) => {
  const Booking = sequelize.define("booking", {
    
    id: {
      type:Sequelize.BIGINT,
      primaryKey:true
    },
    emp_no: {
      type:Sequelize.STRING
    },
    booked_by: {
      type:Sequelize.BIGINT
    },
    booked_by_name: {
      type:Sequelize.STRING
    },
    booked_self: {
      type:Sequelize.INTEGER
    },
    b_type: {
      type:Sequelize.STRING
    },
    v_type: {
      type:Sequelize.STRING
    },
    v_registration_no: {
      type:Sequelize.STRING
    },
    intender_name: {
      type:Sequelize.STRING
    },
    hod_id: {
      type:Sequelize.STRING
    },
    hod_name: {
      type:Sequelize.STRING
    },
    hod_desig: {
      type:Sequelize.STRING
    },
    dir_id: {
      type:Sequelize.STRING
    },
    dir_name: {
      type:Sequelize.STRING
    },
    design: {
      type:Sequelize.STRING
    },
    dept: {
      type:Sequelize.STRING
    },
    bboarding_place: {
      type:Sequelize.STRING
    },
    outside_dhn: {
      type:Sequelize.STRING
    },
    destination: {
      type:Sequelize.STRING
    },
    date: {
      type:Sequelize.DATE
    },
    duration_from: {
      type:Sequelize.STRING
    },
    duration_to: {
      type:Sequelize.STRING
    },
    purpose: {
      type:Sequelize.STRING
    },
    p_detail: {
      type:Sequelize.STRING
    },
    t_name_number: {
      type:Sequelize.STRING
    },
    driver: {
      type:Sequelize.STRING
    },
    driver_name: {
      type:Sequelize.STRING
    },
    charge: {
      type:Sequelize.INTEGER
    },
    status: {
      type:Sequelize.INTEGER
    },
    sup_id: {
      type:Sequelize.STRING
    },
    sup_app_time: {
      type:Sequelize.TIME
    },
    status_hod: {
      type:Sequelize.INTEGER
    },
    hod_app_time: {
      type:Sequelize.TIME
    },
    status_dir: {
      type:Sequelize.INTEGER
    },
    dir_app_time: {
      type:Sequelize.TIME
    },
    rej_reason: {
      type:Sequelize.STRING
    },
    hod_rej_reason: {
      type:Sequelize.STRING
    },
    dir_rej_reason: {
      type:Sequelize.STRING
    },
    time_of_booking: {
      type:Sequelize.TIME
    },
    sup_remark: {
      type:Sequelize.STRING
    },
    project_no: {
      type:Sequelize.STRING
    }

  });

  return Booking;
};
