import React from "react";
import { useAppContext } from "../../store";

function Candidato3Counter() {
	const { state, dispatch } = useAppContext();
	const action = {
		type: "CANDIDATE_3",
	};

	const handleClick = () => {
		dispatch(action);
	};

	return (
		<div>
			<button onClick={handleClick}>Candidate 3</button>
			<p>Number of Votes: {state.candidate3}</p>
		</div>
	);
}

export default Candidato3Counter;
