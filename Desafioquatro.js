/*Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.*/
console.log('Bem vindo!')
/* Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador */
let nome = 'Suyanne';
console.log(`Olá, ${nome}!`)
/*Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
 */
let linguagemPreferida = prompt('Qual  a linguagem de programação que você mais gosta?');
console.log(linguagemPreferida);
/*Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
 */
let valOr1 = 13;
let valOr2 = 22;
let resultadO = valor1 + valor2;
console.log(`O resultado entre a soma ${valOr1} e ${valOr2} é ${resultadO}`);
/*Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
 */
let valor1 = 13;
let valor2 = 22;
let resultado = valor1 - valor2;
console.log(`O resultado entre a subtração ${valor1} e ${valor2} é ${resultado}`);

/*Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
 */
let idade = prompt('Qual a sua idade? ')
if (idade >= 18) {
    console.log('Você é maior de idade!');
} else {
    console.log('Você é de menor');
}
/*Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
 */
var numEro = parseFloat(prompt("Digite um número:"));
switch (Math.sign(numEro)) {
    case 1:
        console.log("O número é positivo.");
        break;
    case -1:
        console.log("O número é negativo.");
        break;
    case 0:
        console.log("O número é zero.");
        break;
}
/*Use um loop while para imprimir os números de 1 a 10 no console.
 */
let numerO = 1
while (1 <= 10) {
    console.log(numerO);
    numerO++;
}
/*Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
 */
let nota = 10
if (nota >= 7) {
    console.log('aprovado');
} else {
    console.log('reprovado');
}
/* Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
 */
let numero = Math.random()
console.log(numero);
/*Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
 */
let nUmero = parseFloat(Math.random() * 10 + 1)
console.log(nUmero);
/* Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console. */

let Numero = parseFloat(Math.random() * 1000 + 1);
console.log(Numero);

