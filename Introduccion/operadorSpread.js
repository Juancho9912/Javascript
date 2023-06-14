/*
	📌 Operador Spread
	Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/

// const frutas = ['manzana', 'pera', 'piña','sandia'];
// const comidaFavorita = ['pizza', 'hotdog', 'tacos', ...frutas];
// console.log(comidaFavorita);

// //Tambien funciona con objetos 

// const datosLogin = {
// 	nombre: 'David',
// 	correo: 'correo@correo.com',
// 	password: '123',
// };

// const usuario = {
// 	...datosLogin,
// 	nombre: 'Juan',
// 	edad: 23,
// }

// console.log(usuario);

/*
	📌 Parametro Rest
	Permite que una funcion contenga un numero indefinido de argumentos.
	Los argumentos extra que encuentre los convertira en un arreglo.
*/

// const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
// 	console.log(nombre, correo, ...datosAdicionales);
// };

// registrarUsuario('David', 'correo@correo.com');
// registrarUsuario('David', 'correo@correo.com', 23, 'Colombia');

/*
	📌 Destructuración de objetos
	Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/


const amigos = ['Alejandro','Cesar','Manuel'];

const [primerAmigo,segundoAmigo,tercerAmigo] = amigos; //Destructuración de arreglos

console.log(primerAmigo);

const persona = {
	nombre: 'Carlos',
	edad: 27,
	pais: 'México',
};

const { nombre, pais, edad } = persona;
console.log(nombre, pais);

const mostrarEdad = ({ nombre, edad }) => {
	console.log(`${nombre} tiene ${edad} años`);
};
mostrarEdad(persona);