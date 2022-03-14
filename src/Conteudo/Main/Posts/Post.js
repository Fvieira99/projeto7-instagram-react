export default function Post(props) {
	const {
		usuario,
		avatar,
		conteudo,
		avatarCurtida,
		usuarioCurtida,
		qtdCurtidas,
	} = props;

	return (
		<div class="post">
			<div class="topo">
				<div class="usuario">
					<img src={avatar} />
					{usuario}
				</div>
				<div class="acoes">
					<ion-icon name="ellipsis-horizontal"></ion-icon>
				</div>
			</div>

			<div class="conteudo">
				<img src={conteudo} />
			</div>

			<div class="fundo">
				<div class="acoes">
					<div>
						<ion-icon name="heart-outline"></ion-icon>
						<ion-icon name="chatbubble-outline"></ion-icon>
						<ion-icon name="paper-plane-outline"></ion-icon>
					</div>
					<div>
						<ion-icon name="bookmark-outline"></ion-icon>
					</div>
				</div>

				<div class="curtidas">
					<img src={avatarCurtida} />
					<div class="texto">
						Curtido por <strong>{usuarioCurtida}</strong> e{" "}
						<strong>{qtdCurtidas}</strong>
					</div>
				</div>
			</div>
		</div>
	);
}
