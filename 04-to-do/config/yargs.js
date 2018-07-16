const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
        // descripcion: {
        //     demand: true,
        //     alias: 'd',
        //     desc: 'Descripción de la tarea por hacer'
        // }
    })
    .command('actualizar', 'Actualizar el estado de una tarea', {
        descripcion,
        // descripcion: {
        //     demand: true,
        //     alias: 'd',
        //     desc: 'Descripción de la tarea por hacer'
        // },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como compleato o pendiente la tarea'
        }
    })
    .command('borrar', 'Borrar tarea en caso de no ser deseada', {
        descripcion
        // descripcion: {
        //     demand: true,
        //     alias: 'b',
        //     desc: 'Eliminar tarea'
        // }
    })
    .help()
    .argv;

module.exports = {
    argv
}