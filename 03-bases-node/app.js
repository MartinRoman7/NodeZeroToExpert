// requires
const { crearArchivo } = require('./funcion-multiplicar/multiplicar')

//let base = 'abc';

// Parte 3 (argumentos)
//console.log(process.argv);

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1] // Primer argumento 
console.log(base);

// Parte 2 (solicitar función remota)
crearArchivo(base).then(
    archivo => console.log(`Archivo creado: ${ archivo }`)).catch(
    err => console.log(err)
);