//  Arreglos

const arr = Array();

const frutas = ["manzana", "uva", "pera", "naranja", "sandia", "melon", "papaya"];
console.log(frutas.length);
console.log(frutas[0], frutas[3], frutas[6]);
let lastIndex = frutas.length -1;
console.log(frutas[lastIndex]);

const mixedDataTypes = [1, "hola", true, "size", 1.54, "a", false];
let size = mixedDataTypes.length - 1;
console.log(size);

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);
console.log("\n\n\n");
for (i = 0; i < 7; i++ ){
    console.log(itCompanies[i]);
}
console.log("\n\n\n");
itCompanies[0] = itCompanies[0].toUpperCase()
console.log(itCompanies[0]);
itCompanies[1] = itCompanies[1].toUpperCase()
console.log(itCompanies[1]);
itCompanies[2] = itCompanies[2].toUpperCase()
console.log(itCompanies[2]);
itCompanies[3] = itCompanies[3].toUpperCase()
console.log(itCompanies[3]);
itCompanies[4] = itCompanies[4].toUpperCase()
console.log(itCompanies[4]);
itCompanies[5] = itCompanies[5].toUpperCase()
console.log(itCompanies[5]);
itCompanies[6] = itCompanies[6].toUpperCase()
console.log(itCompanies[6]); 

console.log(`${itCompanies.join(', ')} son grandes empresas de TI`);
let index = itCompanies.indexOf(prompt("ingrese la empresa: "));
if (index == - 1){
    console.log("esta empresa no existe");
}else{
    console.log(itCompanies[index]);
} 

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(3,7));
console.log(itCompanies.slice(0,4));
// itCompanies.splice(2, 3);
console.log(itCompanies);
itCompanies.shift();
console.log(itCompanies);
itCompanies.pop()
console.log(itCompanies);
itCompanies = [];
console.log(itCompanies); 

