let nombre = 'Deadpool';
let real = 'Wade Winston';

console.log(nombre + ' ' + real);
console.log(`${nombre} ${real}`);

let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre} ${real}`;

// Comprobar las identidades sean las mismas
console.log(nombreCompleto === nombreTemplate);

// Función que se ejecuta desde el console.log
function getNombre() {
    return `${nombre} es ${real}`
}

console.log(`El nombre de: ${ getNombre() }`);