//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

library.add(faClock);

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Clock from "./component/clock.js";

//render your react application
// let time = 1;

// const myInterval = setInterval(() => {
// 	if (time === 999999) {
// 		clearInterval(myInterval);
// 	}
// 	ReactDOM.render(<Home />, document.querySelector("#app"));
// 	time++, 1000;
// });

ReactDOM.render(<Home />, document.querySelector("#app"));
