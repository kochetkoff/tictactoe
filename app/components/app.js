import React, { Component } from "react";
import Game from "./game.js";
import Setup from "./setup.js";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phase: "setup",
		};
	}

	render(){
		// 3 game phases: setup, game, result
		const phase = this.state.phase;
		return (
			<div>
				<Game phase={phase} />
				{phase === "setup" && <Setup />}
			</div>
		);
	}
}

export default App;