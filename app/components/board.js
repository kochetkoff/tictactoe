import React, { Component } from "react";

function Board(props) {
	return (
		<div id="board">
			<table className="board center">
				<tbody>
					<tr>
						<td>X</td>
						<td>O</td>
						<td>O</td>
					</tr>
					<tr>
						<td>X</td>
						<td>O</td>
						<td>O</td>
					</tr>
					<tr>
						<td>X</td>
						<td>O</td>
						<td>O</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Board;