// Parte 2 (solicitar función remota)
// requires
const { crearArchivo, listarTabla, crearTabla } = require('./funcion-multiplicar/multiplicar');

// crearArchivo(base).then(
//     archivo => console.log(`Archivo creado: ${ archivo }`)).catch(
//     err => console.log(err)
// );


// Parte 3 (argumentos)
//console.log(process.argv);

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1] // Primer argumento 
// console.log(base);

// crearArchivo(argv.base).then(
//     archivo => console.log(`Archivo creado: ${ archivo }`)).catch(
//     err => console.log(err)
// );

//Parte 4 (Yargs)
// const argv = require('yargs')
//     .command('listar', 'Parámetro para imprimir en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Parámetro para crear un archivo de tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

// console.log('Base: ', argv.base);
// console.log('Limite: ', argv.limite);

// Parte 6 (yargs.js)
const argv = require('./config/yargs').argv;

// Parte 7 (colores)
const colors = require('colors/safe');

// Parte 5 (Yargs y lectura de comandos)
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log(argv._[0]);
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        console.log(argv._[0]);
        crearTabla(argv.base, argv.limite).then(
            //archivo => console.log(`Archivo creado: ${archivo}`)).catch(
            // Colores safe
            archivo => console.log('Archivo creado:', colors.green(archivo))).catch(
            err => console.log(err)
        );
        break;

    default:
        console.log('Comando no encontrado');
}