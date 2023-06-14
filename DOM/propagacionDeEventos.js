const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click', (e) => {
	console.log('Hiciste click en el contenedor');
});

/*
	📌addEventListener es decirle al navegador que este atento
	📌Para que cuando den un click en el contenedor me ejecutes 
	📌una funcion
	📌Y el argumento e es para recibir la informacion del evento
*/

const primeraCaja = document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) => {
	e.stopPropagation();
    //Si no tuvieramos este evento puesto saldria el log de esta funcion
    // y tambien saldria luego el log de la funcion del contenedor padre
	console.log('Hiciste click en la caja1');
});