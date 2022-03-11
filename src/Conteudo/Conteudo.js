import Posts from "./Main/Posts/Posts";
import Stories from "./Main/Stories/Stories";
import Aside from "./Aside/Aside";

export default function Conteudo() {
	return (
		<div class="corpo">
			<div class="esquerda">
				<Stories />
				<Posts />
			</div>
			<Aside />
		</div>
	);
}
