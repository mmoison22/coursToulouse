const animals = [];
const vegetables = ["๐", "๐", "๐ฅฆ", "๐ฅ", "๐ฝ", "๐ฅ", "๐ฅ", "๐", "๐ถ๏ธ", "๐ง"];
const fruits = ["๐", "๐", "๐", "๐", "๐ฅ", "๐", "๐", "๐", "๐", "๐", "๐ฅฅ"];
const sweets = ["๐ฉ", "๐ช", "๐ง", "๐ฐ", "๐ฆ", "๐"];
let domestic = ["๐ถ", "๐ฑ", "๐ท", "๐ฎ", "๐ญ", "๐น", "๐", "", "", ""];
let wild = ["๐ฆ", "๐ฏ", "๐ฆ", "๐ฆ", "๐ป", "๐ผ", "๐ฆ", "๐ฆข", "๐ธ", "", "", ""];
let jungle = ["๐", "๐ฆ", "๐ฏ", "๐", "๐ฆ", "๐", "", "", ""];
let sea = ["๐", "๐ฌ", "๐", "๐ ", "๐ฆ", "๐"];
let insects = ["๐", "๐", "๐", "๐ท๏ธ", "๐ฆ", "๐ฆ", "๐", "๐ฆ", "", ""];

// Array.push()
let veg1 = ["๐", "๐", "๐ฅฆ"];
veg1.push("๐ฅ");
console.log(veg1);

// Array.from()
const veg2A = "๐๐๐ฅฆ"; // objet itรฉrable
const veg2B = ["๐", "๐", "๐ฅฆ"]; // array
const tabA = Array.from(veg2A); 
const tabB = Array.from(veg2B);
console.log(tabA); // [ '๐', '๐', '๐ฅฆ' ]
console.log(tabB); // [ '๐', '๐', '๐ฅฆ' ]

// Array.concat()
const dogs = ["๐ถ", "๐ถ"];
const cats = ["๐ฑ", "๐ฑ", "๐ฑ"];
const pets = dogs.concat(cats);
console.log(pets); // ["๐ถ", "๐ถ", "๐ฑ", "๐ฑ", "๐ฑ"]

// Array.every()
const visitors   = ["๐ง", "๐ฝ", "๐ง", "๐ง", "๐ค"];
const isHuman    = e => e === "๐ง"; // test ร  passer
const onlyHumans = visitors.every(isHuman); // vรฉrifions si tous les รฉlรฉments du tableau passent le test
console.log(onlyHumans); // false

// Array.fill()
const sports = ["โฝ", "โฝ", "โฝ", "โฝ", "โฝ"];
sports.fill("๐ฅ", 1, 4);
console.log(sports); // [ 'โฝ', '๐ฅ', '๐ฅ', '๐ฅ', 'โฝ' ]

// Array.filter()
const danseurs  = ["๐ฉ๐จ", "๐ฉ๐ฉ", "๐จ", "๐ฉ", "๐จ๐จ"];
const solo = danseurs.filter(s => s.length/2 === 1); // *
console.log(solo);  // ["๐จ", "๐ฉ"]

// Array.includes
const menu = ["๐ฅฆ", "๐บ", "๐", "๐ท", "๐ฉ", "๐ฅจ"];
const donut = menu.includes("๐ฉ");
console.log(donut); // true

// Array.join()
const colors1 = ["๐ฅ", "๐ง", "๐จ", "๐ฉ", "๐ฆ", "๐ฃ"];
const colors2 = colors1.join("โ");
console.log(colors2); //

// Array.map()
const squares = ["๐ฅ", "๐จ", "๐ฉ"];
const pencil = squares.map(d => d + "โ๏ธ");
console.log(pencil); //

// Array.reverse()
const numbers = ["1๏ธโฃ", "2๏ธโฃ", "3๏ธโฃ", "4๏ธโฃ", "5๏ธโฃ"];
const countdown = numbers.reverse();
console.log(countdown); // [ '5๏ธโฃ', '4๏ธโฃ', '3๏ธโฃ', '2๏ธโฃ', '1๏ธโฃ' ]

// Array.slice()
const couleurs1 = ["๐ฅ", "๐ง", "๐จ", "๐ฉ", "๐ฆ", "๐ช", "๐ซ", "โฌ"];
const couleurs2 = couleurs1.slice(3, 5); 
console.log(couleurs2); // [ '๐ฉ', '๐ฆ' ]

// Array.some()
const QCM = ["โ๏ธ", "โ๏ธ", "โ", "โ๏ธ", "โ"];
const faux = p => p === "โ";
const res = QCM.some(faux);
console.log(res); // true


// Array.sort()
const numeros = ["3๏ธโฃ", "2๏ธโฃ", "1๏ธโฃ", "5๏ธโฃ", "4๏ธโฃ"];
numeros.sort();
console.log(numeros);


// Array.splice()
const weather = ["โ๏ธ", "๐ง๏ธ", "๐ฆ๏ธ", "โ๏ธ", "๐ฉ๏ธ", "๐", "โ๏ธ"];
weather.splice(2, 4, "โ๏ธ");
console.log(weather); // [ 'โ๏ธ', 'โ๏ธ', 'โ๏ธ', '๐ฉ๏ธ' ]

// Array.unshift()
const disques = ["๐ด", "๐ก", "๐ข", "๐ต"];
disques.unshift("โช"); 
console.log(disques); // [ 'โช', '๐ด', '๐ก', '๐ข', '๐ต' ]




