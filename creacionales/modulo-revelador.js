// patron modulo revelador posee una api pública y privada
const resultado = (() => {
  const x = {};

  return {
    a: () => console.log(x),
    b: (key, val) => x[key] = val
  }
})()

// retornamos solo las propiedades que se permitió con return
resultado.a();
resultado.b('queso', 'cabra');
resultado.a();