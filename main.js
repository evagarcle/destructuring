// EJERCISIOS DESTRUCTURING
// EJERCICIO 1
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

// Primera parte
const [,empleadaAna] = empleados
console.log(empleadaAna);

// Segunda parte
const [empleadoLuis] = empleados
const {email} = empleadoLuis
console.log(email);


// EJERCICIO 2

const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
      "primary": "Overgrow",
      "hidden": "Chlorophyll"
  },
  stats: {
      hp: 45,
      attack: 49,
      deffense: 59,
      speed: 45
  },
  moves: [
      "Growl", "Tackle", "Vine Whip", "Razor Leaf"
  ]
}

// Primera parte
const {name:nombre} = pokemon
console.log(nombre);

// Segunda parte
const {name} = pokemon
console.log(name)

// Tercera parte
const {type} = pokemon
console.log(type)
// Cuarta parte
const {moves} = pokemon
const [,selectedMove] = moves
console.log(selectedMove);


// EJERCICIOS SPREAD/REST

const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
      "primary": "Static",
      "hidden": "Lightning rod"
  },
  stats: {
      hp: 35,
      attack: 55,
      deffense: 40,
      speed: 90
  },
  moves: [
      "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
  ],
}

// Ejercicio 1
const twoPokemonObject = {...pokemon, ...pikachu}
console.log(twoPokemonObject)

// Ejercicio 2
function sumEveryOther(...todosLosValores) {
  return todosLosValores.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

console.log(sumEveryOther(4,4,4))

// (mi forma del ejercicio 2 para practicarlo)
function sumarTodosLosValores (...cadaValor) {
  return cadaValor.reduce((valorPrevio, valorActual) => valorPrevio + valorActual, 0)
}
console.log(sumarTodosLosValores(1,1,1))


// EJERCICIO 3

let suma = 0

function addOnlyNums(...todosLosParametros) {
  for (let parametro of todosLosParametros) {
      if (typeof parametro === 'number') {
          suma += parametro;
      }
  }
  return suma;
}

console.log(addOnlyNums(2, 3, 'paco', 3));


// EJERCICIO 4

function countTheArgs (...cualquierParametro) {
  return cualquierParametro.length
}
console.log('Este array contiene: ' + countTheArgs('eva', 'pepe', 500, 1, 2) + ' argumentos.')



// EJERCICIO 5

let newArray = []

function combineTwoArrays (arr1, arr2) {
  newArray = [...arr1, ...arr2] 
  return newArray
}


console.log(combineTwoArrays(['pepe', true, 56],['sara', 32, false]))