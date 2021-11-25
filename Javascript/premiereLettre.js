function TrouverLettre(str) {
    let tab = str.split('');
    console.log(tab);
    let result = '';
    let cpt = 0;

    for (let x = 0; x < tab.length; x++) {
        cpt = 0;

        for (var y = 0; y < tab.length; y++) {
            if (tab[x] === tab[y]) {
                cpt += 1;
            }
        }

        if (cpt < 2) {
            result = tab[x];
            break;
        }
    }
    return result;
}
console.log(TrouverLettre("azeea"));