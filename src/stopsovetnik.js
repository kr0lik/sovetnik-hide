function sovetnikFix() {
	var el = document.getElementsByTagName('html')[0];
	if (el.style && el.style.marginTop && el.style.marginTop != '0px') {
		el.style.marginTop = '';
	} else {
		setTimeout(sovetnikFix, 100);
	}
}

if (typeof document.body.addEventListener !== 'undefined') {
	document.addEventListener('DOMNodeInserted',function (e) {
		if (e.target.innerHTML && (
				e.target.innerHTML.indexOf('Более&nbsp;выгодная&nbsp;цена')>-1 ||
				e.target.innerHTML.indexOf('Более выгодная цена')>-1 ||
				e.target.innerHTML.indexOf('Советник')>-1
			)) {
			e.target.remove();
			sovetnikFix();
		}
	});
}
