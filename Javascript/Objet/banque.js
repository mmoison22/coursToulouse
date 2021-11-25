class Client {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
}

class Compte {
    constructor(titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = solde | 0;
    }
}
Compte.prototype.afficherSolde = function(){
    console.log("Solde du compte" + JSON.stringify(this.titulaire) + " :" + this.solde);
}
Compte.prototype.crediter = function (montant){
    console.log("crédit, solde précédent = " + this.solde);
    this.solde += montant;
    console.log("crédit, solde apres opération = " + this.solde);
}
Compte.prototype.debiter = function (montant){
    console.log("débit, solde précédent = " + this.solde);
    this.solde -= montant;
    console.log("débit, solde apres opération = " + this.solde);
}
class Epargne extends Compte {
    constructor(titulaire, solde, tauxInteret) {
        super(titulaire, solde);
        this.tauxInteret = tauxInteret | 10;
    }
}

let client1 = new Client("Loison", "Mika");
let compte1 = new Compte(client1, 4500);

console.log(client1);
console.log(compte1);

compte1.crediter(2);
console.log(compte1);
compte1.debiter(1000);
console.log(compte1);
compte1.afficherSolde();

let epargne1 = new Epargne(client1, 200);
console.log(epargne1.tauxInteret);
