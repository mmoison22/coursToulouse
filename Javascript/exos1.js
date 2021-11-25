"use strict";
//b=5;
let b=1;
console.log(b);

let a = 0;
console.log(a);
a =a+1;
console.log(a);
a+=1;
console.log(a);
a++;
console.log(a);
++a;
console.log(a);

let c = b++;
let d = ++b;

console.log("b =" + b);
console.log("c = b++ = " + c);
console.log("d = ++b = " + d);

//écrire une chaine de caractere en majuscule
let minus = "abcd";

function afficher(nom) {
    console.log(nom);
}
afficher("Mika");


function capitalize(mot) {
    console.log(mot);
    console.log(mot.charAt(0)); //charAt
    console.log(mot.toUpperCase());
    console.log(mot.charAt(0).toUpperCase() + mot.slice(1));
}
capitalize("julien");

// exo changer la casse de la premiere lettre de chaque mot d'une phrase
//A FAIRE



//ranger chaine de lettres dans l'ordre alphabétique
//utiliser split join trim sort
function classer(chaineAClasser){
    console.log(chaineAClasser.split("").sort().join("").trim());
}

let chaine = "uej ql"
classer(chaine);
classer("ezjv z fhgijrhguvehvuevuegueghieamqpodkfnyyaq");

//fonction qui sort le pays le plus long (operateur ternaire)
let pays3 = ["Canada", "France", "Australie","Angleterre","Liban"]
function paysLePlusLong (tableau){

}
//paysLePlusLong(pays3);


console.log(pays3.sort());
console.log(pays3[0].length);
let plusGrand = 0;
let indicePlusGrand = 0;
for (let i=0;i<pays3.length;i++){
    if (pays3[i].length > plusGrand){
        plusGrand = pays3[i].length;
        indicePlusGrand = i;
    }
}
console.log(pays3[indicePlusGrand]);



/* SOLUTION KIM
let pays = [ "France", "Espagne", "Royaume-Uni", "Italie", "Allemagne", "Les Pays-Bas" ];

function plusLongPays(tab) {
    var max = 0 // on initialise en disant que le plus long est le 1er du tableau
    for(let i=0; i<tab.length; i++) { // on parcourt le tableau du 0 jusqu'à la fin
        tab[i].length <= tab[max].length ? null : max = i; // on fait une comparaison avec l'opérateur ternaire
    }

    return pays[max]; // on retourne le plus long mot
}

console.log(plusLongPays(pays)); */

//chaine de caractères, la premiere lettre du mot qui n'est pas répété
console.log("-------------exo----- chaine de caractères, la premiere lettre du mot qui n'est pas répétée");
let chaineCarac = "aazhee"
console.log(chaineCarac.charAt(0));
console.log(chaineCarac.search(chaineCarac.charAt(0)));
let tabChar = Array.from(chaineCarac)
console.log(tabChar);
let tabCharSorted = tabChar.sort();
console.log(tabCharSorted);

let indiceUnique = 0;
tabCharSorted.includes(tabCharSorted[0], 1);
console.log(tabCharSorted.includes(tabCharSorted[2], 3));
for (let i=0; i<chaineCarac.length;i++){
    if (tabCharSorted.includes(tabCharSorted[i], i+1)){
        console.log("i =" +i);
        console.log("trouvé ailleurs");
        i = i + tabCharSorted.lastIndexOf(tabCharSorted[i]);
        console.log("i =" +i);
        console.log("last index of" +tabCharSorted.lastIndexOf(tabCharSorted[i]));
    } else {
        console.log("unique");
        indiceUnique =i;
        break;
    }
}
console.log("1ere lettre non répétée selon ordre alphabetique : " +tabCharSorted[indiceUnique]);
console.log("Ne marche pas finalement");
console.log("----------------------------fin exo------------------------------------------");



//Exo floutage email
let email = "mika.mika@gmail.com"
//console.log(email.split("@"));
let tab = Array.from(email.split("@"));
email[0].slice(4)
//console.log(tab[0]);
let nonCrypte = tab[0].slice(0,(tab[0].length/2));
//console.log("nonCrypte = " + nonCrypte);
//console.log(tab[0].slice((tab[0].length)/2,tab[0].length));
//console.log(tab[0]);
console.log(nonCrypte + "********@" + tab[1]);

function cacherEmail(courriel) {
    let tab = Array.from(courriel.split("@"));
    let nonCrypte = tab[0].slice(0,(tab[0].length/2));
    console.log(nonCrypte + "********@" + tab[1]);
}

cacherEmail("moisonhfhfhfh.jfhfgfzuzuz@sfr.fr");
//fin Exo floutage email