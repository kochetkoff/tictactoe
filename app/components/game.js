import React, { Component } from "react";
import Title from "./title.js";
import Statusbar from "./statusbar.js";
import Board from "./board.js";

function Game(props) {
	const phase = props.phase;
	let gameClass = "";
	if (phase == "setup") {
		gameClass = "blur";
	}
	return (
		<div className={gameClass} >
			<Title onRefreshClick={props.onRefreshClick} />
			<Board cells={props.cells} onCellClick={props.onCellClick} />
			<Statusbar score={props.score} />
		</div>
	);
}

export default Game;