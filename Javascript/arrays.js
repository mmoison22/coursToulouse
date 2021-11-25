const animals = [];
const vegetables = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑", "🍆", "🌶️", "🧄"];
const fruits = ["🍏", "🍌", "🍒", "🍎", "🥝", "🍐", "🍓", "🍉", "🍇", "🍍", "🥥"];
const sweets = ["🍩", "🍪", "🧁", "🍰", "🍦", "🎂"];
let domestic = ["🐶", "🐱", "🐷", "🐮", "🐭", "🐹", "🐔", "", "", ""];
let wild = ["🦁", "🐯", "🦊", "🦝", "🐻", "🐼", "🦆", "🦢", "🐸", "", "", ""];
let jungle = ["🙉", "🦁", "🐯", "🐘", "🦜", "🐍", "", "", ""];
let sea = ["🐋", "🐬", "🐟", "🐠", "🦈", "🐙"];
let insects = ["🐛", "🐜", "🐞", "🕷️", "🦂", "🦋", "🐝", "🦗", "", ""];

// Array.push()
let veg1 = ["🍅", "🍄", "🥦"];
veg1.push("🥒");
console.log(veg1);

// Array.from()
const veg2A = "🍅🍄🥦"; // objet itérable
const veg2B = ["🍅", "🍄", "🥦"]; // array
const tabA = Array.from(veg2A); 
const tabB = Array.from(veg2B);
console.log(tabA); // [ '🍅', '🍄', '🥦' ]
console.log(tabB); // [ '🍅', '🍄', '🥦' ]

// Array.concat()
const dogs = ["🐶", "🐶"];
const cats = ["🐱", "🐱", "🐱"];
const pets = dogs.concat(cats);
console.log(pets); // ["🐶", "🐶", "🐱", "🐱", "🐱"]

// Array.every()
const visitors   = ["🧑", "👽", "🧑", "🧑", "🤖"];
const isHuman    = e => e === "🧑"; // test à passer
const onlyHumans = visitors.every(isHuman); // vérifions si tous les éléments du tableau passent le test
console.log(onlyHumans); // false

// Array.fill()
const sports = ["⚽", "⚽", "⚽", "⚽", "⚽"];
sports.fill("🥎", 1, 4);
console.log(sports); // [ '⚽', '🥎', '🥎', '🥎', '⚽' ]

// Array.filter()
const danseurs  = ["👩👨", "👩👩", "👨", "👩", "👨👨"];
const solo = danseurs.filter(s => s.length/2 === 1); // *
console.log(solo);  // ["👨", "👩"]

// Array.includes
const menu = ["🥦", "🍺", "🍅", "🍷", "🍩", "🥨"];
const donut = menu.includes("🍩");
console.log(donut); // true

// Array.join()
const colors1 = ["🟥", "🟧", "🟨", "🟩", "🟦", "🟣"];
const colors2 = colors1.join("➕");
console.log(colors2); //

// Array.map()
const squares = ["🟥", "🟨", "🟩"];
const pencil = squares.map(d => d + "✏️");
console.log(pencil); //

// Array.reverse()
const numbers = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣"];
const countdown = numbers.reverse();
console.log(countdown); // [ '5️⃣', '4️⃣', '3️⃣', '2️⃣', '1️⃣' ]

// Array.slice()
const couleurs1 = ["🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "🟫", "⬜"];
const couleurs2 = couleurs1.slice(3, 5); 
console.log(couleurs2); // [ '🟩', '🟦' ]

// Array.some()
const QCM = ["✔️", "✔️", "❌", "✔️", "❌"];
const faux = p => p === "❌";
const res = QCM.some(faux);
console.log(res); // true


// Array.sort()
const numeros = ["3️⃣", "2️⃣", "1️⃣", "5️⃣", "4️⃣"];
numeros.sort();
console.log(numeros);


// Array.splice()
const weather = ["☁️", "🌧️", "🌦️", "☁️", "🌩️", "🌈", "❄️"];
weather.splice(2, 4, "☀️");
console.log(weather); // [ '☁️', '☀️', '☁️', '🌩️' ]

// Array.unshift()
const disques = ["🔴", "🟡", "🟢", "🔵"];
disques.unshift("⚪"); 
console.log(disques); // [ '⚪', '🔴', '🟡', '🟢', '🔵' ]




