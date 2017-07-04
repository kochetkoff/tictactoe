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

	render(){
		const phase = this.state.phase;
		return (
			<div>
				<Game phase={phase} 
					onRefreshClick={(e) => this.handleRefreshClick(e)}
					score={this.state.score}
				/>

				{phase === "setup" && <Setup onClick={(e) => this.handleSetupClick(e)} />}
			</div>
		);
	}
}

export default App;