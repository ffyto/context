import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();
const initialState = {
	candidate1: 0,
	candidate2: 0,
	candidate3: 0,
	candidate4: 0,
	total: 0,
};

function reducer(state, action) {
	const { candidate1, candidate2, candidate3, candidate4, total } = state;
	switch (action.type) {
		case "CANDIDATE_1":
			return {
				...state,
				candidate1: candidate1 + 1,
				total: total + 1,
			};

		case "CANDIDATE_2":
			return {
				...state,
				candidate2: candidate2 + 1,
				total: total + 1,
			};

		case "CANDIDATE_3":
			return {
				...state,
				candidate3: candidate3 + 1,
				total: total + 1,
			};

		case "CANDIDATE_4":
			return {
				...state,
				candidate4: candidate4 + 1,
				total: total + 1,
			};

		default:
			return state;
	}
}
export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const store = {
		state,
		dispatch,
	};

	return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
	const context = useContext(AppContext);

	if (context === undefined) {
		throw new Error("useAppContext must be used within a AppProvider");
	}

	return context;
};

export default AppContext;
