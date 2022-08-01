import React from "react";
import { useAppContext } from "../../store";

function TotalVotos() {
	const { state } = useAppContext();
	return (
		<div>
			<h1>Total Votes: {state.total}</h1>
		</div>
	);
}

export default TotalVotos;
