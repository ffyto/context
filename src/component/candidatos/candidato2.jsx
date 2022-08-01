import React from "react";
import { useAppContext } from "../../store";

function Candidato2Counter() {
	const { state, dispatch } = useAppContext();
	const action = {
		type: "CANDIDATE_2",
	};

	const handleClick = () => {
		dispatch(action);
	};

	return (
		<div>
			<button onClick={handleClick}>Candidate 2</button>
			<p>Number of Votes: {state.candidate2}</p>
		</div>
	);
}

export default Candidato2Counter;
