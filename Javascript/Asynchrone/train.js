let date = new Date();
//date = date.toLocaleString("fr-FR");
console.log(date);
let hours = date.getHours();
console.log(hours);
let bool = true;
const p1 = new Promise((resolve, reject)=>{
    if(bool){
        resolve(date);

    } else {
        reject("date indisponible")
    }
});

p1.then((r)=>{
    let para = document.getElementById("train");
    para.innerText = r;
    // let string = "Le train arrivera à " + r.getHours() + r.getMinutes();
    // para.innerText += string;
})
.catch((er)=> {
    let para = document.getElementById("train");
    para.innerText = er;
});