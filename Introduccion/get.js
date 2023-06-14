const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
        return this.log[this.log.length - 1];
    }
};


console.log(obj.latest);
  // Expected output: "c"

/*
cuando se llama a latest no es necesario agregar paréntesis. se llama sin parentesis la funcion
obj.sum
obj.restar
obj.no se  

  */