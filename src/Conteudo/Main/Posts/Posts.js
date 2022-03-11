import Post from "./Post/Post";

export default function Posts() {
	const posts = [
		{
			usuario: "meowed",
			imgUsuario: "assets/img/meowed.svg",
			conteudo: "assets/img/gato-telefone.svg",
			curtidas: "assets/img/respondeai.svg",
			perfilCurtida: "respondeai",
			qtdCurtidas: "outras 101.523 pessoas",
		},
		{
			usuario: "barked",
			imgUsuario: "assets/img/barked.svg",
			conteudo: "assets/img/dog.svg",
			curtidas: "assets/img/adorable_animals	.svg",
			perfilCurtida: "adorable_animals",
			qtdCurtidas: "outras 99.159",
		},
	];
	return (
		<div className="posts">
			{posts.map((post) => (
				<Post
					usuario={post.usuario}
					imgUsuario={post.imgUsuario}
					conteudo={post.conteudo}
					curtidas={post.curtidas}
					perfilCurtida={post.perfilCurtida}
					qtdCurtidas={post.qtdCurtidas}
				/>
			))}
		</div>
	);
}
