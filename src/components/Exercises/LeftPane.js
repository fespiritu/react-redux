import React, { Component } from "react";
import { Paper, TextField, Button } from "@material-ui/core";

class LeftPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bemsId: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      bemsId: e.target.value
    });
  }

  handleClick = e => {
    alert("Submitted was clicked!");
  };
  render() {
    const { styles } = this.props;

    return (
      <Paper style={styles.myPadding}>
        <TextField
          id="bemsId"
          name="bemsId"
          label="BEMSID"
          value={this.state.bemsId}
          onChange={this.onChange}
          InputLabelProps={{
            shrink: true
          }}
        />
        <br />
        <br />
        <Button
          onClick={this.handleClick()}
          variant="contained"
          color="primary"
          className={styles.button}
        >
          Submit
        </Button>
      </Paper>
    );
  }
}

export default LeftPanel;
