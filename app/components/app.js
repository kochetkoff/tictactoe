import React, { Component } from "react";

class App extends Component {
	render(){
		return (
			<div>
				<div id="game" className="">
				  <h1 className="text-center">Tic Tac Toe <span className="refresh">&#8635;</span></h1>
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
				  <div id="statusbar" className="text-center">
				    <h4 className="mb-0">Score:</h4>
				    <div id="score-wrapper" className="center">
				      <div className="fl score">
				        <span>3</span><br/><span><small>You</small></span>
				      </div>
				      <div className="fl">
				        <span>|</span>
				      </div> 
				      <div className="fl score">
				        <span>0</span><br/><span><small>Computer</small></span>
				      </div>
				    </div>
				  </div>
				</div>

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
			</div>
		);
	}
}

export default App;