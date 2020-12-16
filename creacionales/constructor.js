class MiClase {
  constructor(p1) {
    this.propiedad = p1;
    this.metodo = () => {
      // soy un método
    }
  }
}

const instancia = new MiClase(4);
console.log(instancia);

// anterior de ES6
function MiClase2() {
  this.prop = 1;
  this.met = () => {

  }
}

const instancia2 = new MiClase2();
console.log(instancia2);