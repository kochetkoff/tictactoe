import React, { Component } from "react";

function Statusbar(props) {
	return (
		<div id="statusbar" className="text-center">
			<h4 className="mb-0">Score:</h4>
			<div id="score-wrapper" className="center">
			  <div className="fl score">
			    <span>{props.score.player}</span><br/><span><small>You</small></span>
			  </div>
			  <div className="fl">
			    <span>|</span>
			  </div> 
			  <div className="fl score">
			    <span>{props.score.computer}</span><br/><span><small>Computer</small></span>
			  </div>
			</div>
		</div>
	);
}

export default Statusbar;