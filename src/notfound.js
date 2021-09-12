import React from "react";
import { Container } from "@material-ui/core";

class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container maxWidth="sm">
                <h1>
                    404 Not Found
                </h1>
            </Container>
        )
    }
}

export default NotFound;