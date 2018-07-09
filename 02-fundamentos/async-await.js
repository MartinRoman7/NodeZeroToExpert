// Promesa declarada con async
// let getNombre = async() => {
//     return 'Martin';
// }

// Promesa declarada normalmente
// let getNombre = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Martin');
//     });
// }

//console.log(getNombre());

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Martin');
        }, 3000)
    });
}

let saludo = async() => {

    let nombre = await getNombre();

    return `Hola ${nombre}`;
}

// Ejecución de la función
// getNombre().then(nombre => {
//     console.log(nombre);
// }).catch(err => {
//     console.log('Error de Async ', err);
// })

// Ejecución de la función con await
saludo().then(mensaje => {
    console.log(mensaje);
})