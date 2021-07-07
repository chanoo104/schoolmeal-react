import React from "react";

function Meal(meal) {
    console.log(meal)
    return ( // TODO : 배열 렌더링
        <div>
            <b>{meal[1]}</b>
        </div>
    )
}


export default Meal;