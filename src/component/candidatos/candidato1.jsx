import React from "react";
import { useAppContext } from "../../store";

function Candidato1Counter() {
	const { state, dispatch } = useAppContext();

	return (
		<div>
			<button onClick={() => dispatch({ type: "CANDIDATE_1" })}>
				Candidate 1
			</button>
			<p>Number of Votes: {state.candidate1}</p>
		</div>
	);
}

export default Candidato1Counter;
