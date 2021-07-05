/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var numeroSuma;

	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;
	
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	numeroSuma = numeroUno + numeroDos;
	
	alert("La suma de sus numeros es de: " + numeroSuma);
}

