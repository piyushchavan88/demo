import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import history from "../HistoryContainer/History";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        
      
        centered
      >
        <Tab label="Vehicle" onClick={() => history.push("/vehicle")} />
        <Tab label="Destination" onClick={() =>history.push("/tutorial")}/>
        <Tab label="Booking" onClick={() => history.push("/booking")} />
      </Tabs>
    </Paper>
  );
}
