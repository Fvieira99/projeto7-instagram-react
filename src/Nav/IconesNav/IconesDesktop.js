export default function IconesDesktop() {
	const icones = [
		"paper-plane-outline",
		"compass-outline",
		"heart-outline",
		"person-outline",
	];
	return (
		<div class="icones">
			{icones.map((icone) => (
				<ion-icon name={icone}></ion-icon>
			))}
		</div>
	);
}
