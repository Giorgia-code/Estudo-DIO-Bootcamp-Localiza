//Funcao normal
var sum = function (a, b) {
  return a + b
}

//Arrow functions (voce pode omitir a palavra function e o return é o que vem depois de =>)
var sum = (a, b) => a + b
console.log(sum(5, 15)) //

//Outra forma de escrever arrow function (quando voce tem apenas um argumento)
var sum = a => a + 15

//Fazendo um return de um objeto
var createObject = () => ({ test: 123 })
console.log(createObject())

//Outra forma de retornar objeto é por meio de uma funcao construtora
function Car() {
  this.foo = 'bar' // o this referencia ao próprio objeto
}
console.log(new Car())

//Default Function Arguments
//Forma clássica
function multiply(a, b) {
  b = b || 1 //essa linha servia para caso a pessoa esquecesse de definir a variavel o próprio sistema lancava como 1 para poder fazer a funcao funcionar, pois caso contrário, o resultado seria NaN
  return a * b
}
console.log(multiply(5))

//Outra forma de fazer
function multiply(a, b) {
  b = typeof b == 'undefined' ? 1 : b //aqui está escrito que se o B for indefinido retorna 1, caso contrário assuma o valor de b que no caso aqui é 0
  return a * b
}
console.log(multiply(5, 0))

//Com o ES6
function multiply(a, b = 1) {
  //aqui está atribuindo o valor 1 para o b caso o mesmo nao seja passado ou seja undefined
  return a * b
}
console.log(multiply(5))

//Enhanced Object Literals
//Forma clássica
var obj = {
  prop1: 'Digital Innovation One'
}

//Com o ES6
function method1() {
  console.log('method called')
}

var obj = {
  method1
}

obj.method1()

//Outra forma
var obj = {
  sum: function sum(a, b) {
    return a + b
  }
}

obj.sum(1, 5)
