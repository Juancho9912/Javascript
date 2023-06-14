/*
	📌 Formularios

	Tenemos dos formas de acceder a los formularios.
	- Mediante el objeto forms
	- Mediante métodos del DOM
*/

// console.log(document.forms['formulario-donacion']['correo'].value);


document.getElementById('btnEnviar').addEventListener('click', (e) => {
	e.preventDefault(); //Sirve para prevenir el comportamiento por defecto de un evento
	//Cuando den click en el boton queremos prevenir el comportamiento por defecto que tenias que era el de enviar los valores a la misma pagina o al action
	//Param Sirve para que la pagina no se refresque

	//Acceder a valores de un imput
	const correo = document.querySelector('#formulario-donacion [name="correo"]');
	console.log(correo.value);

	//Acceder a valores de un select
	console.log(document.forms['formulario-donacion']['pais'].value);

	//Acceder a valores de un radioBoton
	const formulario = document.forms['formulario-donacion'];
	console.log(formulario['donacion'].value);

	//Acceder a valores de un input date o fecha
	console.log(formulario.fecha.value);

	//Acceder a valores de un checkbox
	console.log(formulario['terminos-y-condiciones'].checked);
});