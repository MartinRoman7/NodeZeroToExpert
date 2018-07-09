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


// let getEmpleado = (id) => {
//     return new Promise((resolve, reject) => {

//         let empleadoDB = empleados.find(empleado => empleado.id === id);

//         if (!empleadoDB) {
//             reject(`No existe el empleado con el ID ${ id }`);
//         } else {
//             resolve(empleadoDB);
//         }
//     });
// }

let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe el empleado con el ID ${ id }`);
    } else {
        return empleadoDB;
    }
}

// let getSalario = (empleado) => {
//     return new Promise((resolve, reject) => {

//         let salarioDB = salarios.find(salario => salario.id === empleado.id);

//         if (!salarioDB) {
//             reject(`No se encontro un salario para el empleado ${ empleado.nombre }`)
//         } else {
//             resolve({
//                 id: empleado.id,
//                 nombre: empleado.nombre,
//                 salario: salarioDB.salario
//             });
//         }

//     });
// }

let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id == empleado.id);
    if (!salarioDB) {
        throw new Error(`No se encontro un salario para el empleado ${ empleado.nombre }`);
    } else {
        return {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        };
    }
}

// Información de empleado y salario
let getInfo = async(id) => {
    let empleado = await getEmpleado(id);
    let respuesta = await getSalario(empleado);
    //console.log(respuesta);
    return `El empleado ${respuesta.nombre} tiene un salario de ${respuesta.salario}`
}

// Posibles peticiones (Detallado y simplificado)
// getInfo(1).then(mensaje => {
//     console.log(mensaje);
// })

// getInfo(1).then(mensaje => console.log(mensaje));

getInfo(3).then(mensaje => console.log(mensaje)).catch(
    error => console.log(error));