/************************************************************************************************************************************************
         s6u                                                           LES PROTOTYPES
************************************************************************************************************************************************/

function Article(brand, price, quality) {
    this.marque = brand;
    this.prix = price;
    this.etat = quality;  
}

const phone1 = new Article('Samsung', 400, 'moyen');
const phone2 = new Article('Apple', 900, 'moyen');

console.log('Article.prototype ', Article.prototype);
console.log("phone1 ", phone1);
console.log("phone2 ", phone2);

// Ajout de la propriété "country" sur le prototype de "Article"
Article.prototype.country = "Corée";

console.log("Article.prototype ", Article.prototype);
console.log("phone1 ", phone1);
console.log("phone2 ", phone2);

// Affichons la propriété country despuis les objtes phone1 et phone2
console.log("phone1.__proto__ : ", phone1.__proto__);
console.log("phone2.__proto__ : ", phone2.__proto__);

// phone1.__proto___ est-il identique à Article.prototype
console.log(
  "phone1.__proto__===Article.protytype ? " ,  phone1.__proto__ === Article.prototype);

// listons les clés de l'objet phone1
console.log("Object.keys(phone1) ", Object.keys(phone1));

// phone1 est-il condamné à venir de Corée ?. NON !
phone1.country = "USA";
console.log('phone1 ', phone1);

// AJOUT d'une méthode au prototype du constructeur Article
Article.prototype.sonner = function () { return "Riiiiiiiinnng !"};

console.log("phone1.sonner() ", phone1.sonner());

Article.prototype.solde = function() {
this.prix = this.prix*0.9;
return `Le prix soldé est de :  ${this.prix}`;
}

// phone1 et phone2 ne bénéficieront ni des nouvelles propriétés ni des nouvelles 
// méthodes créer sur le prototype de leur constructeur commun "Article"
// car ces dernières auront été crée après coup.
Article.prototype = {marque:'Huawei', annee:2021};
Article.prototype.bip = function () {
  return "Biiiiiiip !";
};

phone3 = new Article('LG', 200, 'moyen');

console.log("phone1.__proto__ : ", phone1.__proto__);
console.log("phone2.__proto__ : ", phone2.__proto__);
console.log("phone3.__proto__ : ", phone3.__proto__);


// CHAINE DE PROTOTYPES
console.log("phone1.__proto__: ", phone1.__proto__);
console.log("phone1.__proto__.__proto__: ", phone1.__proto__.__proto__);
console.log("phone1.__proto__.__proto__.__proto__: ",  phone1.__proto__.__proto__.__proto__);


// Vérifions si une priopriété est prorre à un objet ou si celle-ci est accessible 
// car elle est définie sur le prototype de son constructeur

console.log('phone2.hasOwnProperty(\'country\') : ',phone2.hasOwnProperty('country') );


// CREATION D'UNE CLASSE

class Vehicule {

    constructor(brand, model, color) {
        console.log('Je suis le constructeur de la classe Vehicule');
        this.marque = brand;
        this.modele = model;
        this.couleur = color;
    }

}

class Voiture extends Vehicule {
  constructor(brand='Peugeot', model, color, price, year) {
      console.log("Je suis le constructeur de la classe Voiture");
      super(brand, model, color);
      this.prix = price;
      this.annee = year | 2020; // 2020 sera attribué si aucune valeur de year n'est précisée
  }
}

const clio = new Voiture('Renault', 'Clio', 'gris', 5500, 2019)
console.log('clio :' , clio);

const clio2 = new Voiture();
console.log("clio2 :", clio2);

console.log('clio instanceof Object :', clio instanceof Object);
console.log("clio instanceof Voiture :", clio instanceof Voiture);
console.log("clio instanceof Vehicule :", clio instanceof Vehicule);

console.log("clio.__proto__ :", clio.__proto__);
console.log("clio.__proto__.__proto__ :", clio.__proto__.__proto__);
console.log(
  "clio.__proto__.__proto__.__proto__ :", clio.__proto__.__proto__.__proto__);


  
















