// function sumar(a, b) {
//     return a + b;
// }

// Funcion en flecha
// let sumar = (a, b) => {
//     return a + b;
// }

// Retorno en una sola línea
// let sumar = (a, b) => a + b;

// console.log(sumar(10, 20));

// Ejercicio
// function saludar() {
//     return 'Hola mundo';
// }

// let saludar = () => 'Hola mundo';
// console.log(saludar());

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${ this.nombre} ${ this.apellido} - poder: ${ this.poder} `;
    }
}

console.log(deadpool.getNombre());