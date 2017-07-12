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
			computer: "",
			score: {
				player: 0,
				computer: 0
			},
			cells: Array(9).fill(null),
			isPlayerNext: false,
		};
	}

	handleSetupClick(e) {
		e.preventDefault();
		let p = e.target.closest('button').value;
		let c = p === "x" ? "o" : "x";
		this.setState({
			phase: "game",
			player: p,
			computer: c,
			isPlayerNext: p === "x",
		});
	}

	handleRefreshClick(e) {
		e.preventDefault();
		this.setState({
			phase: "setup",
			player: "",
			computer: "",
			score: {
				player: 0,
				computer: 0
			},
			cells: Array(9).fill(null),
			isPlayerNext: false,
		});
	}

	handleCellClick(i) {
		// to do
		const cells = this.state.cells.slice();
		if (!this.state.isPlayerNext || cells[i]) return;
		cells[i] = this.state.player;
		this.setState({
			cells: cells,
			isPlayerNext: !this.state.isPlayerNext,
		});
	}

	checkIfWin(cells) {
		const winLines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < winLines.length; i++) {
			const [a, b, c] = winLines[i];
			if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
				return true;
			}
		}
		return false;
	}

	// check if game can be won in one move
	// and return winning index
	checkOneMoveWinInd(cells, sign) {
		let ind = null;
		cells.some((cell, i) => {
			if(cell) return false;
			let cellsCopy = cells.slice();
			cellsCopy[i] = sign;
			if (this.checkIfWin(cellsCopy)) {
				ind = i;
				return true;
			}
			return false;
		});
		return ind;
	}

	randInd (arr) {
	    var emptyCells = [];
	    arr.forEach(function(el, i){
	        if (el === null) emptyCells.push(i); 
	    });
	    return emptyCells[Math.floor(Math.random()*emptyCells.length)];
	}

	showMessage(msg) {
		alert(msg);
	}

	computerMove() {
		//to do
		let cells = this.state.cells.slice();
		const c = this.state.computer;
		const p = this.state.player;
		let tick = null;
		tick = this.checkOneMoveWinInd(cells, c);
		if (tick === null) {
			tick = this.checkOneMoveWinInd(cells, p);
		}
		if (tick === null) {
			tick = this.randInd(cells);
		}
		cells[tick] = c;
		this.setState({
			cells: cells,
			isPlayerNext: !this.state.isPlayerNext,
		});
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

	componentDidUpdate(prevProps, prevState) {
		if ((prevState.isPlayerNext || prevState.phase === "setup") && !this.state.isPlayerNext) {
			this.computerMove();
		};
	}
}

export default App;