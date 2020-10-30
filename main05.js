// comenta somente uma linha
/* comenta várias linhas */
// tipagem dinamica: não precisa declarar previamente o tipo da variavel.
/* somente pelo fato de que o texto foi colocado entre aspas duplas o Javascript percebe
   que o tipo da variavel é texto ou string */

/*   var count = 0;
   var tabuada = prompt("Entre com o número da Tabuada: ")
   console.log("Tabuada do " + tabuada)
   while (count<=10)		{
    console.log(tabuada + " x " + count + " = " + count*tabuada);
    count++;	};   // é uma abreviação para count=count+1
/*  no console imprime a tabuada escolhida pelo usuário com mais detalhes */

// algumas funções no Javascript

function soma(n1,n2) 	{
	return n1+n2;				}
/*
alert("Soma de n1 com n2 = n1 + n2 = " + soma(4,8));
/*		exibe uma janela pop-up com o valor 12 que é o resultado da soma de 4 com 8	*/

var n1 = 4;
var n2 = 8;
alert("soma de:  " + n1 + " + " + n2 + " = " + soma(4,8));
/*
function setReplace(frase, nome, novo_nome)	{
	return frase.replace(nome, novo_nome)	}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
/*		exibe na janela pop-up o texto: "Vai Brasil"		*/

var validar = 0 ;
function validaIdade(idade)		{
		var validar;
		if (idade>=18) 			{		validar = true	}
		else								{		validar = false	}
		return validar;						}
var idade = prompt(" Qual a sua idade ? ");
console.log(validaIdade(idade));

// Usando a declaração da variável "validar" no código acima, explica e mostra na prática como o
// Javascript interpreta e executa a diferença entre uma variável local e outra global. 					
