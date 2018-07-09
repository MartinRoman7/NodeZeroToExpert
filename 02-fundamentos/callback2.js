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

// Función de empleado por id

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id;
    });
    if (!empleadoDB) {
        callback(`No existe el empleado con el id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

// getEmpleado(1, (err, empleado) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(empleado);
// });

// Función por salario para empleado

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => {
        return salario.id === empleado.id
    });
    if (!salarioDB) {
        callback(`No se encontró un salario para el usuario ${ empleado.nombre }`);
    } else {
        callback(null, {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }
}

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err, respuesta) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${ respuesta.nombre } es de ${ respuesta. salario}`);
    });
});