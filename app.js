// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, 
// utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
// Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome = prompt('Qual é o seu nome?');
console.log('Olá');

//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
while(mensagemBoasVindas == null){
let genero = prompt(`Qual seu gênero? \n(M) para Masculino ou (F) para Feminino`);

if ((['M', 'm', 'f', 'F']).includes(genero)){
    var mensagemBoasVindas = (genero == 'M' ||  genero == 'm') ? 'Bem vindo' : 'Bem vinda';
    console.log(`Seja ${mensagemBoasVindas}, ${nome}`);

    alert(`Seja ${mensagemBoasVindas}, ${nome}`);
}else{
    alert('Erro, por favor digite novamente');
}
}

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?.
//  Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let gostoPessoal = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(gostoPessoal);

/*Crie uma variável chamada "valor1" e outra chamada "valor2", 
 atribuindo a elas valores numéricos de sua escolha. 
 Em seguida, realize a soma desses dois valores e armazene o resultado 
 em uma terceira variável chamada "resultado". Utilize o console.log 
 para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." 
 no console. */

 let valor1 = 7; 
 let valor2 = 26; 

 let resultadoSoma = valor1 + valor2;
 console.log(`A soma de ${valor1} e ${valor2} é igual à ${resultadoSoma}`);

 /*Crie uma variável chamada "valor1" e outra chamada "valor2", 
 atribuindo a elas valores numéricos de sua escolha. 
 Em seguida, realize a subtração desses dois valores e 
 armazene o resultado em uma terceira variável chamada "resultado". 
 Utilize o console.log para mostrar a mensagem 
 "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.*/

let resultadoDiferença = valor1 - valor2;
 console.log(`A soma de ${valor1} e ${valor2} é igual à ${resultadoDiferença}`);

 /*Peça ao usuário para inserir sua idade com prompt. 
 Com base na idade inserida, utilize um if para verificar se a 
 pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.*/

 let idade = prompt('Qual a sua idade?');
 if (idade >= 18){
    console.log('Maior de Idade');
 }else{
    console.log('Menor de Idade');
 }

 /*Crie uma variável "numero" e peça um valor com prompt 
 verifique se é positivo, negativo ou zero. 
 Use if-else para imprimir a respectiva mensagem*/

 let numero = prompt('Digite um valor númerico');
 if (numero == 0) {
    alert(`Você digitou zero, um número neutro`);
 }else if (numero < 0){
    alert('Este número é negativo');
 }else{
    alert('Este número é positivo');
 }

 // Use um loop while para imprimir os números de 1 a 10 no console.

let contador = 0;
while(contador < 10){
    contador++;
    console.log(contador);
}

//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para 
// determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 7; 
if (nota >= 7 && nota <= 10){
    console.log('Aprovado');
}else if (nota < 7){
    console.log('Reprovado');
}else{
    console.log('Nota inserida incorretamente');
}
//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let random = Math.random();
console.log(random);
//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
console.log(parseInt(random * 10 + 1));
//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
console.log(parseInt(random * 100 + 1));


