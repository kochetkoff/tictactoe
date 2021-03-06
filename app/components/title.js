import React, { Component } from "react";

function Title(props) {
	return (
		<h1 className="text-center">
			Tic Tac Toe &nbsp; 
			<span className="refresh" onClick={props.onRefreshClick} >&#8635;</span>
		</h1>
	);
}

export default Title;