
let nome = "Felipe";
let idade = 25;

//CONCATENAÇÃO
console.log("Nome:" + nome + ",idade" + idade);

//INTERPOLAÇÃO
console.log(`Nome: ${nome}, idade: ${idade}`);


console.log(typeof nome)
console.log(typeof idade)

let soma = "5" + 3
let sub = "5" - 3

console.log(soma)
console.log(sub)

console.log( typeof sub)
console.log(typeof sub)


let numero = "ab"

let convertido = Number(numero)

console.log(typeof convertido)

//OPERAÇÕES RELACIONAIS

//VALIDA IGUALDADE DE VALOR
// "10" == 10 -> TRUE

//VALIDA IGUALDADE DE VALOR E TIPO DE DADO
// "10" ==== 10 -> false

//&&

//||
//!

//let opcao = 2

//switch(opcao)
//{
    //case 1: uhdfjdfjhdhfjds

   // break;
//}

// ESTRUTURADE REPETIÇÃO

let frutas = ["Maçã","Banana", "Acerola", "Uva"]

console.log(frutas);

frutas.forEach(function(nome){
    console.log("Nome:" + fruta);
})

//frutas.forEach(fruta => console.log("Nome: " + fruta))