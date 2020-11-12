import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

export default function TutorialFormDialog({ row }) {
    const [open, setOpen] = React.useState(false);
    const [id, set_id] = React.useState("");
    const [dest_name, set_dest_name] = React.useState("");
  const [status, set_status] = React.useState("");
  const [added_by, set_added_by] = React.useState("");
  const [add_time, set_add_time] = React.useState("");

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const handleCloseAndSubmit = () => {
      
    const apiUrl = "http://localhost:8000/api/bookings/";
    axios
      .post(apiUrl, {
        id:id,
          dest_name:dest_name,
          status:status,
          added_by:added_by,
          add_time:add_time
      })
            .then((repos) => { });
        const apiUrl2 = "http://localhost:8000/api/tutorials/" + row.id;
         axios
      .delete(apiUrl2, { })
             .then((repos) => {
                 console.log("deleted this one"+row.id);
             });

    setOpen(false);
    window.location.reload();
  };

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={handleClickOpen}
      >
        Book
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
       
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            value={row.id}
            disabled={true}         
            label=" BOOKED ID"
            type="text"
            fullWidth
          />

            <TextField
            autoFocus
            margin="dense"
            id="name"
            value={dest_name}
            onChange={(event) => {
              set_dest_name(event.target.value);
            }}
            label="Destination Name"
            type="text"
            fullWidth
          />


            <TextField
            autoFocus
            margin="dense"
            id="name"
            value={status}
            onChange={(event) => {
              set_status(event.target.value);
            }}
            label="vehicle status"
            type="text"
            fullWidth
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={added_by}
            onChange={(event) => {
              set_added_by(event.target.value);
            }}
            label="vehicle added_by"
            type="text"
            fullWidth
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={add_time}
            onChange={(event) => {
              set_add_time(event.target.value);
            }}
            label="vehicle Add time"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseAndSubmit} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
