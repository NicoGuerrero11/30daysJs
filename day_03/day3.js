// booleanos

//variables
let firstName = "Nicolas";
let lastName = "Guerrero";
let country = "Mexico";
let city = "CDMX";
let age = 23;
let isMarried = false;
let year = 2024;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
console.log("\n\n \n\n");

// verificar si son el mismo tipo de dato y mismo valor
console.log('10' === 10);
console.log('10' == 10);
console.log(parseInt('9.8') === 10);
console.log(parseInt('9.8') == 10);

// tres comparaciones verdaderas
console.log(3 > 1);
console.log("banana".length <= "manzana".length);
console.log(typeof Math.PI === typeof 3.14);

//tres comparaciones que son falsas
console.log(3 < 1);
console.log("banana".length >= "manzana".length);
console.log(typeof Math.PI === typeof '10');

console.log("\n\n \n\n");

//ver cual es True or False y luego compararlo con console.log
console.log(4 > 3 ); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); //false
//Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
console.log("python".length != "jargon".length);

console.log("\n\n \n\n");

console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!(false)); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); //true
//No hay 'on' tanto en dragon como en python
console.log(!("python".includes("on") && "dragon".includes("on")));
console.log("\n\n \n\n");

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());


