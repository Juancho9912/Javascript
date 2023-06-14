//Exportaciones en base a nombre 

//FORMA 1 - Palabra export
// export const nombre = 'Juan';

// export const obtenerPosts = () => {
//     return ['Post 1', 'Post 2', 'Post 3']
// }


//FORMA 2 - Palabra export
const nombre = 'Juan';

const obtenerPosts = () => {
    return ['Post 1', 'Post 2', 'Post 3']
}

export {nombre, obtenerPosts};
//Esta forma es mejor por que se decide que
//se quiere importar y que no