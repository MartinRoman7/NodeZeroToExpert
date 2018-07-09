let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
            return `${ this.nombre} ${ this.apellido} - poder: ${ this.poder} `;
        }
        // getNombre() {
        //     return `${ this.nombre} ${ this.apellido} - poder: ${ this.poder} `;
        // }
}

console.log(deadpool.getNombre());

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

//Utilizar destructuracion

// let { nombre, apellido, poder } = deadpool;
// console.log(nombre, apellido, poder);

let { nombre: name, apellido: lastname, poder: power } = deadpool;
console.log(name, lastname, power);