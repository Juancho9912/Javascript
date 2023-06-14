/*
	📌 Metodos Estaticos:
	- Definición
	- Los metodos estaticos permiten poder acceder a propiedades
	- y metodos sin tener que inicializarlos antes
    - Se pueden acceder a ellos sin necesidad de instanciar la clase
*/

class Usuario {
	constructor(nombre, correo) {
		this.nombre = nombre;
		this.correo = correo;
	}

	static borrar(id_usuario) {
		console.log(`El usuario con el id: ${id_usuario} ha sido borrado de la base de datos`);
	}

	static registrados = 1000;
}



// 
// 

// const usuario = new Usuario('Carlos', 'correo@correo.com');
// usuario.borrarUsuario(1);
Usuario.borrar(1);
console.log(Usuario.registrados);

