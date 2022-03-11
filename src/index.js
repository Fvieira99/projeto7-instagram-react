import reactDom from "react-dom";
import Navbar from "./Nav/Navbar";
import Conteudo from "./Conteudo/Conteudo";
import FooterMobile from "./FooterMobile/FooterMobile";

function App() {
	return (
		<div>
			<Navbar />
			<Conteudo />
			<FooterMobile />
		</div>
	);
}

const divRoot = document.querySelector(".root");

reactDom.render(<App />, divRoot);
