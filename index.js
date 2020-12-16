// patrón prototipo
const perro = {
  raza: 'Kilterrier',
  ladrar: function() {
    console.log(`Guau!m soy un ${this.raza}`)
  }
}

const kiltro = Object.create(perro)
kiltro.ladrar()
console.log(kiltro)

kiltro.raza = 'Super perro';
kiltro.ladrar();