for(var i=0; i<10; i++){
  //console.log(i)
}

//for crescente
var carros = ['Gol', 'Palio', 'Uno', 'Celta', 'Sandero']
for(var i=0; i < carros.length; i++){
  //console.log(carros[i])
}

//for decrescente - usa se o -1 para pegar o indice a partir do Sandero
var carros = ['Gol', 'Palio', 'Uno', 'Celta', 'Sandero']
for(var i = carros.length-1; i>=0;  i--){
 // console.log(carros[i])
}

//a iteracao é parecida com o exemplo acima, porém não dá para pegar o indice
for (var carro of carros)
console.log(carro);



var i = 0
while(i < carros.length){
  //console.log(carros[i])
    i++
}


//break
var i = 0
while(i < carros.length){
  //console.log(carros[i])
  if (carros[i] === 'Palio'){
    //console.log('Encontreio Palio!')
    break
  }
    i++
}


//continue
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var i = 0
while (i < numeros.length){
  var num = numeros[i]
  i++

  if (num % 2 === 0){
    //console.log(num + ' é par')
    continue
  }

  //console.log(num + ' é ímpar')  
}
console.log('------')

// do while -> executa pelo menos uma vez - faz o DO antes de realizar a condicao.
var j = 30
do {
  j++
 //console.log(j)
} while(j < 10)

