export default function UsuarioAside(props) {
	const { usuario, nome, img } = props;

	return (
		<div class="usuario">
			<img src={img} />
			<div class="texto">
				<strong>{usuario}</strong>
				{nome}
			</div>
		</div>
	);
}
