import React from "react";
import App from "./App";

function Meal() {
    const meal = App.meal
    const list = meal.map(
        info => (<Meal key={meal.id} value={meal}/>)
    );
    return (
        <div>
            <b>meal</b>
        </div>
    )
}

export default Meal;