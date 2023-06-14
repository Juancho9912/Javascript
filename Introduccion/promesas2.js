//fetch() es un mecanismo que te permite realizar llamadas AJAX (Asynchronous JavaScript y XML) simples con JavaScript.
//Fecth significa que queremos hacer una peticion o que queremos obtener POST


const fetchPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const posts = ["Post 1", "Post 2", "Post 3"];
        const error = false; //true para que muestre error

        if (error) {
            reject("Error: Algo salio mal al intentar obtener los posts");
        } else {
            resolve(posts);
        }
        }, 2000); //2000 = 2 segundos
    });
};

fetchPost()
    .then((posts) => {
        console.log(posts);
    })
    .catch((error) => {
        console.log(error);
    });

const miVariable = fetchPost();
console.log(miVariable);
//De esta forma siempre devuelve estado pendiente (Pending) la unica 
// forma de acceder a promesas es con .then y con .catch
// Si nos sale Promise {<pending>} es por que es una promesa y lo estamos haciendo mal