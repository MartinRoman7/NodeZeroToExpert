const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('database/db.json', data, (err) => {
        if (err) throw new Error('No se puedo grabar en la db', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../database/db.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB(); // Cargar la base de datos

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer); // Ir montando en el array la info
    guardarDB(); // Almacenar en el archivo
    console.log(listadoPorHacer);
    return porHacer;
}

const listar = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    // let nuevoListado = listadoPorHacer.filter(tarea => {
    //     return tarea.descripcion !== descripcion;
    // });

    // if (listadoPorHacer.length === nuevoListado.length) {
    //     return false;
    // } else {
    //     listadoPorHacer = nuevoListado;
    //     guardarDB();
    //     return true;
    // }

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}