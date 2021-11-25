const { crearArchivo } = require('./helpers/mutiplicar')
const argv = require('./config/yargs')

require('colors')

console.clear()
console.log(argv)
console.log('base: yargs', argv.b)

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch(err => console.log(err))

