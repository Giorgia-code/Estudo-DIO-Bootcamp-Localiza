//Rest operator (...) pega todos os parametros de uma funcao e transforma em um array
function sum(...args) {
  return args.reduce((acc, value) => acc + value, 0)
}
console.log(sum(5, 5, 5, 2, 3)) //o resultado será 20

//Spread operator (transforma os itens do array em parametros para a funcao)
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

const sum = (...rest) => {
  return multiply(...rest)
}

//Destructuring Assiggnment
//Forma clássica
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']]

var apple = arr[0]
var banana = arr[1]
var orange = arr[2]
var tomato = arr[3][0]

//Com o ES6, usando o destructuring para destruir um array
var [apple2, banana2, orange2, [tomato2]] = [
  'Apple',
  'Banana',
  'Orange',
  ['Tomato']
]

//Com o ES6, usando o destructuring para destruir um objeto
var obj = {
  name: 'Giorgia',
  props: {
    age: 30
  }
}
var { name } = obj
var {
  props: { age }
} = obj
console.log(name)

//Com o ES6, usando o destructuring para funcoes
function sum([a, b] = []) {
  return a + b
}
console.log(sum([5, 5])) // o resultado será 10
