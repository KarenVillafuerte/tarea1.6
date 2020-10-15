var button = document.getElementById('resultado')
button.addEventListener("click", result);


function result()
{
	var x = document.getElementById('puntox').value;
	var y = document.getElementById('puntoy').value;

	if (x>0 && x<99999999 && y>0 && y<99999999)
	{
		alert('El cuadruante es: Q1')
	}
	else if (x<0 && x>99999999 && y>0 && y<99999999) 
	{
		alert('El cuadruante es Q2')
	}
	else if (x<0 && x>-99999999 && y<0 && y>-99999999) 
	{
		alert('El cuadruante es Q3')
	}
	else if (x>0 && x<99999999 && y<0 && y>-99999999) 
	{
		alert('El cuadruante es Q4')
	}
	
	
}