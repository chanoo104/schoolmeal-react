import React from "react";
import { Schoolmeal } from "./schoolmeal";
import MenuBar from "./bar";
import Selector from "./selector";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false,
    };
  }
  setDrawerOpen = (isDrawerOpen) => {
    this.setState({
      drawerOpen: isDrawerOpen,
    });
  };
  closeDrawer = () => {
    this.setState({
      drawerOpen: false,
    });
  };

  toggleDrawer = () => {
    this.setState((pstate) => ({ drawerOpen: !pstate.drawerOpen }));
  };

  render() {
    return (
      <div>
        <MenuBar data={"급식"} click={this.setDrawerOpen} />
        <Selector
          setDrawerOpen={this.setDrawerOpen}
          open={this.state.drawerOpen}
          close={this.closeDrawer}
        />
        <Schoolmeal />
      </div>
    );
  }
}

export default App;
