let velocidadeAtual = 80;
let velocidadeFaixa1 = 110;
let velocidadeFaixa2 = 80;
let velocidadeFaixa3 = 40;



console.log("Velocidade Atual: " + velocidadeAtual + " km/h");
if (velocidadeAtual > velocidadeFaixa1) {
    console.log("Você está acima da velocidade permitida da faixa 1. Multa aplicada!");
} else if (velocidadeAtual > velocidadeFaixa2 && velocidadeAtual <= velocidadeFaixa1) {
    console.log("Você está dentro da velocidade permitida da faixa 2. Atenção!");
} else if (velocidadeAtual > velocidadeFaixa3 && velocidadeAtual <= velocidadeFaixa2) {
    console.log("Você está dentro do limite de velocidade da faixa 3. Continue assim!");
} else {
    console.log("Velocidade muito baixa.");
}