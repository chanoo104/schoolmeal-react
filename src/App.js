import React from "react";
import Home from "./home"
import { Schoolmeal } from "./schoolmeal";
import MenuBar from "./bar";
import Selector from "./selector";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from "./notfound";


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
      <BrowserRouter>
        <header>
          <MenuBar click={this.setDrawerOpen} />
          <Selector
            setDrawerOpen={this.setDrawerOpen}
            open={this.state.drawerOpen}
            close={this.closeDrawer}
          />
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/meal">
            <Schoolmeal />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
