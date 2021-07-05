/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var suNombre;

	suNombre = document.getElementById('txtIdNombre').value;
	alert("Su nombre es: " + suNombre);
}
//txtIdNombre

//si aparece object,etc en el alert. me olvide el value en el ID