// const operacion = (tipo,num1,num2) => {
//     let resultado;
//     switch(tipo){
//         case 'suma':
//             resultado = num1 + num2;
//             break;
//         case 'resta':
//             resultado = num1 - num2;
//             break;
//         case 'multiplicacion':
//             resultado = num1 * num2 ;
//             break;
//         case 'division':
//             resultado = num1/num2;
//             break;
//         default:   
//             console.log('No existe la operacion');
//     }
//     return console.log(resultado);
    
// };

// operacion('suma',2,3);
// operacion('resta',5,2);
// operacion('multiplicacion',10,3);
// operacion('division',10,2);

const operacion = (tipo,num1,num2) => {
    switch(tipo){
        case 'suma':
            return num1 + num2;
        case 'resta':
            return num1 - num2;
        case 'multiplicacion':
            return num1 * num2 ;
        case 'division':
            return num1/num2;
        default:   
            return console.log('No existe la operacion');
    }
    
};


const mivariable = operacion('suma',2,3);
const mivariable2 = operacion('resta',5,2);
const mivariable3 = operacion('multiplicacion',10,3);
const mivariable4 = operacion('division',10,2);

console.log(mivariable);
console.log(mivariable2);
console.log(mivariable3);
console.log(mivariable4);