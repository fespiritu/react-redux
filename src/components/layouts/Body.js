import React, { Component } from 'react';
import {Grid,Paper} from "@material-ui/core";
import LeftPane from "../Exercises/LeftPane";

const styles = {
    myPadding: {
        padding: 20
    }
}

export default props =>
<Grid container sm={12}>
    <Grid item sm={4}>
        <LeftPane styles={styles}/>
    </Grid>

    <Grid item sm={4}>
    <Paper style={styles.myPadding}>
            Right pane
        </Paper>
    </Grid>
</Grid>