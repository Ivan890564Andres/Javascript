// comenta somente uma linha
/* comenta várias linhas */
// tipagem dinamica: não precisa declarar previamente o tipo da variavel.
/* somente pelo fato de que o texto foi colocado entre aspas duplas o Javascript percebe
   que o tipo da variavel é texto ou string */


function botao()
	{		alert("Obrigado por Clicar");  	}

function pedeIdade()
	{	var idade = prompt("Qual a sua idade ?");
		alert("Sua idade é:  " + idade + " anos. ");
		console.log("Sua idade é:  " + idade + " anos. ");
		document.getElementById('suaIdade');
		console.log(document.getElementById('suaIdade'));
		document.getElementById('suaIdade').innerHTML = "Sua Idade é = " + idade + " anos. " ;
	}

function novaPageOutraJanela()
	{	window.open("https://www.dac.unicamp.br");
		document.getElementById('pageDac').innerHTML = "Abriu a Página da Dac - Unicamp em outra Janela" ;
	}

function novaPageMesmaJanela()
	{	window.location.href="https://github.com/"
		console.log("Abriu a Página do GitHub na mesma Janela ");			}

function trocar(elemento)
{  	//document.getElementById('mousemove').innerHTML = "Você passou o mouse por cima daquí";
		//alert("trocar texto")
		elemento.innerHTML = "Você passou o mouse por cima daquí"
		console.log("Voce passou o mouse por cima daquí");						}

function voltar(elemento)
{		//document.getElementById('mousemove').innerHTML = "Passe o mouse por aquí novamente";
		elemento.innerHTML = "Passe o mouse por aquí novamente"
		console.log("Voce passou o mouse por cima daquí");						}

function carregarBody()
{		alert("Aviso de Carregamento da Página");
		console.log("A página foi carregada");												}

function funcaoChange(elemento)
{		console.log(elemento.value)

}
