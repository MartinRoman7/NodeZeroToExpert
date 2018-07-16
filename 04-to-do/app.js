//const argv = require('yargs').argv;
//console.log(argv);

const argv = require('./config/yargs').argv;
const color = require('colors/safe');

const porHacer = require('./to-do/to-do');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        //console.log('Crear');
        //console.log(argv.descripcion);
        let tarea = porHacer.crear(argv.descripcion);
        //console.log(tarea);
        break;
    case 'listar':
        //console.log('Listar');
        let listado = porHacer.listar();

        for (let tarea of listado) {
            console.log(color.cyan('============ Por hacer =========='));
            console.log(color.blue('    ', tarea.descripcion));
            if (tarea.completado === false) {
                console.log(color.red('     Estado: ', tarea.completado));
            } else {
                console.log(color.green('     Estado: ', tarea.completado));
            }
            console.log(color.cyan('================================='));
        }

        break;
    case 'actualizar':
        //console.log('Actualizar');
        //console.log(argv.descripcion);
        //console.log(argv.completado);
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('Comando no reconocido');
}