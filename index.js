const express= require('express')
const server = express()
server.use(express.json())

const port = 3000;

const parOrImpar = (number)=>{
  if (number%2==0) return 'Par'
  return 'Impar'
}

const isPrimo = (number)=>{
  if(number<2) return false
  for(i=2;i<number;i++){
    if(number % i == 0) return false
  }
  return true}

server.get('/:value', (req, res) => {
  let randomNumber = req.params.value
  if(randomNumber == 'putSomeNumberHere') res.send(`Digite um número no local de 'putSomeNumberHere'`)
  let resultPrimo
  if(isPrimo(randomNumber) == true) resultPrimo = 'É primo'
  if(isPrimo(randomNumber) == false) resultPrimo = 'Nao é primo'
  res.send(`${randomNumber} ||\n ${resultPrimo}\n  || É ${parOrImpar(randomNumber)}`);
  console.log('Sucess')
});

server.listen(port, ()=>{console.log(`Running at 'localhost:${port}/putSomeNumberHere '`)})
