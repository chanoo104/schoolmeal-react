import React from "react";
import { Container, withStyles, CssBaseline } from "@material-ui/core";

const styles = (theme) => ({
    root: {
        background: theme.palette.background.default,
        height: "100vh",
    },
})
class NotFound extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline/>
                <Container maxWidth="sm">
                    <h1>404 Not Found</h1>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(NotFound);
