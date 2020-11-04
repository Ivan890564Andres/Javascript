// comenta somente uma linha
/* comenta várias linhas */

/* Desafio 02 /03 :	Multiplicação Simples
Você receberá dois valores inteiros.
Faça a leitura e em seguida calcule o produto entre estes dois valores.
Atribua esta operação à variável PROD, mostrando esta de acordo com a mensagem de
saída esperada (exemplo abaixo).

Entrada
A entrada contém 2 valores inteiros.

Saída
Exiba a variável PROD conforme exemplo abaixo, tendo obrigatoriamente um espaço
em branco antes e depois da igualdade.

Exemplos de Entrada: 3 9
Exemplos de Saída: PROD = 27

Exemplos de Entrada: -30 10
Exemplos de Saída: PROD = -300

Exemplos de Entrada: 0 9
Exemplos de Saída: PROD = 0
*/

// Desafio 02 /03 :	Multiplicação Simples

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let PROD = valor1*valor2; // Altere o valor da variável com o cálculo esperado
console.log("PROD = " + PROD);
