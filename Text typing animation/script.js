var i = 0;
var text = 'Sitezin sei la oq fulano de tal.';
type();
function type() {
	if(i < text.length){
		document.getElementById("text").innerHTML += text.charAt(i);
		i++;
		setTimeout(type, 100);
	}
}