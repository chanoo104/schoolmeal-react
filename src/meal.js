import React from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    card: {
        marginTop: 20,
        backgroundColor: "#fdfbff"
    }
}));


export const Meal = ({ data }) => {
    const classes = useStyles();
    const mealList = data.map(
        (meal, index) => (<li key={index}>{meal}</li>)
    );

    return (
        <Card className={classes.card}>
            <CardContent>
                {mealList}
            </CardContent>
        </Card>
    );
}

export default Meal;