/* 
	📌 Named Imports
    -ESTA ES LA QUE SE UTILIZA LA MAYORIA DE VECES
*/
import {nombre as nombreImportado,obtenerPosts} from './namedExports.js';
console.log('Mi nombre es '+nombreImportado);
console.log(obtenerPosts());

/* 
	📌 Namespace Imports
    -Es menos comun de utilizar esta forma 
*/
import * as datos from './namedExports.js';
console.log(datos.nombre);
console.log(obtenerPosts());


/* 
	📌 Default Imports
*/
import obtener from './defaultExport';
console.log(obtener());

/* 
	📌 Empty Imports
	Carga todo el codigo pero sin hacer ningun objeto.
*/
import './emptyExport';
import { correo } from './emptyExport';
console.log(correo);