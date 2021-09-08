import React from 'react';
import { Schoolmeal } from "./schoolmeal";
import { Bar } from "./bar";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: false
        }
    }
    render() {
        return (
            <div>
                <Bar data={"급식"} />
                <Schoolmeal />
            </div>
        )
    }
}

export default App;