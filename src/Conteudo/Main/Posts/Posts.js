import Post from "./Post";

export default function Posts() {
	const posts = [
		{
			usuario: "meowed",
			avatar: "assets/img/meowed.svg",
			conteudo: "assets/img/gato-telefone.svg",
			avatarCurtida: "assets/img/respondeai.svg",
			usuarioCurtida: "respondeai",
			qtdCurtidas: "outras 101.523 pessoas",
		},
		{
			usuario: "barked",
			avatar: "assets/img/barked.svg",
			conteudo: "assets/img/dog.svg",
			avatarCurtida: "assets/img/adorable_animals	.svg",
			usuarioCurtida: "adorable_animals",
			qtdCurtidas: "outras 99.159",
		},
	];
	return (
		<div className="posts">
			{posts.map((post) => (
				<Post
					usuario={post.usuario}
					avatar={post.avatar}
					conteudo={post.conteudo}
					avatarCurtida={post.avatarCurtida}
					usuarioCurtida={post.usuarioCurtida}
					qtdCurtidas={post.qtdCurtidas}
				/>
			))}
		</div>
	);
}
