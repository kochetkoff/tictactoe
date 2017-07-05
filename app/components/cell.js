import React, { Component } from "react";

function Cell(props) {
	return (
		<td onClick={props.onClick} >
			{props.value}
		</td>
	);
}

export default Cell;