import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Button from "@material-ui/core/Button";
import BookingFormDialog from "./components/BookingFormDialog";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BookingTable() {
  const classes = useStyles();

  const [mainTableRows, setMainTableRows] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/bookings/";
    axios.get(apiUrl).then((repos) => {
      setMainTableRows(repos.data);
    });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            
            <TableCell align="right">id</TableCell>
            <TableCell align="right">emp_no</TableCell>
            <TableCell align="right">booked_by</TableCell>
            <TableCell align="right">booked_by_name</TableCell>
            <TableCell align="right">booked_self</TableCell>
            <TableCell align="right">b_type</TableCell>
            <TableCell align="right">v_type</TableCell>
            <TableCell align="right">v_registration_no</TableCell>
            <TableCell align="right">intender_name</TableCell>
            <TableCell align="right">hod_id</TableCell>
            <TableCell align="right">hod_name</TableCell>
            <TableCell align="right">hod_desig</TableCell>
            <TableCell align="right">dir_id</TableCell>
            <TableCell align="right">dir_name</TableCell>
            <TableCell align="right">design</TableCell>
            <TableCell align="right">dept</TableCell>
            <TableCell align="right">bording_place</TableCell>
            <TableCell align="right">outside_dhn</TableCell>
            <TableCell align="right">destination</TableCell>
            <TableCell align="right">date</TableCell>
            <TableCell align="right">duration_from</TableCell>
            <TableCell align="right">duration_to</TableCell>
            <TableCell align="right">purpose</TableCell>
            <TableCell align="right">p_detail</TableCell>
            <TableCell align="right">t_name_number</TableCell>
            <TableCell align="right">driver</TableCell>
            <TableCell align="right">driver_name</TableCell>
            <TableCell align="right">charge</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">sup_id</TableCell>
            <TableCell align="right">sup_app_time</TableCell>
            <TableCell align="right">status_hod</TableCell>
            <TableCell align="right">hod_app_time</TableCell>
            <TableCell align="right">status_dir</TableCell>
            <TableCell align="right">dir_app_time</TableCell>
            <TableCell align="right">rej_reason</TableCell>
            <TableCell align="right">hod_rej_reason</TableCell>
            <TableCell align="right">dir_rej_reason</TableCell>
            <TableCell align="right">time_of_booking</TableCell>
            <TableCell align="right">sup_remark</TableCell>
            <TableCell align="right">project_no</TableCell>
            {/* ADD HERE ALSO */}
          
  

          </TableRow>
        </TableHead>
        <TableBody>
          {mainTableRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.emp_no}</TableCell>
              <TableCell align="right">{row.booked_by}</TableCell>
              <TableCell align="right">{row.booked_self}</TableCell> 
              <TableCell align="right">{row.b_type}</TableCell>
              <TableCell align="right">{row.v_type}</TableCell>
              <TableCell align="right">{row.v_registration_no}</TableCell>
              <TableCell align="right">{row.intender_name}</TableCell>
              <TableCell align="right">{row.hod_id}</TableCell>
              <TableCell align="right">{row.hod_name}</TableCell>
              <TableCell align="right">{row.hod_desig}</TableCell>
              <TableCell align="right">{row.dir_id}</TableCell>
              <TableCell align="right">{row.dir_name}</TableCell>
              <TableCell align="right">{row.design}</TableCell>
              <TableCell align="right">{row.dept}</TableCell>
              <TableCell align="right">{row.boarding_place}</TableCell>
              <TableCell align="right">{row.outside_dhn}</TableCell>
              <TableCell align="right">{row.destination}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.duration_from}</TableCell>
              <TableCell align="right">{row.duration_to}</TableCell>
              <TableCell align="right">{row.purpose}</TableCell>
              <TableCell align="right">{row.p_detail}</TableCell>
              <TableCell align="right">{row.t_name_number}</TableCell>
              <TableCell align="right">{row.driver}</TableCell>
              <TableCell align="right">{row.driver_name}</TableCell>
              <TableCell align="right">{row.charge}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.sup_id}</TableCell>
              <TableCell align="right">{row.sup_app_time}</TableCell>
              <TableCell align="right">{row.status_hod}</TableCell>
              <TableCell align="right">{row.hod_app_name}</TableCell>
              <TableCell align="right">{row.status_dir}</TableCell>
              <TableCell align="right">{row.dir_app_time}</TableCell>
              <TableCell align="right">{row.rej_reason}</TableCell>
              <TableCell align="right">{row.hod_rej_reason}</TableCell>
              <TableCell align="right">{row.dir_rej_reason}</TableCell>
              <TableCell align="right">{row.time_of_booking}</TableCell>
              <TableCell align="right">{row.sup_remark}</TableCell>
              <TableCell align="right">{row.project_no}</TableCell>
              
              {/* Add your new columns here  */}

 
              <TableCell align="right">
                <BookingFormDialog row={row} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
