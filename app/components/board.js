import React, { Component } from "react";
import Cell from "./cell.js"

class Board extends Component {

	renderCell(i) {
	    return (
			<Cell
				value={this.props.cells[i]}
				onClick={() => this.props.onCellClick(i)}
			/>
	    );
	};

	render(){
		return (
			<div id="board">
				<table className="board center">
					<tbody>
						<tr>
							{this.renderCell(0)}
							{this.renderCell(1)}
							{this.renderCell(2)}
						</tr>
						<tr>
							{this.renderCell(3)}
							{this.renderCell(4)}
							{this.renderCell(5)}
						</tr>
						<tr>
							{this.renderCell(6)}
							{this.renderCell(7)}
							{this.renderCell(8)}
						</tr>
					</tbody>
				</table>
			</div>
		);
	}

}

export default Board;