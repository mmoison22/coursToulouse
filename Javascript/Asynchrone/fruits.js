//let fruits = ["🍉", "🥝", "🍓", "🍍", "🥥", '🍋', '🍏'];

const P = new Promise((resolve, reject) => {
    if (fruits != "") {
        resolve(fruits);
    } else {
        reject("Panier de fruits indisponibles");
    }
});

P.then((miam) => {
    let panier = document.getElementById("panier");
    let nbFruits = miam.length;
    for (let i = 0; i < nbFruits; i++) {
        let span = document.createElement("span");
        panier.appendChild(span).innerHTML += miam[i];
    }
    return nbFruits;
})
    .then((nb) => {
        qte = document.getElementById("qte");
        qte.innerText = `Il y a actuellement ${nb} fruits dans votre panier :`;
    })
    .catch((e) => {
        panier.innerHTML = e;
    });