import React from "react";
import { Container, withStyles, CssBaseline, Button } from "@material-ui/core";
import github from "./icons/github.svg";
import boj from "./icons/boj.png";
const styles = (theme:any) => ({
    root: {
        background: theme.palette.background.default,
        height: "100vh",
    },
    button: {
        width: "120px",
        height: "40px",
        marginBottom: "15px",
        textAlign: "left",
    },
});

class Home extends React.Component {
    handleclick = (e:string) => {
        switch (e) {
            case "github":
                window.location.href = "https://github.com/effx13";
                break;
            case "boj":
                window.location.href = "https://solved.ac/profile/fakehg13";
                break;
            default:
                alert("에러");
        }
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <Container maxWidth="sm">
                    <br />
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="default"
                        startIcon={
                            <img src={github} alt="" className={classes.github} />
                        }
                        onClick={() => {
                            this.handleclick("github");
                        }}
                    >
                        GitHub
                    </Button>
                    <br />
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="default"
                        startIcon={<img src={boj} alt="" className={classes.boj} />}
                        onClick={() => {
                            this.handleclick("boj");
                        }}
                    >
                        BOJ
                    </Button>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
