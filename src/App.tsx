import React from "react";
import Home from "./home";
import { Schoolmeal } from "./schoolmeal";
import MenuBar from "./bar";
import Selector from "./selector";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./notfound";

const App = (props) => {
    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: false,
        };
    }
    const setDrawerOpen = (isDrawerOpen) => {
        this.setState({
            drawerOpen: isDrawerOpen,
        });
    };
    const closeDrawer = () => {
        this.setState({
            drawerOpen: false,
        });
    };

    const toggleDrawer = () => {
        this.setState((pstate) => ({ drawerOpen: !pstate.drawerOpen }));
    };
        return (
            <BrowserRouter>
                <header>
                    <MenuBar setDrawerOpen={setDrawerOpen} />
                    <Selector
                        setDrawerOpen={setDrawerOpen}
                        open={state.drawerOpen}
                        close={closeDrawer}
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

export default App;
