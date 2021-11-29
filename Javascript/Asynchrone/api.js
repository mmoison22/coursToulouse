const sel = document.querySelectorAll("select");
let dept = sel[0];
let org = sel[1];
const ul = document.querySelector('ul');
const btn = document.querySelector('button');

btn.addEventListener("click", ()=> {
    fetch(`https://etablissements-publics.api.gouv.fr/v3/departements/${dept.value}/${org.value}`)
    // console.log("dept : "+ dept)
    // console.log("org : "+ org)
    .then(

        (res) =>{
            console.log(res);
            return res.json().then((data) => {
                console.log(data);

            })

    });
});
