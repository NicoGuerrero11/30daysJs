//  CONDICIONALES

//condicion para ver si puedes conducir
/* let age = Number(prompt("ingrese su edad: "));
if(age >= 18){
    console.log("tienes la edad suficiente para conducir");
}else{
    console.log(`te faltan ${18 - age} para conducir`);
} */



// condicional para ver quien es mayor
/* let myAge = 23;
let yourAge = Number(prompt("ingrese su edad "));

if(myAge > yourAge){
    console.log(`Soy mayor que tu por ${ myAge - yourAge}`);
}else{
    console.log(`Eres mayor que yo por ${yourAge - myAge}`);
} */



// condicional if else
/* let a = 4;
let b = 3;
if(a>b){
    console.log(`${a} es mayor que ${b}`);
}else{
    console.log(`${a} es menor que ${b}`);
}

// operador ternario
let  mayor = a > b ? `${a} es mayor que ${b}` : `${a} es menor que ${b}`;
console.log(mayor); */



// Par o Impar
/* let numero = Number(prompt("ingrese un numero: "));
if(numero % 2 == 0){
    console.log(`${numero} es par`);
}else{
    console.log(`${numero} es impar`);
} */




/* console.log("elije una opcion: ");
console.log("1- 0 - 49");
console.log("2- 50 - 59");
console.log("3 60 - 69");
console.log("4- 70 - 79");
console.log("5- 80 - 100");
console.log("\n");
let puntaje = Number(prompt("ingrese puntaje: "));

switch(puntaje){
    case 1:
        console.log("tu puntaje es F");
        break;
    case 2:
        console.log("tu puntaje es D");
        break;
    case 3:
        console.log("tu puntaje es C");
        break;
    case 4:
        console.log("tu puntaje es B");
        break;
    case 5:
        console.log("tu puntaje es A");  
        break;
    default:
        console.log("debes presionar un del 1 - 6");
        break;
} */



/* let temporada = prompt("Elija un mes: ");

if(temporada == "septiembre" || temporada == "octubre" || temporada == "noviembre"){
    console.log("es temporada de otono");
}else if(temporada == "diciembre" || temporada == "enero" || temporada == "febrero"){
    console.log("temporadad de invierno");
}else if(temporada == "marzo" || temporada == "abril" || temporada == "mayo"){
    console.log("temporada de primavera");
}else{
    console.log("temporada de verano");
} */



/* let dia = prompt("que dia es hoy: ").toLocaleLowerCase();
if(dia == "sabado" || dia == "domingo"){
    console.log(`el ${dia} es fin de semana`);
}else{
    console.log(`el ${dia} es dia laborable`);
} */

let mes = prompt("introduce un mes: ").toLowerCase();

switch(mes){
    case "enero":
        console.log(`${mes} tiene 31 dias`);
        break;
    case "febrero":
        console.log(`${mes} tiene 29 dias`);
        break;
    case "marzo":
        console.log(`${mes} tiene 31 dias`);
        break;
    case "abril":
        console.log(`${mes} tiene 30 dias`);
        break;
    case "mayo":
        console.log(`${mes} tiene 31 dias`);
        break;
    case "junio":
        console.log(`${mes} tiene 30 dias`);
        break;
    case "julio":
        console.log(`${mes} tiene 31 dias`);
        break;
    case "agosto":
        console.log(`${mes} tiene 31 dias`);
        break;
    case "septiembre":
        console.log(`${mes} tiene 30 dias`);
        break;
    case "octubre":
        console.log(`${mes} tiene 31 dias`);
        break;
    case "noviembre":
        console.log(`${mes} tiene 30 dias`);
        break;
    case "diciembre":
        console.log(`${mes} tiene 31 dias`);
        break;
}