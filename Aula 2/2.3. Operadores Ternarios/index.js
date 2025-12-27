let velocidadeAtual = 80;
let limiteVelocidade = 60;

let validaçãoVelocidade = velocidadeAtual > limiteVelocidade ? "Você ultrapassou o limite de velocidade" : "Você está dentro do limite de velocidade";


console.log("Velocidade Atual: " + velocidadeAtual + " km/h");
console.log("Limite de Velocidade: " + limiteVelocidade + " km/h");
console.log(validaçãoVelocidade);