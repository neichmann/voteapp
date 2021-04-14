import React from "react";
import ReactDOM from "react-dom";
import ChoiceBar from "./components/ChoiceBar";
import "./index.css";

ReactDOM.render(
    <ChoiceBar title="JavaScript" percent={37}/>,
    document.getElementById("root")
);