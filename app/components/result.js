import React, { Component } from "react";

function Result(props) {
	return (
		<div className="modal">
			<div className="center text-center">
				<h2 className="mb-2 result-msg">{props.msg}</h2>
			</div>
		</div>
	);
}

export default Result;