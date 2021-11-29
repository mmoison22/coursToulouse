/***********************************************JS Asynchrone********************************************************* */

//SetTimeOut
setTimeout(soir, 3000); //3000ms = 3s
function soir(){
    console.log("Bonsoir");
}

const night = setTimeout( ()=>{
    console.log("Dors bien !");
}, 2000);

//SetInterval
let i = 0;
const compter = setInterval(() => {
    console.log(i);
    i++
}, 2000);
//ClearInterval
//clearInterval(compter);

const test = setTimeout(clearInterval, 15000, compter);

/***********************************************Les promesses********************************************************* */
let ok = true;
let repasFini = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if(ok) {
            resolve(console.log("Fini !"));
        } else {
            reject(console.log("J'ai pas terminé de manger !"));
        }
        
    }, 10000);
});

s