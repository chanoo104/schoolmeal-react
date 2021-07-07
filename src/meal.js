import React from "react";

function Meal(meal) {
    console.log(meal)
    return (
        <div>
            <b>{meal[1]}</b> // TODO: 배열 렌더링
        </div>
    )
}


export default Meal;