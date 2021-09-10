import React from "react";
import { SwipeableDrawer, AppBar, MenuItem } from "@material-ui/core";

class drawer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SwipeableDrawer
          width={200}
          openSecondary={true}
          open={this.props.open}
        >
          <AppBar title="Tasks" />
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

export default drawer;
