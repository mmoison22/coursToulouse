
/***********************************************Les promesses********************************************************* */
// let ok = true;
// let repasFini = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         if(ok) {
//             resolve(console.log("Fini !"));
//         } else {
//             reject(console.log("J'ai pas terminé de manger !"));
//         }
        
//     }, 10000);
// });

const p1 = new Promise(function(resolve, reject){
    console.log("bjr !");
})
console.log(p1);

const p2 = new Promise(function(resolve, reject){
    console.log("holis !");
    resolve("resolve");
    reject("reject");
})
console.log(p2);

const p3 = new Promise(function(resolve, reject){
    console.log("cc !");
    resolve("resolve de p3");
    reject("reject de p3");
})
console.log(p3);
p3.then(() => {
    console.log("then de p3");
});

let r = 0
let Calculer = (a, b)=>{
    const p = new Promise((resolve, reject)=>{
        let somme = a+b;
        resolve(somme);
        reject("addition impossible");
    });
    return p;
};
        
Calculer(1, 7)
.then((res)=>{
    console.log("resultat : " + res)})
.catch((err)=>{
    console.log("erreur : " + err)});
