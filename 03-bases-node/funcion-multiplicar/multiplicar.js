// requires
const fs = require('fs');
const colors = require('colors');

// Función para creación de un archivo
let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El dato ingresado ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`tablas-multiplicar/Tabla del ${base}.txt`, `${data}`, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`); //Return en console
        });
    });
}

// Función para listar una tabla de base y límite en la consola
let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El dato ingresado ${base} o ${limite} no son números`);
            return;
        }

        console.log('======================================================='.america);
        console.log(`                   Tabla del ${base}`.magenta);
        console.log('======================================================='.america);

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }

        console.log(data);
    });
}

// Función para generar una tabla con base y límite en un archivo
let crearTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El dato ingresado ${base} o ${limite} no son números`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`tablas-multiplicar/Tabla_del_${base}_limite_${limite}.txt`, `${data}`, (err) => {
            if (err) reject(err);
            // else resolve(`tabla-${base}-al-${limite}.txt`.green); //Return en console con colores
            else resolve(`tabla-${base}-al-${limite}.txt`); //Return en console
        });
    });
}

// Módulos exportados
module.exports = {
    crearArchivo,
    listarTabla,
    crearTabla
}