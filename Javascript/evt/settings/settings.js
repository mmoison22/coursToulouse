let corps = document.body;
let title = document.title;
let titre_exo = document.getElementById('titre_exo');

corps.style.padding = '0';

titre_exo.innerHTML += title;
titre_exo.style.backgroundColor = '#F0DB4F';
titre_exo.style.color = '#000000';
titre_exo.style.padding = '0';
titre_exo.style.marginTop = '0';
titre_exo.style.marginBottom = '20px';
titre_exo.style.textAlign = 'center';
titre_exo.style.width = '100%';