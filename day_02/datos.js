let desafio = "30 días de JavaScript";

console.log(desafio);
console.log(desafio.length);
console.log(desafio.toUpperCase());
console.log(desafio.toLowerCase());
console.log(desafio.substr(0, 2));
console.log(desafio.substring(3));
console.log(desafio.includes("Script"));
console.log(desafio.split());
console.log(desafio.split(" "));

let social = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(social.split(", "));

console.log(desafio.replace("JavaScript", "Python"));
console.log(desafio.charAt(15));
console.log(desafio.charCodeAt(11));
console.log(desafio.indexOf("a"));
console.log(desafio.lastIndexOf("a"));

let oracion = 'No puedes terminar una oración con porque porque porque es una conjunción';
console.log(oracion.indexOf("porque"));
console.log(oracion.lastIndexOf("porque"));
console.log(oracion.search("porque"));

let desafio1 = "    30 días de JavaScript";
console.log(desafio1);
console.log(desafio1.trim());

console.log(desafio.startsWith("30"));
console.log(desafio.endsWith("ipt"));
let pattern = /a/gi;
console.log(desafio.match(pattern));

let days = "30 dias de ";
let lenguage = "JavaScript";
console.log(days.concat(lenguage));
console.log(desafio.repeat(2));


console.log("The quote 'There is no exercise better for the heart than reaching down and \
lifting people up.' by John Holmes teaches us to help one another.");

console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. \
Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

let num = "10";
let numInt = +num;
console.log(typeof 10 == typeof numInt);


console.log(Math.ceil(parseFloat('9.8')) == 10);



let word1 = "python";
let word2 = "jargon";

console.log(word1.includes("on") == word2.includes("on"));

let sentence = "I hope this course is not full of jargon."
console.log(sentence.includes("jargon"));

const number = console.log(Math.floor(Math.random() * 101));


const number2 = console.log(Math.floor(Math.random() * (100 - 50 + 1) + 50));

const term = "JavaScript";
console.log(term.length);
let cter = term.length;

const rndm = console.log(term[Math.floor(Math.random() * cter)]);

let txt = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, \
 15000 euro online courses per month.';


const arr  = txt.match(/\d+/g);

const totalAnnualIncome = (+arr[0] + +arr[2]) * 12 + +arr[1];
 
console.log(totalAnnualIncome);
 



 