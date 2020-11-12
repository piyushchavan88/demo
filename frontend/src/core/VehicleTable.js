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
import VehicleFormDialog from "./components/VehicleFormDialog";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function VehicleTable() {
  const classes = useStyles();

  const [mainTableRows, setMainTableRows] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/vehicles/";
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
            <TableCell align="right">vehicle_type</TableCell>
            <TableCell align="right">registration_no</TableCell>
            <TableCell align="right">used_for</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">added_by</TableCell>
            <TableCell align="right">add_time</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {mainTableRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.vehicle_type}</TableCell>
              <TableCell align="right">{row.registration_no}</TableCell>
              <TableCell align="right">{row.used_for}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.added_by}</TableCell>
              <TableCell align="right">{row.add_time}</TableCell>
              
              <TableCell align="right">
                <VehicleFormDialog row={row} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
