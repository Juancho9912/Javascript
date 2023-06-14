const boton1 = document.getElementById('boton1');
const primeraCaja = document.querySelector('.caja');

/*
	📌addEventListener es decirle al navegador que este atento
	📌Para que cuando den un click en el contenedor me ejecutes 
	📌una funcion
	📌Y el argumento e es para recibir la informacion del evento
*/

boton1.addEventListener('click', (e) => {
    primeraCaja.classList.toggle('activa');
});

/*
	📌 Agregando el evento a multiples elementos
	Podemos agregar el evento a multiples elementos recorriendolos mediante un ciclo.
	Nota: Esta no es la forma mas optima, en la proxima clase veremos una mejor forma.
*/

const cajas = document.querySelectorAll('.caja');

cajas.forEach((caja) => {
	caja.addEventListener('click', (e) => {
		console.log(`Haz hecho click en la caja: ${e.target.innerHTML}`);
	});
});