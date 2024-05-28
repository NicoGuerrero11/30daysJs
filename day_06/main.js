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

for(i = 0; i <= 100; i++){
    // if (i % 2 == 0){console.log(i);}
}

for(i = 0; i <= 100; i++){
    if (i % 2 == 0){
        continue
    }else{console.log(i);}
}