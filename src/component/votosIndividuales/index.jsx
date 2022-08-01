import React from "react";
import { useAppContext } from "../../store";

function VotosIndividuales() {
	const { state } = useAppContext();
	return (
		<div>
			<h1>Individual Votes</h1>
			<p>Candidate 1: {state.candidate1}</p>
			<p>Candidate 2: {state.candidate2}</p>
			<p>Candidate 3: {state.candidate3}</p>
			<p>Candidate 4: {state.candidate4}</p>
		</div>
	);
}

export default VotosIndividuales;
