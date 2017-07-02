import React, { Component } from "react";
import Title from "./title.js";
import Statusbar from "./statusbar.js";
import Board from "./board.js";

function Game(props) {
	return (
		<div id="game" className="">
			<Title />
			<Board />
			<Statusbar />
		</div>
	);
}

export default Game;