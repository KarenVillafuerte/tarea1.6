var resu = document.getElementById('enviar')
resu.addEventListener("click", volume);

function volume()
{
	var a = document.getElementById('valor').value;
	var d = (4/3.0)*3.14159*Math.pow(a, 3);

	alert('Volumen: '+ d);
}