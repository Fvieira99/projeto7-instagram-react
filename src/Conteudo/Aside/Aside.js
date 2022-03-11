import UsuarioAside from "./UsuarioAside";
import Sugestoes from "./Sugestoes";

export default function Aside() {
	return (
		<div className="sidebar">
			<UsuarioAside
				usuario="catanacomics"
				nome="Catana"
				img="assets/img/catanacomics.svg"
			/>
			<Sugestoes />
			<div class="links">
				Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
				Localizações • Contas mais relevantes • Hashtags • Idioma
			</div>

			<div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
		</div>
	);
}
