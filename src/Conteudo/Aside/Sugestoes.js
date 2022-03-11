export default function Sugestoes() {
	const sugestoes = [
		{
			nome: "bad.vibes.memes",
			img: "assets/img/bad.vibes.memes.svg",
			status: "Segue você",
		},
		{
			nome: "bad.vibes.memes",
			img: "assets/img/bad.vibes.memes.svg",
			status: "Segue você",
		},
		{
			nome: "bad.vibes.memes",
			img: "assets/img/bad.vibes.memes.svg",
			status: "Segue você",
		},
		{
			nome: "bad.vibes.memes",
			img: "assets/img/bad.vibes.memes.svg",
			status: "Segue você",
		},
		{
			nome: "bad.vibes.memes",
			img: "assets/img/bad.vibes.memes.svg",
			status: "Segue você",
		},
	];
	return (
		<div className="sugestoes">
			<div class="titulo">
				Sugestões para você
				<div>Ver tudo</div>
			</div>
			{sugestoes.map((sugestao) => (
				<Sugestao
					nome={sugestao.nome}
					status={sugestao.status}
					img={sugestao.img}
				/>
			))}
		</div>
	);
}

function Sugestao(props) {
	return (
		<div class="sugestao">
			<div class="usuario">
				<img src={props.img} />
				<div class="texto">
					<div class="nome">{props.nome}</div>
					<div class="razao">{props.status}</div>
				</div>
			</div>

			<div class="seguir">Seguir</div>
		</div>
	);
}
