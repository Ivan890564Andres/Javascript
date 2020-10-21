// comenta somente uma linha
/* comenta várias linhas */
// tipagem dinamica: não precisa declarar previamente o tipo da variavel.
/* somente pelo fato de que o texto foi colocado entre aspas duplas o Javascript percebe
   que o tipo da variavel é texto ou string */

var lista = ["maça","pêra","laranja"]
console.log("todas as frutas da lista = " + lista);	/* exibe a lista com as 3 frutas: maça pera laranja	*/
console.log("1ª fruta da lista = " + lista[0]); /* exibe somente a fruta maça	*/
console.log("2ª fruta da lista = " + lista[1]); /* exibe somente a fruta pera */
console.log("3ª fruta da lista = " + lista[2]); /* exibe somente a fruta laranja	*/

alert("todas as frutas da lista = " + lista);
alert("2ª fruta da lista = " + lista[1]);

lista.push("uva");	/*	acrescenta a uva na lista 	*/
console.log("uso do comando push para incluir uva na lista de frutas ");
console.log("nova lista de frutas = " + lista);

console.log("uso do comando pop para excluir o ultimo elemento da lista de frutas ");
lista.pop(); /*	retira o ultimo elemento da lista de frutas 	*/
console.log("nova lista de frutas = " + lista);

console.log("uso do comando pop para excluir o ultimo elemento da lista de frutas ");
lista.pop();
console.log("nova lista de frutas = " + lista);

console.log("uso do comando lista.length para exibir o número de elementos da lista de frutas ");
console.log("numero de elementos da lista atual = " + lista.length);	/* exibe o número de elementos da lista 	*/

lista.push("mamão","jabuticaba","amora");	/*	acrescenta outras frutas na lista 	*/
console.log("uso do comando push para incluir outras frutas na lista de frutas ");
console.log("nova lista de frutas = " + lista);
console.log("uso do comando lista.length para exibir o número de elementos da lista de frutas ");
console.log("numero de elementos da lista atual = " + lista.length);	/* exibe o número de elementos da lista 	*/

console.log("uso do comando lista.reverse para reverter a ordem dos elementos da lista");
console.log(lista.reverse());

console.log("uso do comando lista.toString para converter a matriz numa string");
console.log("String = " + lista.toString());	/* converte a lista de uma array/matriz para uma string			*/

console.log("uso do comando lista[1] para exibir o 2º elemento da matriz");
console.log("Lista[1] = " + lista[1])	/* exibe somente a segunda fruta da lista:jabuticaba*/

console.log("uso do comando lista.toString[3] para exibir a 4ª letra da String");
console.log("String[3] = " + lista.toString()[3]);

console.log("uso do comando lista.join('-') para mudar o símbolo de separação dos elementos da String");
console.log("String = " + lista.join(" - "));/* coloca um traço entre os elementos do array */

console.log("Cria uma variavel fruta no formato de um dicionário do tipo Json");
console.log("var fruta = {nome: maça, cor: vermelha} ");
var fruta = {nome:"maça", cor:"vermelha"}	/* dicionário do tipo json */
console.log("fruta.nome = " + fruta.nome + "   fruta.cor =  " + fruta.cor);
alert("Cor da Fruta = " + fruta.cor)

console.log("Cria uma variavel frutas no formato de Lista de dicionário do tipo Json");
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva",  cor:"roxa"}]; //lista de dicionários
console.log("Frutas = [0].nome = " + frutas[0].nome + "  [0].cor = " + frutas[0].cor);
console.log("Frutas = [1].nome = " + frutas[1].nome + "  [1].cor = " + frutas[1].cor);
console.log("Frutas[1].nome = " + frutas[1].nome);

alert("Frutas[0].cor = " + frutas[0].cor)
alert("Frutas[1].nome = " + frutas[1].nome);

console.log(frutas);
