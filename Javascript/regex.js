//Création
const regex1 = /abc/; //motif à rechercher
const regex2 = new RegExp('abc'); //instanciation de l'objet regex

//Ajout d'option (= flag = marqueur)
const regex3 = /abc/i; //i = insensible à la casse
const regex4 = new RegExp('abc', 'i');

//Test
let sports = "football tennis basketball";
let reg1 = /ball/;
let reg2 = /boll/;
console.log("ball ? " + reg1.test(sports)); //true
console.log("boll ? " + reg2.test(sports)); //false

let reg5 = /Ball/;
console.log("Ball ? " + reg5.test(sports)); //false
let reg6 = /Ball/i; //insensibilité à la casse donc
console.log("Ball insensible casse ? " + reg6.test(sports)); //devient true

let phrase = "Il fere très beau sur la ville de Bordeaux demain.";
let reg3 = /beau|ville/;
console.log("beau OU ville ? " + reg3.test(phrase)); //true

//Recherche en début de chaine
let fruits = "Pomme, banane, kiwi, poire";
let reg7 = /^banane/;
console.log("banane au début ? " + reg7.test(fruits)); //false
let reg8 = /^pomme/i;
console.log("pomme (i) au début ? " + reg8.test(fruits)); //true
//Recherche en fin de chaine
let reg9 = /Poire$/i;
console.log("poire (i) à la fin ? " + reg9.test(fruits)); //true

//Classe de caractères
let s1 = "Les singes sages ont des songes";
let reg10 = /s[A]g/i;
console.log("/s[a]g/i; ? " + reg10.test(s1)); //true
let reg11 = /s[io]nges/i;
console.log("/s[io]nges/i; ? " + reg11.test(s1)); //false

//Intervalles
let s2 = "voici 5 nouveaux produits";
let reg12 = /[0123456789]/;
let reg13 = /[0-9]/;
console.log("/[0123456789]/; ? " + reg12.test(s2)); //true
console.log("/[0-9]/; ? " + reg13.test(s2)); //true
let reg14 = /[0-4A-Z]/;
console.log("/[0-4A-Z]/; ? " + reg14.test(s2)); //false car ni majuscule ni chiffres < 5
let reg15 = /[5-9A-Z]/;
console.log("/[5-9A-Z]/; ? " + reg15.test(s2)); //true car chiffre >= 5

//Négation
let nbr = 412;
let reg16 = /^[0-5]/;
console.log("/^[0-5]/; ? " + reg16.test(nbr)); //true car commence par chiffre entre 0 et 5
let reg17 = /[^0-5]/;
console.log("/[^0-5]/; ? " + reg17.test(nbr)); //false car commence par chiffre entre 0 et 5 (alors qu'on veut la négation)

//Les méthodes replace() et match()
let mot = 'maison maison';
let reg18 = /m/;
console.log(" remplacer le premier m : " + mot.replace(reg18, 'r')); //remplace solo le premier m
let reg19 = /m/g; //flag g : sur toutes les occurences du motif
console.log(" remplacer tous les m : " + mot.replace(reg19, 'r')); //remplace tous les m

let phrase2 = "Il fait très Beau aujourd'hui.";
let reg20 = /[A-Z]/;
console.log(" matche /[A-Z]/: " + phrase2.match(reg20)); // solo première occurence (I)
let reg21 = /[A-Z]/g;
console.log(" matche /[A-Z]/g: " + phrase2.match(reg21)); // tableau des occurences (ici, I et B)
console.log(phrase2.match(reg21)); // tableau des occurences (ici, I et B)