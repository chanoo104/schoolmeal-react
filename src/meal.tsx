import React from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20,
        backgroundColor: theme.palette.background.paper,
        fontWeight: "300"
    },
}));


export const Meal = ({ data }) => {
    const classes = useStyles();
    const mealList = data.map(
        (meal, index) => (<li key={index}>{meal}</li>)
    );

    return (
        <Card className={classes.root}>
            <CardContent >
                {mealList}
            </CardContent>
        </Card>
    );
}

export default Meal;