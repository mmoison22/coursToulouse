//Création objet de manière littérale
console.log("-Création objet de manière littérale");
let obj1 = {};
obj1.couleur = "rouge";
obj1.parler = function() {
    console.log("Holis !");
}
console.log(obj1);
console.log("couleur objet : " + obj1.couleur);
obj1.parler();

//Création objet de manière littérale en notation json
console.log("-Création objet de manière littérale en notation json");
let obj2 = {
    couleur: "bleu",
    marque : "Peugeot",
    parler : function() {
        console.log("c ma 306");
    }
};

console.log(obj2);
console.log("couleur objet : " + obj1.couleur);
obj2.parler();

//Création objet avec le constructeur Object()
console.log("-Création objet avec le constructeur Object()");
let obj3 = new Object();
obj3.couleur = "vert";
obj3.parler = function() {
    console.log("Coucou !");
}
console.log(obj3);
console.log("couleur objet : " + obj3.couleur);
obj1.parler();

//Création objet avec Object().create()
console.log("-Création objet avec Object().create");
const people = {
    isEnglish : true,
    speak: function() {
        console.log("suis je anglais ?" + this.isEnglish);
    }
};

const moi = Object.create(people);
moi.name = "Arthur";
moi.isEnglish = false;
moi.speak();
console.log(people);
console.log(moi);

//Création objet avec assign()
console.log("-Création objet avec assign()");
const p1 = {id:1, name: "Mika", age:34};
const p2 = Object.assign({}, p1);
const p3 = Object.assign({}, p1, {age: 35});
const p4 = Object.assign({}, p1, {dette: 5000});
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

//Spread operator
console.log("-spread operator");
const car = {id: 1, marque: "Citroen", annee:2003};
const car2 = {...car};
car2.couleur = "bleue";
console.log(car);
console.log(car2);

//Fonction constructeur personnalisée
console.log("-Fonction constructeur personnalisée");
const auto1 = {id:1, brand:"Renault", model:"Clio", color:"rouge"};
const auto2 = {id:2, maker:"Renault", type:"Clio", color:"rouge"};
console.log(auto1);
console.log(auto2);

function Vehicule(brand, model, color){
    this.marque=brand;
    this.modele=model;
    this.couleur=color;
};

const vehicule1 = new Vehicule("Peugeot", "306", "bleue");
const vehicule2 = new Vehicule("Audi", "TT", "noire");
console.log(vehicule1);
console.log(vehicule2);

//utilisation mot clé this
console.log("-utilisation du mot clé this");
function Personne (nom, prenom, pays){
    this.lastname = nom;
    this.firstname=prenom;
    this.country=pays;
    this.introduce =  function (){
        console.log(`Je m\'appelle ${this.firstname} ${this.lastname}, je viens de ${this.country}`);
    };
};

let chrisE = new Personne("Evans", "Chris", "USA");
chrisE.introduce();

//différenciation entre les objets
console.log("-différenciation entre les objets");
function Chanteur (nom, prenom, pays){
    this.lastname = nom;
    this.firstname=prenom;
    this.country=pays;
}
let michael = new Chanteur("Jackson", "Michael", "USA");
let adam = new Chanteur("Levine", "Adam", "USA");
adam.album = "Songs about Jane";
console.log("michael.lastname"+michael.lastname);
console.log(michael);
console.log(adam);
console.log(michael.album); //undefined

// //Parcourir les clefs d'un objet
 
// let clefs = Object.keys();

// clefs.map((item))
// //A COMPLETER

// //Ajouter des propriétés à un objet (ES5)
// const music ={
//     band: "London grammar",
//     country: "UK",
// };
// //A COMPLETER


//GETTER and SETTER
console.log("-Getter et Setter");
let membre = {
    nom:"Ethan",
    age:42,
    get Identite(){
        return `${this.nom}, ${this.age} ans`;
    },
    set monId(data){
        [this.name, this.surname] = data.split(" ");
    }
};
console.log(membre.Identite);
membre.Identite = "Liam";
console.log(membre.Identite);

membre.monId = "Liam Hemsworth";
console.log(membre.surname);

//Encapsulation
console.log("-Encapsulation");
function Pays(continent, langue)
  {
    var cont = continent; // variable privée
    var lng = langue; // variable privée

    this.getCont = function() // méthode publique
      {
        return cont;
      };

    this.setCont = function(continent) // méthode publique
      {
         cont = continent ;
      };

    function Infos() {  // fonction privée
            console.log(`Continent = " ${cont} et langue = ${lng}`);
    };

    this.getInfos = function() { // Setter dela fonction privée Infos()
        console.log(Infos());
    };

  }
  let france = new Pays("Europe", "français");
  console.log(france.cont + ", car mot clé var rend la variable privée");
  console.log(france.getCont() + ", car la méthode get est publique (mot clé this)");

  //Comprendre le contexte de this
  console.log("-Comprendre le contexte de this");
  let colors = {
      color1: "bleu",
      color2: "vert",
      color3: "jaune",
      all: function(){
          return this.color1 +", " +this.color2 +", " +this.color3;
      },
  };

  let couleurs = colors.all();
  console.log("couleurs : "+ couleurs);