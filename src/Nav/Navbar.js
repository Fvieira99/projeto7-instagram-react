import LogoDesktop from "./Logo/LogoDesktop";
import LogoMobile from "./Logo/LogoMobile";
import InstagramMobile from "./Logo/InstagramMobile";
import Pesquisa from "./Pesquisa/Pesquisa";
import IconesDesktop from "./IconesNav/IconesDesktop";
import IconesMobile from "./IconesNav/IconesMobile";

export default function Navbar() {
	return (
		<div class="navbar">
			<div class="container">
				<LogoDesktop />
				<LogoMobile />
				<InstagramMobile />
				<Pesquisa />
				<IconesDesktop />
				<IconesMobile />
			</div>
		</div>
	);
}
