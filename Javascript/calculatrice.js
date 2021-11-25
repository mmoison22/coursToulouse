let input = document.getElementById("res");


let touche = document.getElementsByClassName("bouton");
console.log(touche);
// touche.addEventListener('click', add);

// function add(){
//     let saisie = touche.innerHTML;
//     console.log(saisie);
//     input.innerHTML += saisie;
// }


//CALCUL RESULTAT
let result = document.getElementById("result");
result.addEventListener('click', calcul);

function calcul(){
    let input = document.getElementById("res");
    input.innerHTML = eval(input.innerHTML);
}

//CLEAR
let clear = document.getElementById("clear");
clear.addEventListener('click', clean);

function clean(){
    input.innerHTML = "";
}