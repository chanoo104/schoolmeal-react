import React from "react";
import { Schoolmeal } from "./schoolmeal";
import Bar from "./bar";
import drawer from "./drawer";

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

  toggleDrawer = () => {
    this.setState((pstate) => ({ drawerOpen: !pstate.drawerOpen }));
  };
  render() {
    return (
      <div>
        <Bar data={"급식"} click={console.log("asdf")} />
        <Schoolmeal />
        <drawer
          setDrawerOpen={this.setDrawerOpen}
          open={this.state.drawerOpen}
        />
      </div>
    );
  }
}

export default App;
