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
		<div id="game" className={gameClass} >
			<Title onRefreshClick={props.onRefreshClick} />
			<Board />
			<Statusbar />
		</div>
	);
}

export default Game;