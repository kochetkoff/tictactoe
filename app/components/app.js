import React, { Component } from "react";
import Game from "./game.js";
import Setup from "./setup.js";

class App extends Component {
	render(){
		return (
			<div>
				<Game />
				<Setup />
			</div>
		);
	}
}

export default App;