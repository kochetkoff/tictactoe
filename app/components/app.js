import React, { Component } from "react";
import Game from "./game.js";
import Setup from "./setup.js";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// 3 game phases: setup, game, result
			phase: "setup",
			// which "x" or "o" player plays for
			player: "",
			score: {
				player: 0,
				computer: 0
			},
			cells: Array(9).fill(null),
		};
	}

	handleSetupClick(e) {
		e.preventDefault();
		let v = e.target.closest('button').value;
		this.setState({phase: "game", player: v});
	}

	handleRefreshClick(e) {
		e.preventDefault();
		this.setState({phase: "setup", player: ""});
	}

	handleCellClick(e) {
		e.preventDefault();
		// to do
		console.log("cell clicked", e.target);

	}

	render(){
		const phase = this.state.phase;
		return (
			<div>
				<Game phase={phase} 
					onRefreshClick={(e) => this.handleRefreshClick(e)}
					onCellClick={(e) => this.handleCellClick(e)}
					score={this.state.score}
					cells={this.state.cells}
				/>

				{phase === "setup" && <Setup onClick={(e) => this.handleSetupClick(e)} />}
			</div>
		);
	}
}

export default App;