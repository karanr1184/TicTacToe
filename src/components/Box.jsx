import React, { useState, useEffect } from "react";
import "./Box.css";
import crossImg from "../assets/images/cross1.jpg";
import zeroImg from "../assets/images/zero.jpg";
import "./Img.css";

var turn = 0;
var boxes = Array(9).fill(-1);
var lock = false;
var count = 0;

function handleClick(e, id) {
	if (!lock) {
        
		if (boxes[id] === -1) {
            document.getElementById("title").innerText = "TIC TAC TOE Game";
			boxes[id] = turn;
			if (turn === 1)
				e.target.innerHTML = `<img id="crossImg" src='${crossImg}'/>`;
			else 
                e.target.innerHTML = `<img id="zeroImg" src='${zeroImg}'/>`;

            count+=1;
            console.log(count);

			if (
				(boxes[0] !== -1 &&
					((boxes[0] === boxes[1] && boxes[1] === boxes[2]) ||
						(boxes[0] === boxes[4] && boxes[4] === boxes[8]) ||
						(boxes[0] === boxes[3] && boxes[3] === boxes[6]))) ||
				(boxes[4] !== -1 && ((boxes[4] === boxes[3] && boxes[4] === boxes[5]) || (boxes[4] === boxes[1] && boxes[4] === boxes[7]))) ||
				(boxes[8] !== -1 && ((boxes[8] === boxes[5] && boxes[5] === boxes[2]) || (boxes[8] === boxes[7] && boxes[7] === boxes[6]))) ||
				(boxes[6] !== -1 && (boxes[6] === boxes[4] && boxes[4] === boxes[2]))
			) {
				lock = true;
				document.getElementById("title").innerText = (turn) ? "X wins!" : "0 wins!";
                boxes = Array(9).fill(-1);
			} else {
				turn = 1 - turn;
			}

            if(!lock && count === 9){
                document.getElementById("title").innerText = "Tie! Please restart the game.";
                boxes = Array(9).fill(-1);
            }
		}
        else{
            document.getElementById("title").innerText = "Please choose different position";
        }
	} else {
		document.getElementById("title").innerText =
			turn + " wins. Please restart game.";
	}
    console.log(boxes);
}

function Box(props) {
	return <div id="box" onClick={(e) => handleClick(e, props.id)}></div>;
}

export default Box;
