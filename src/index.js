import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TaskList from "./TaskList";

var destination  = document.querySelector("#container");

ReactDOM.render(
<div>
    <TaskList/>
</div>,
destination
);