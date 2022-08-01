import "./App.css";
import Candidato1Counter from "./component/candidatos/candidato1.jsx";
import Candidato2Counter from "./component/candidatos/candidato2.jsx";
import Candidato3Counter from "./component/candidatos/candidato3.jsx";
import Candidato4Counter from "./component/candidatos/candidato4.jsx";
import TotalVotos from "./component/totalVotos";
import VotosIndividuales from "./component/votosIndividuales/";

function App() {
	return (
		<div className="App">
			<Candidato1Counter />
			<Candidato2Counter />
			<Candidato3Counter />
			<Candidato4Counter />
			<TotalVotos />
			<VotosIndividuales />
		</div>
	);
}

export default App;
