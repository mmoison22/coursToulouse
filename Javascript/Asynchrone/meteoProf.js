<!DOCTYPE html>
<html lang="fr">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
    />
    <style>
      body {
        background: lightgrey;
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 100vh;
      }

      .box-container {
        width: 300px;
        height: 300px;
        display: flex;
        flex-wrap: wrap;
      }

      .box {
        width: 150px;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: white;
      }

      #city {
        background-color: rgba(41, 128, 185, 0.75);
      }

      #temp {
        background-color: rgba(43, 78, 101, 0.75);
      }

      #humidity {
        background-color: rgba(52, 152, 219, 0.75);
      }

      #wind {
        background-color: rgba(143, 146, 154, 0.75);
      }

      footer {
        font-size: 3rem;
        color: #ffffff;
        text-align: right;
        width: 100%;
        padding: 2rem 3rem;
      }

      footer img {
        min-height: 80px;
      }
    </style>

    <title>METEO API</title>
  </head>
  <body>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-6 my-3">
          <form>
            <div class="form-group">
              <input type="text" class="form-control" id="inputCity" />
            </div>

            <button type="submit" class="btn btn-info btn-block">
              Rechercher
            </button>
          </form>
        </div>

        <div class="col-12 col-sm-6 d-flex justify-content-center my-3">
          <div class="box-container">
            <div id="city" class="box"></div>
            <div id="temp" class="box"></div>
            <div id="humidity" class="box"></div>
            <div id="wind" class="box"></div>
          </div>
        </div>
      </div>
    </div>

    <script>
      const cle = "b2aed8afc8f05a280ff0ee110fb97c45";
      let city = document.getElementById("city");
      //let ville = "Boulogne";
      let temp = document.getElementById("temp");
      let humid = document.getElementById("humidity");
      let wind = document.getElementById("wind");
      let btn = document.querySelector(".btn");

      function api(ville) {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&appid=${cle}`;

        fetch(url)
          .then((reponse) => {
            return reponse.json();
          })
          .then((info) => {
            console.log(info);
            city.innerHTML = info.name;
            temp.innerHTML =
              info.main.temp + `<i class="fas fa-temperature-low"></i>`;
            humid.innerHTML = info.main.humidity + "%";
            wind.innerHTML =
              info.wind.speed + "m/s" + '<i class="fas fa-wind"></i>';
          })
          .catch((err) => {
            console.log("Erreur catch : " + err);
          });
      }

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        let ville = document.getElementById("inputCity");
        api(ville.value);
      });

      api("Paris");
    </script>
  </body>
</html>

