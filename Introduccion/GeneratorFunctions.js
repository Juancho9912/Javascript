/*
	📌 Generator Functions
	    📌 Son funciones que pueden ser pausadas y reanudadas (yield)
        Los generadores tienen los siguientes 2 métodos clave.

        Yield method (Método de rendimiento) – El método de rendimiento se llama en una función para 
        detener la ejecución de la función en la línea específica donde se llama el método de 
        rendimiento.
        Next method (Siguiente método) – Este método se llama desde la aplicación principal para 
        reanudar la ejecución de una función que tiene un método de rendimiento. 
        La ejecución de la función continuará hasta el próximo método de rendimiento o hasta el final 
        del método.
*/

function* Add(x) {
    yield x + 1;
    var y = yield null;
    y = 6;
    return x + y;
}

var gen = Add(5);

gen.next();

gen.next();

/*

1-El primer paso es definir nuestra “función” generadora. Tenga en cuenta que esto 
se hace agregando un "*" a la palabra clave de función. Entonces estamos definiendo 
una función llamada Add que toma un parámetro de x.
2-La palabra clave yield es específica de los generadores. Esto lo convierte en una 
construcción poderosa para pausar una función en medio de cualquier cosa. Así que 
aquí, la ejecución de la función se detendrá hasta que invoquemos la función next(),
que se realizará en el Paso 4. En este punto, el valor de x será 6 y se detendrá 
la ejecución de la función.
3-Aquí es donde primero llamamos a la función generadora y enviamos el valor de 5 
a nuestra función Agregar. Este valor se sustituirá en el 
parámetro x de nuestra función Add. 
4-Una vez que llamamos a la función next(), la función Add() reanudará la ejecución. Cuando se ejecute la siguiente 
instrucción var y= yield(null), la función Add() volverá a dejar de ejecutarse.
5-Ahora, después de volver a llamar a la función next(), se ejecutarán las 
siguientes declaraciones y se agregará y devolverá el valor combinado de x=5 e y=6.*/
