import React, { useState } from "react";
import Clock from "./clock.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex vh-100 vw-100 justify-content-center align-items-center">
			<Clock />
		</div>
	);
};

export default Home;
