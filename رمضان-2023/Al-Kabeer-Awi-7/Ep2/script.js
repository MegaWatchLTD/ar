function RI(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
}
function ThisEp(){
	let i = RI(0, 2);
	const links = [
		"https://909.jp.eu.org/MegaWatch/Al-Kabeer-Awi-7/E2/4nJVQrVpvU.html",
		"https://5005.eu.org/MegaWatch/Al-Kabeer-Awi-7/E2/4nJVQrVpvU.html",
		"https://99.ru.eu.org/MegaWatch/Al-Kabeer-Awi-7/E2/4nJVQrVpvU.html"
		];

	window.location.href=links[i];
}
function NextEp(){
	let link;
	link="https://megawatch.eu.org/%D8%B1%D9%85%D8%B6%D8%A7%D9%86-2023/Al-Kabeer-Awi-7/Ep3/";
	window.location.href=link;
}
function PrevEp(){
	let link;
	link="https://megawatch.eu.org/%D8%B1%D9%85%D8%B6%D8%A7%D9%86-2023/Al-Kabeer-Awi-7/Ep1/";
	window.location.href=link;
}
