import React from "react";
import Box from "./Box";
import "./Playarea.css";

function Playarea(props) {
	var boxes = Array(9).fill(-1);

	return (
		<div id="playarea">
			{boxes.map((_, index) => (
				<Box key={index} id={index} /> 
			))}
		</div>
	);
}

export default Playarea;
