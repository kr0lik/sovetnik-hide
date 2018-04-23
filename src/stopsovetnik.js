(function(){
    function findByAttributeValue(attribute, value, element_type)    {
        element_type = element_type || "*";
        var All = document.getElementsByTagName(element_type);
        for (var i = 0; i < All.length; i++)       {
            if (All[i].getAttribute(attribute) == value) { return All[i]; }
        }

        return [];
    }

    ['itemprop', 'itemscope', 'itemtype'].forEach(function(element) {
        var elements = document.querySelectorAll('[' + element + ']');

        elements.forEach(function(item, i, arr) {
            item.removeAttribute(element);
        });
    });

    $('h1').before('<h1 style="display: none;">Stop sovetnik</h1>');
})();

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
