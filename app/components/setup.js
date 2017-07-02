import React, { Component } from "react";

function Setup(props) {
	return (
		<div className="modal">
			<div id="modal-setup" className="center text-center">
				<h2 className="mb-2">Choose:</h2>
				<div>
				  <button type="button" value="x" className="btn-setup"><span id="modal-setup-x" className="text-blue">X</span></button> 
				  or 
				  <button type="button" value="o" className="btn-setup"><span id="modal-setup-o" className="text-red">O</span></button>
				</div>
			</div>
		</div>
	);
}

export default Setup;