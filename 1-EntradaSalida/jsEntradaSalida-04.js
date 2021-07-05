/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var suNombre;

	suNombre=prompt("Ingrese su nombre: ");
	document.getElementById('txtIdNombre').value = suNombre;

}

