import React from "react";
import { SwipeableDrawer, MenuItem } from "@material-ui/core";

class Selector extends React.Component {
  render() {
    return (
      <div>
        <SwipeableDrawer
          open={this.props.open}
          onClose={this.props.close}
          docked={true}
        >
          <MenuItem onClick={() => this.props.setDrawerOpen(false)}>
            Menu Item
          </MenuItem>
          <MenuItem onClick={() => this.props.setDrawerOpen(false)}>
            Menu Item 2
          </MenuItem>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default Selector;
