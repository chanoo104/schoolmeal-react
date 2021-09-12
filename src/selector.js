import React from "react";
import { SwipeableDrawer, MenuItem, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  root: {

  },
  menu: {
    textDecoration: "none",
    color: "black",
  }
});

class Selector extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <SwipeableDrawer
          open={this.props.open}
          onClose={this.props.close}
        >
          <Link to={"/"} className={classes.menu}>
            <MenuItem onClick={() => this.props.setDrawerOpen(false)} >
              홈
            </MenuItem>
          </Link>
          <Link to="/meal" className={classes.menu}>
            <MenuItem onClick={() => this.props.setDrawerOpen(false)} className={classes.menu}>
              급식
            </MenuItem>
          </Link>

        </SwipeableDrawer>
      </div>
    );
  }
}

export default withStyles(styles)(Selector);
