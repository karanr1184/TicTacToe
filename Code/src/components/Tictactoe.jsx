import React, { useState } from "react";
import Playarea from "./Playarea";
import Reset from "./Reset";
import "./Tictactoe.css";

function Tictactoe() {
	return (
		<div id="game">
			<h1 id="title"><i>Let's</i> Tic Tac Toe (Player 1's Turn)</h1>
            <Playarea />
            <Reset />
		</div>
	);
}

export default Tictactoe;
