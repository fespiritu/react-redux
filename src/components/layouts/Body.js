import React from "react";
import { Grid, Paper } from "@material-ui/core";
import LeftPane from "../Exercises/LeftPane";
//import { withStyles } from "@material-ui/core/styles";
// import PropTypes from "prop-types";
// import Button from "@material-ui/core/Button";

const classes = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

const styles = {
  myPadding: {
    padding: 20,
    marginTop: 50,
    marginLeft: 50
  }
};

export default props => (
  <Grid container sm={12}>
    <Grid item sm={4}>
      <LeftPane styles={styles} classes={classes} />
    </Grid>

    <Grid item sm={4}>
      <Paper style={styles.myPadding}>Right pane</Paper>
    </Grid>
  </Grid>
);
