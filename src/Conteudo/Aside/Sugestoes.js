export default function Sugestoes() {
	const sugestoes = [
		{
			nome: "bad.vibes.memes",
			img: "assets/img/bad.vibes.memes.svg",
			status: "Segue você",
		},
		{
			nome: "chibirdart",
			img: "assets/img/chibirdart.svg",
			status: "Segue você",
		},
		{
			nome: "razoesparaacreditar",
			img: "assets/img/razoesparaacreditar.svg",
			status: "Novo no Instagram",
		},
		{
			nome: "adorable_animals",
			img: "assets/img/adorable_animals.svg",
			status: "Segue você",
		},
		{
			nome: "smallcutecats",
			img: "assets/img/smallcutecats.svg",
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
	const { nome, status, img } = props;

	return (
		<div class="sugestao">
			<div class="usuario">
				<img src={img} />
				<div class="texto">
					<div class="nome">{nome}</div>
					<div class="razao">{status}</div>
				</div>
			</div>

			<div class="seguir">Seguir</div>
		</div>
	);
}
