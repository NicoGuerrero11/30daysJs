// ciclos While and for

// iterar de 0 a 10
//for
/* for(i = 0; i < 11; i++){
    console.log(i);    
}
//while
let b = 0;
while (b < 11){
    console.log(b);
    b++;
}

//do while]
let a = 0;
do{
    console.log(a);
    a++
}while(a < 11);
 */
// ----------------------------

// let sym = "#";
// for(i=0;i<10;i++){
//     console.log(sym);
//     sym += "#";

// }

// -----------------------------

// for(i = 0; i < 11 ; i++){
//     console.log(`${i} X ${i} = ${i * i}`);
// }

// console.log("i","i^2","i^3");
// for(i = 0; i < 11 ; i++){
//     console.log(`${i}  ${i**2}  ${i**3}`);
// }
// ---------------------------------

/* for(i = 0; i <= 100; i++){
    // if (i % 2 == 0){console.log(i);}
}

for(i = 0; i <= 100; i++){
    if (i % 2 == 0){
        continue
    }else{console.log(i);}
} */

/* let sum = 0;
for (i = 0; i <= 100; i++){
    sum += i;
}
console.log(sum); */

/* let sumEven = 0;
let sumOdds = 0;
const arr = [];
for(i = 0; i < 101 ; i++){
    if (i % 2 == 0){
        sumEven += i;
    }else{
        sumOdds += i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdds}.`);
arr.push(sumEven, sumOdds);
console.log(arr); */

function random(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const arr = [];

for(i = 0; i < 5; i++){
    let num = random(50, 10);
    arr.push(num)
}

console.log(arr);
