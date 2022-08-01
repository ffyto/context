import React from "react";
import { useAppContext } from "../../store";

function Candidato4Counter() {
	const { state, dispatch } = useAppContext();
	const action = {
		type: "CANDIDATE_4",
	};

	const handleClick = () => {
		dispatch(action);
	};

	return (
		<div>
			<button onClick={handleClick}>Candidate 4</button>
			<p>Number of Votes: {state.candidate4}</p>
		</div>
	);
}

export default Candidato4Counter;
