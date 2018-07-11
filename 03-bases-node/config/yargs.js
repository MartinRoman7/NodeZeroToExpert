const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Parámetro para imprimir en consola la tabla de multiplicar', opts)
    .command('crear', 'Parámetro para crear un archivo de tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}