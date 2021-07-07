import React from "react";
import ReactDOM from "react-dom";
import Form from "./App"
import axios from "axios";
import Meal from "./meal";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const handleCreate = (data) => {
    getmeal(data)
}

function getmeal(data) {
    axios.get("http://localhost:8080/meal", {
        params: {
            schulCode: data.schulCode,
            schulCrseScCode: data.schulCrseScCode,
            schulKndScCode: data.schulKndScCode,
            schMmealScCode: data.schMmealScCode,
            schYmd: data.schYmd
        }
    }).then(function (response) {
        alert(response.data)
        Meal(response.data)
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function () {
        // 항상 실행
    });
}

ReactDOM.render(
    <Form onCreate={handleCreate}/>,
    document.getElementById("form")
);
ReactDOM.render(
    <Meal />,
    document.getElementById("meal")
);
