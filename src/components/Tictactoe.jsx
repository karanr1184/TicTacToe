import React, { useState } from "react";
import Playarea from "./Playarea";
import Reset from "./Reset";
import "./Tictactoe.css";

function Tictactoe() {


	return (
		<div id="game">
			<h1 id="title">TIC TAC TOE Game</h1>
            <Playarea />
            <Reset />
		</div>
	);
}

export default Tictactoe;
