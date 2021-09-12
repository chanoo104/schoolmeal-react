import React from "react";
import { Container } from "@material-ui/core";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        console.log(this.props)
        return (
            <Container maxWidth="sm">
                <h1>
                    Main
                </h1>
            </Container>

        )
    }
}

export default Home;