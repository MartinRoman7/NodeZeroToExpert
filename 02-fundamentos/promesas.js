// Simulación de base de datos
let empleados = [{
    id: 1,
    nombre: 'Martin'
}, {
    id: 2,
    nombre: 'Oscar'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

// let getEmpleado = (id, callback) => {
//     let empleadoDB = empleados.find(empleado => {
//         return empleado.id === id;
//     });
//     if (!empleadoDB) {
//         callback(`No existe el empleado con el id ${id}`);
//     } else {
//         callback(null, empleadoDB);
//     }
// }

// let getSalario = (empleado, callback) => {
//     let salarioDB = salarios.find(salario => {
//         return salario.id === empleado.id
//     });
//     if (!salarioDB) {
//         callback(`No se encontró un salario para el usuario ${ empleado.nombre }`);
//     } else {
//         callback(null, {
//             id: empleado.id,
//             nombre: empleado.nombre,
//             salario: salarioDB.salario
//         });
//     }
// }

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe el empleado con el ID ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontro un salario para el empleado ${ empleado.nombre }`)
        } else {
            resolve({
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }

    });
}

// Petición con promesas
// getEmpleado(1).then((empleado) => {
//     console.log('Empleado de base de datos', empleado);
//     getSalario(empleado).then((respuesta) => {
//         console.log(respuesta);
//     }, (err) => {
//         console.log(err);
//     })
// }, (err) => {
//     console.log(err);
// });

// Petición con promesas en cadena
getEmpleado(1).then(empleado => {
    return getSalario(empleado);
}).then(respuesta => {
    console.log(`El salario de ${ respuesta.nombre } es de ${ respuesta.salario}`);
}).catch(err => {
    console.log(err);
});