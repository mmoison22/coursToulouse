/****************************************************LES PROTOTYPES************************************************************************** */

function Article(brand, price, quality) {
    this.marque = brand;
    this.prix = price;
    this.etat = quality;
}
const celu1 = new Article("Samsung", 230, "neuf");
const celu2 = new Article("Sony", 400, "reconditionné");

console.log("Article.prototype : "+JSON.stringify(Article.prototype));
console.log("celu1 : "+JSON.stringify(celu1));
console.log("celu2 : "+JSON.stringify(celu2));

//Ajout propriété "country" sur prototype d'Article
Article.prototype.country = "Corée";
console.log("Article.prototype : "+Article.prototype);
console.log("celu1 : "+JSON.stringify(celu1));
console.log("celu2 : "+JSON.stringify(celu2));