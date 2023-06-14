const eliminarCaja = () => {
    const padre = document.getElementById('contenedor1');
    const cajaAEliminar = padre.querySelector('.caja'); //Ponemos querySelector porque solo queremos un elemento, el primero que encuentre con esa clase
    
    if (cajaAEliminar){
        padre.removeChild(cajaAEliminar); //Para eliminar el elemento hijo de el contenedor 1 osea la primer caja del contenedor 1
    }
    



};