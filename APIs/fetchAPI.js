const endpoint = "https://api.npoint.io/a99a1510e27fff32aaeb";

//
//Esta forma esta muy bien pero es mejor utilizar la forma de abajo
//que es ASYNC y AWAIT es mas facil y menos lineas de codigo

// fetch(endpoint) //Devuelve una promesa y ahi entra then y catch
//     .then((respuesta) => {
//         console.log("El servidor respondio");
//         const promesa = respuesta.json();
//         promesa
//             .then((data) => {
//                 console.log();
//             })
//             .catch((err) => {
//                 console.log(err.message);
//             });
//     })
//     .catch((error) => {
//         console.log(error);
//     });


/*
	📌 Ejemplo con Async/Await
*/
const obtenerDatos = async () => {
	const respuesta = await fetch(endpoint);
	const datos = await respuesta.json();

	console.log(datos);
};
obtenerDatos();