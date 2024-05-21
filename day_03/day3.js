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

console.log("\n\n \n\n");

// caluculo del area
/* let base = Number(prompt("Agrege la base: "));
let h = Number(prompt("agrege la altura: "))
let area = 0.5 * base * h;
console.log(`El area del triangulo es: ${area}`); */

// calculo del perimetro de un triangulo
/* let ladoA = Number(prompt("Ingrese lado a: "));
let ladoB = Number(prompt("Ingrese lado b: ")) ;
let ladoC = Number(prompt("Ingrese lado c: "));
let perimetro = ladoA + ladoB + ladoC;
console.log(`El perimetro del triangulo es ${perimetro}`); */

// calculo del area y perimetro de un rectangulo
/* let largo = Number(prompt("ingrese lado: "));
let ancho = Number(prompt("ingrese el ancho: "));
let area = largo * ancho;
let perimetro = 2 * (largo + ancho);
console.log(`El area del rectangulo es: ${area}. Y el perimetro es: ${perimetro}.`); */

// calculo para encontrar el area y circuferencia de un circulo
/* let radio = Number(prompt("agrege radio: "));
let area = Math.PI * radio**2;
let c = 2 * Math.PI * radio;
console.log(area);
console.log(c);  */

// encontrar la pendiente y las intersecciones de la eq: y = 2x - 2
let interseccionY = 2*0 -2;
let interseccionX = 2/2;
console.log(`interseccion en x: ${interseccionX}. Interseccion en Y: ${interseccionY}`);

let x1=2, y1=2, x2=6, y2=10; 
let pendiente = (y2 - y1)/(x2 - x1);
console.log(pendiente);

let x = -3;
let y = x**2 + 6*x + 9;
console.log(y);

//ganancia semanal
/* let horas = Number(prompt("horas a la semana: "));
let tarifa = Number(prompt("tarifa por hora: "));
let ganancia = horas * tarifa;
console.log(`Su ganancia semanal: ${ganancia}`);
console.log(`Su ganancia semanal: ${horas * tarifa}`); */

//variable para ver si tu nombre es largo o no
/* let nombre = prompt("Nombre: ")
if(nombre.length > 7){
    console.log("tu nombre es largo");
}else{
    console.log("tu nombre es corto");
} */

// condicional que permite ver si tu nombre es mas largo que ty apellido
let nombre = "nicolas";
let apellido = "guerrero";
if(nombre.length > apellido.length){
    console.log(`tu nombre ${nombre} es mas largo que tu apellido ${apellido}`);
}else{
    console.log(`tu nombre ${nombre} es mas corto que tu apellido ${apellido}`);
}

//condicional que permite ver quien es mayor y por cuanto
let myAge = 25;
let yourAge = 250;
if(myAge > yourAge){
    let age = myAge - yourAge;
    console.log(`i'm older then you by ${age}`);
}else{
    let age = yourAge - myAge;
    console.log(`you're older then my by ${age}`);
}

// condicional que permite saber si puedes conducir o no
/* let edad = Number(prompt("introduzca cuando nacio: "));
let diferencia = 2024 - edad;
if( diferencia >= 18){
    console.log(`tienes ${diferencia}. Tienes la edad suficiente para conducir`);
}else{
    let posib = 18 - diferencia;
    console.log(`tienes ${diferencia}. Podras conducir en ${posib} años.`);
} */

// calcular los segundos de vida
/* let vidas = Number(prompt("age: "));
let tiempo = vidas * 31536000;
console.log(`Viviste ${tiempo} segundos.`); */



const fecha = new Date();
const años = fecha.getFullYear(); // return años
const month = fecha.getMonth() + 1; // return meses(0 - 11)
const date = fecha.getDate(); // return días (1 - 31)
const hours = fecha.getHours(); // return horas (0 - 23)
const minutes = fecha.getMinutes(); // return minutos (0 -59)

console.log(`${años}-${month}-${date} ${hours}:${minutes}`);
console.log(`${date}-${month}-${años} ${hours}:${minutes}`);
console.log(`${date}/${month}/${años} ${hours}:${minutes}`);

