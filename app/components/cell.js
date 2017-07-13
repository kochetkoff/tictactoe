import React, { Component } from "react";

function Cell(props) {
	const tdStyle = props.value === "x" ? "text-blue" : "";
	return (
		<td onClick={props.onClick} className={tdStyle} >
			{props.value}
		</td>
	);
}

export default Cell;