// const formulario = document.forms[0];
const formulario = document.forms['formulario-donacion'];


/*
	📌 Evento submit
	Nos permite detectar cuando el usuario intenta enviar un formulario.
*/
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Enviando datos...');
});

/*
	📌 Evento Change
	Nos permite detectar cuando hay un cambio en el valor de un input, select o textarea.
	Se ejecuta cuando cambiamos el valor del input y damos click fuera.
*/

formulario.pais.addEventListener('change', (e) => {
    console.log('El pais cambio y su nuevo valor es: '+e.target.value);
});

formulario['cantidad-5'].addEventListener('change', () => console.log('La cantidad cambio y es: '+formulario['cantidad-5'].value));
formulario['cantidad-10'].addEventListener('change', () => console.log('La cantidad cambioy es: '+formulario['cantidad-10'].value));

/*
	📌 Evento Focus
	Nos permite detectar cuando un input recibe el foco de atención.
*/

formulario.correo.addEventListener('focus', () => {
	console.log('El input correo ahora es el foco de atención');
});
formulario.pais.addEventListener('focus', () => {
	console.log('El input pais ahora es el foco de atención');
});


/*
	📌 Evento Blur
	Nos permite detectar cuando un input pierde el foco de atención.
*/

formulario.correo.addEventListener('blur', () => {
	console.log('El input correo dekjo de ser el foco de atención');
});
formulario.pais.addEventListener('blur', () => {
	console.log('El input pais dejo de ser el foco de atención');
});

/*
	📌 Evento keydown
	Nos permite detectar cuando una tecla es presionada sobre un input.
*/

formulario.correo.addEventListener('keydown', (e) => {
	console.log(e);
});

/*
	📌 Evento keyup
	Se ejecuta cuando una tecla es levantada al escribir sobre un input.
*/

formulario.correo.addEventListener('keyup', (e) => {
	console.log(e);
});