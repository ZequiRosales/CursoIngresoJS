/* Rosales Milano, Ezequiel Div D
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var suNombre;
	var suEdad;
	
	suNombre = document.getElementById('txtIdNombre').value;
	suEdad = document.getElementById('txtIdEdad').value;

	alert("Su nombre es: " + suNombre + " y su edad es: " + suEdad);

}

