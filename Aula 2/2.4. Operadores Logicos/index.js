let temIdadeParaVotar = true;
let TemTituloDeEleitor = true;

let podeVotar = temIdadeParaVotar && TemTituloDeEleitor;

console.log("Pode votar: " + podeVotar); // true

temIdadeParaVotar = true;
TemTituloDeEleitor = false;

podeVotar = temIdadeParaVotar && TemTituloDeEleitor;

console.log("Pode votar: " + podeVotar); // false

temIdadeParaVotar = false;
TemTituloDeEleitor = true;

podeVotar = temIdadeParaVotar && TemTituloDeEleitor;

console.log("Pode votar: " + podeVotar); // false

temIdadeParaVotar = false;
TemTituloDeEleitor = false;

podeVotar = temIdadeParaVotar && TemTituloDeEleitor;

console.log("Pode votar: " + podeVotar); // false   

temIdadeParaVotar = true;
TemTituloDeEleitor = false;

podeVotar = temIdadeParaVotar || TemTituloDeEleitor;

console.log("Pode votar: " + podeVotar); // true

let PodeViajar = !podeVotar;

console.log("Pode viajar: " + PodeViajar); // false


// Exemplo com mais variáveis - operador OR (||) caminha da esquerda para a direita e retorna o primeiro valor verdadeiro que encontrar. 

let cor1 = "verde";
let cor2 = "azul";
let cor3 = "vermelho";

let misturaCores = cor1 || cor2 || cor3;

console.log("Cor da mistura: " + misturaCores); // verde

cor1 = null;
cor2 = "azul";
cor3 = "vermelho";

misturaCores = cor1 || cor2 || cor3;

console.log("Cor da mistura: " + misturaCores); // azul

cor1 = null;
cor2 = null;
cor3 = "vermelho";

misturaCores = cor1 || cor2 || cor3;    
console.log("Cor da mistura: " + misturaCores); // vermelho

cor1 = null;
cor2 = null;
cor3 = null;

misturaCores = cor1 || cor2 || cor3;    
console.log("Cor da mistura: " + misturaCores); // null 