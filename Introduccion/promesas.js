// LAs promesas son objetos que pueden tener 2 estados: exito o error.

const promesa = new Promise((resolve, reject) => {
    //Accion que se ejecutara.
    setTimeout(() => {
        const exito = true;
        if (exito) {
            resolve('La operacion tuvo exito');
        } else {
            reject('La operacion no tuvo exito');
        }
    }, 4000);
});

//then sirve para ejecutar la funcion si la promesa fue exitosa
promesa.then((mensaje) => {
    alert(mensaje);
});

//catch sirve para ejecutar la funcion reject que indica que la operacion NO fue exitosa
promesa.catch((mensaje) => {
	alert(mensaje);
});

