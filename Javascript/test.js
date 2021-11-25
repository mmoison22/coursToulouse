var text = 'couleur';
console.log(text);
    //commentaire simple ligne
    /*commentaire multi
    ligne*/

let variable = 5;
let joyau = "rubis";
console.log(joyau);

bonjourEspagnol("Mika"); //hoisting : la fonction est appelée avant sa déclaration mais ça marche quand même ! ;-)
function bonjourEspagnol(name) {
    console.log("Holis " +name+ "!!!" );
}


let a =1;
//let a=3;    THROW erreur, car a est déjà déclarée (ça ne serait pas le cas avec var)
a =2;
console.log(a + "//declaration de variable");

const c =10;

//Scope (portée)
if (true) {
    var n=3;
}
console.log(n + "//etude scope"); //variable chopée même en dehors du bloc if

if (true) {
    let m=3; //variable locale au bloc if
}
//console.log(m); 

//TYPAGE FAIBLE
let m = "m";
let dix = "10";
let d = 10;
let mult = d*dix;
console.log("mult ="+ mult);
console.log("type of mult : " + typeof(mult));
console.log("length de '10' : "+ dix.length);
//console.log("length d'un string : "+ d.length); LENGTH PAS SUR UN NUMBER

let mota = "5";
let motb = "5";
let chiffre = 5;

if (mota == motb) {
    console.log(`mota vaut ${motb}`);
}
if (mota == chiffre) {
    console.log(`mota et chiffre ont la meme valeur`);
}
if (mota === chiffre) {
    console.log(`mota et chiffre types de variables identiques`);
} else {
    console.log(`mota et chiffre sont différents types de variables `);
}


//objets

let objet1 = {animal: "chien"};
let objet2 = {animal: "chien"};
let objet3 = objet1;

console.log(objet1===objet2); //false
console.log(objet1===objet3); //true

/* CONCLUSION : 
si 2 valeurs primitives ont la même valeur alors elles sont égales
2 objets sont identiques quand ils ont la même référence
 */

console.log(objet1);

let motc = new String("abc5");
console.log(`typeof mota :  ${typeof(mota)}`);
console.log(`typeof motb :  ${typeof(motb)}`);
console.log(`typeof motc :  ${typeof(motc)}`);

console.log(`length mota : ${mota.length}`);
console.log(`length motb : ${motb.length}`); //type primitif string mais on peut quand même appeler méthode d'objet length
console.log(`length motc : ${motc.length}`);


//immuabilité des valeurs primitives
let str = "bonjour";
console.log(str[0]); //b
str[0] = "B"; //pas d'erreur mais n'affecte pas un B
console.log(str[0]); //b
str = "Bonjour";
console.log(str[0]); //B

//conversion en nombre
let strToNumb = Number("12");
console.log("conversion string en nombre : typeof = "+ typeof(strToNumb));

console.log(parseInt(6.6, 10));
console.log(parseFloat(6.6, 10));


//function
function afficher(string) {
    console.log(string);
}
afficher("Mika");

//Objet Number
let nombre1 = "123.123";
let nombre2 = nombre1.toString();
console.log("nombre1 = " + nombre1 + ", son typeof est : " + typeof(nombre1));
console.log("nombre2 = " + nombre2 + ", son typeof est : " + typeof(nombre2));
let nombre3 = parseFloat(nombre1).toFixed(2);
console.log("nombre3 = " + nombre3 + ", son typeof est : " + typeof(nombre3));

let number1 = 5123456;
let number2 = number1.toPrecision(4);
console.log("number 1 = "+number1);
console.log("number 2 = "+number2);

//Boucles
//for
for (let i =0; i<10;i++) {
    console.log(i);
}
//do...while
let i = 0;
do {
    console.log(i);
    i++;
} while (i<=5);
//while
let k = 0;
let b = 0;
while (k<8){
    b +=7
    console.log(b);
    k++
}
//break
//A RATTRAPER

//instruction continue
//A RATTRAPER



function factorielle(n) {
    let resultat = 1;
    for (let i = 1; i <= n; i++)
    resultat = resultat * i;
    return resultat;
}
factorielle(5); // affiche: 120
    
// recursivité    
function maFactorielle(m) {
    if (m === 0) { // cas de base
        return 1;
    }
    else {
        return m * maFactorielle(m - 1); // propagation
    }
}
maFactorielle(5); // affiche : 120

//IIFE
(function maIife(){
    console.log("holis !");
})();

//fonction flechée, Lambdas
let add = (a,b) => a+b;
console.log("somme 5 et 8 =" + add(5,8));


//Prof
// //anonyme
// let attention = function () {
//     alert('Je suis un message exécuté par une fonction anonyme !');
// };
// attention();

// //flechée
// let somme = (a, b) => a + b;
// alert(somme(1, 2)); // 3

// let double = n => n * 2;
// alert(double(3)); // 6

// let bonjour = () => alert("Bonjour !");
// bonjour();

//if etc
let greeting = "";
let hour = 12;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

let time = 2;
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

//operateur ternaire (conditionnel)
let chiffre1 = 2;
let chiffre2 = 7;
let x = 0;
let y = 0;

(chiffre1 > 5) ? x = 2 * chiffre1 : x = 10 * chiffre1;

(chiffre2 > 5) ? y = 2 * chiffre2 : y = 10 * chiffre2;

console.log(x); // sortie: 20
console.log(y); // sortie: 14

//switch
fruit = "noix";
switch (fruit) {
    case "Orange":
        console.log("Les oranges sont à 3 euros le kilo.");
        break;
    case "Pomme":
        console.log("Les pommes sont à 4 euros le kilo.");
        break;
    case "Banane":
        console.log("Les bananes sont à 1.5 euros le kilo.");
        break;
    default:
        console.log("Désolé, nous n'avons pas ce que vous recherchez.");
}
console.log("Souhaitez-vous autre chose ?");

//tableaux
let pays = ["Canada", "France", "Australie"];
pays[4] = "Espagne"; // pays = ["Canada", "France", "Australie", "", "Espagne"];
pays.length; // dimension ou taille est 5
let dernier = pays[pays.length - 1]; // Espagne
pays.push("Inde"); // pays = ["Canada", "France", "Australie", "", "Espagne", "Inde"];
pays.pop(); // pays = ["Canada", "France", "Australie", "", "Espagne"];
pays.shift(); // pays = ["France", "Australie", "", "Espagne"];


let pays2 = ["Canada", "France", "Australie","Angleterre","Liban"];
pays2.splice(2, 0, "Italie", "Japon");
// [ "Canada", "France", "Italie", "Japon", "Australie", "Angleterre", "Liban" ]
pays2.splice(2, 1, "Brésil", "Cameroun");
//[ "Canada", "France", "Brésil", "Cameroun", "Angleterre", "Liban" ]

tableau = [
[10, 20, 30, 40],
["bleu", "rouge", "jaune", "verte"],
["philippe", "marie", "jean", "sandra"]
]
console.table(tableau);