// alert("Meu primeiro aviso de alerta escrito dentro de um arquivo tipo js")

var nome = "Ivan Andrés Saavedra";
// comenta somente uma linha
/* comenta várias linhas */
// tipagem dinamica: não precisa declarar previamente o tipo da variavel.
/* somente pelo fato de que o texto foi colocado entre aspas duplas o Javascript percebe
   que o tipo da variavel é texto ou string */

//alert("Bem vindo Prezado Visitante  " + nome) // simbolo + pode ser usado para concatenar strings

var idade=29;
// 	alert ("Meu segundo aviso de alerta num arquivo js");
// 	alert ("Bem Vindo:  " + nome); // serve para comentar uma linha no Javascript
  alert (nome + " tem " + idade + " anos " );

  var idade2= 21;
//	alert (nome + " tem " + idade + idade2 + " anos " );
// escreve: Ivan Andrés Saavedra  tem  2921  anos
//  alert (nome + " tem " + (idade + idade2) + " anos " );
// escreve: Ivan Andrés Saavedra  tem  50  anos

console.log(nome); // escreve meu nome no console do browser: Ivan Andrés Saavedra
console.log(idade + idade2); // escreve 50 no console do browser

var frase = "Japão é o país do sol nascente";
console.log(frase);
console.log(frase.replace("Japão","Brasil"));
alert(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase()); //coloca tudo em letra maiúscula
console.log(frase.replace("Japão","Brasil").replace("nascente","poente"));
console.log(frase.toLowerCase()); //coloca tudo em letra minúscula

var n1 = 12;
var n2 = 36;
console.log(n1 + n2);
console.log(" n1 + n2 = " + n1 + n2);
console.log(" n1 + n2 = " + (n1 + n2));

console.log(n1 * n2);
console.log(" n1 * n2 = " + n1 * n2);
console.log(" n1 * n2 = " + (n1 * n2));

console.log(n2 - n1);
console.log(" n2 - n1 = " + n2 - n1);
console.log(" n2 - n1 = " + n2-n1);
console.log(" n2 - n1 = " + (n2 - n1));

console.log(n2 / n1);
console.log(" n2 / n1 = " + n2 / n1);
console.log(" n2 / n1 = " + (n2 / n1));

console.log(n2 ^ n1);
console.log(" n2 ^ n1 = " + n2 ^ n1);
console.log(" n2 ^ n1 = " + (n2 ^ n1));

console.log(n2 ^ 2);
console.log(" n2 ^ 2 = " + n2 ^ 2);
console.log(" n2 ^ 2 = " + (n2 ^ 2));
