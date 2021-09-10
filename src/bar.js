import React, { Component } from "react";
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
    marginLeft: "-7px",
    marginTop: "2px",
    fontSize: "21px",
  },
  toolbar: {
    minHeight: "55px",
  },
});

class Bar extends Component {
  render() {
    const state = {
      left: false,
    };

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={this.props.click}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}></Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Bar);
