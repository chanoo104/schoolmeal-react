import React from "react";
import { AppBar, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

export const Bar = ({ data }) => {
    const [state, setState] = React.useState({
        left: false
    });
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            marginLeft: '-7px',
            marginTop: '2px',
            fontSize: '21px'
        },
        toolbar: {
            minHeight: '55px',
        }
    }));
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {data}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Bar;