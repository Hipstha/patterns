// patrón modulo
const modulo = {
  prop: 'mi prop',
  config: {
    lenguaje: 'es',
    cache: true,
  },
  setConfig: config => {
    modulo.config = conf
  },
  isCacheEnabled: () => {
    console.log(modulo.condig.cache ? 'si' : 'no' )
  }
}

console.log(modulo);