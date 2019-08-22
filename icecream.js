function loadx()
{
	var scoop=getParameterByName('scoop', "1");
	var type=getParameterByName('type', "Cup");
	var flavour=getParameterByName('flavour', "Vanilla");
	var price=getParameterByName('price', "6.50");
	var notes=getParameterByName('notes', "0000")	
	document.write("<h2>Icecream Entry</h2>");
	document.write("Number of Scoops:" + scoop+"<br>");
	document.write("Cup or Cone:" + type+"<br>");
	document.write("Flavours:" + flavour+"<br>");
	document.write("Price:" + price+"<br>");
	document.write("Notes:" + notes+"<br>");		
}
function getParameterByName(name, defaultx, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return defaultx;
    if (!results[2]) return defaultx;
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
