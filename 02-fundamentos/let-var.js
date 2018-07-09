var nombre = 'Wolverine';
let name = 'Spiderman';

if (true) {
    var nombre = 'Magneto';
    let name = 'Batman';
    console.log('if: ' + name);
}

var nombre = 'Bronco';
name = 'Superman';

console.log(nombre);
console.log(name);

for (var i = 0; i <= 5; i++) {
    console.log(`i: ${i}`);
}

for (let i = 0; i <= 5; i++) {
    //Aquí vive el i de Let
    console.log(`i: ${i}`);
}

console.log(i); //Toma i de var