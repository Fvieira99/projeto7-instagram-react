export default function FooterMobile() {
	const icones = [
		"home",
		"search-outline",
		"add-circle-outline",
		"heart-outline",
		"person-outline",
	];
	return (
		<div className="fundo-mobile">
			{icones.map((icone) => (
				<ion-icon name={icone}></ion-icon>
			))}
		</div>
	);
}
