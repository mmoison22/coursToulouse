<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>API GOUV</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
</head>
<body>
  <div class="container mt-5">
    <div class="form-inline mb-5">
      <div class="form-group">
        <select class="form-control">
          <option value="01">Ain</option>
          <option value="02">Aisne</option>
          <option value="03">Allier</option>
          <option value="75">Paris</option>
          <option value="92">Boulogne</option>
          <!-- ... -->
        </select>
      </div>
      <div class="form-group mx-3">
        <select class="form-control">
          <option value="caf">Caisse d’allocations familiales (CAF)</option>
          <option value="cpam">Caisse primaire d’assurance maladie (CPAM)</option>
          <option value="urssaf">Urssaf</option>
          <option value="greta">Greta</option>
          <option value="aaa">aaa</option>
          <!-- ... -->
        </select>
      </div>
      <button class="btn btn-success">Rechercher</button>
    </div>
    <ul class="list-group">
    </ul>
  </div>
  <script>
      const sel = document.querySelectorAll("select");
const dpt = sel[0];
const org = sel[1];
const ul = document.querySelector("ul");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  fetch(
    `https://etablissements-publics.api.gouv.fr/v3/departements/${dpt.value}/${org.value}`
  )
  .then((reponse) => {
      //if ()
    console.log(reponse);
    return reponse.json();
  })
  .then( data => {
    console.log(data);
    //let info = data.features[0].properties.nom;

    for (i=1; i<data.features.length; i++) {
        const li = document.createElement('li');
        const name = data.features[i].properties.nom;
        li.textContent = name;
        ul.appendChild(li);
    }
  })
  .catch( (err) => {
      const li = document.createElement("li");
      li.textContent = "Aucun organisme trouvé !";
      ul.appendChild(li);
      console.log(err);
  });
});

  </script>
</body>
</html>

