/* Async y Await sirven para que el navegador espere la respuesta
y no haga nada mas hasta que llegue la respuesta
Y otra ventaja que se puede hacer con async y await es se va a poder
limpiar el codigo de .fetch y .catch para que abarque menos lineas 
sea mucho mas limpio y se vea mejor
*/ 

const fetchPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const posts = ["Post 1", "Post 2", "Post 3"];
        const error = true;

        if (error) {
            reject("Error: Algo salio mal al intentar obtener los posts");
        } else {
            resolve(posts);
        }
        }, 2000);
    });
};


/* 
    -Para trabajar con await primero tenemos que tener una funcion
    - que encierre a AWAIT y esta funcion tiene que tener la palabra
    - async () => {}
*/
const mostrarPosts = async() => {
    try { //Aca se ejecuta el codigo y si no hay error se ejecuta el try
        const posts = await fetchPost();
        // Todas las lineas de codigo de aca para abajo no se ejecutan hasta que me respondan la peticion
        // 
        console.log(posts);
    } catch (error) { //Si hay un error que javascript detecte aca se captura y se muestra o se hace lo necesario
        console.log(error);
    }
    
};

mostrarPosts();


/*
    -En esta parte si no utilizamos async o await se ejecuta primero el log 
    -de iniciando operacion luego el log de termina operacion y luego 
    -se ejecuta el fetchPost .then o .catch, y muchas veces necesitamos
    -esperar el post o la respuesta primero para seguir ejecutando el codigo
    -es decir para seguir ejecutando lo que vaq abajo de el fetch o catch
*/ 

// console.log('Inicia operacion'); 
// fetchPost()
//     .then((posts) => {
//         console.log(posts);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// console.log('Termina operacion');

//Esta forma casi no se utiliza, es fea y la mayoria de programadores utilizan la de async y await