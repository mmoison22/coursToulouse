const keys = Array.from(document.querySelectorAll(".key"));
console.log(keys);
// console.info("data-key = " + listKeys.dataset.key);

for (let k of keys) {
    console.log("data-key = " + k.dataset.key);
    console.log(k);
}



/**************JS Batterie du prof**********************************/
 /*// Création d'un tableau avec la liste des touches
 const keys = Array.from(document.querySelectorAll(".key"));
 //console.log(keys);
 
 
 
 
 function jouerSon(e) {
 console.log(e);
 // créer une variable contenant le data-key
 const son = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
 //console.log(son);
 //console.log(key);
 
 son.play() // déclenche la lecture du fichier audio
 key.classList.add("playing");
 
 setTimeout(function () {
   key.classList.remove("playing");;
 }, 200);
 
 
 
 }
 
 window.addEventListener("keydown", jouerSon);
*/