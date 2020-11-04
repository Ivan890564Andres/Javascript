// comenta somente uma linha
/* comenta várias linhas */

/* Desafio 03 /03 :	Folha de Pagamento
Precisamos saber quanto uma determinada empresa deve pagar para seus colaboradores,
porém temos apenas a quantidade de horas trabalhadas e o valor hora.
Escreva um programa que leia o número de um colaborador, seu número de horas trabalhadas,
o valor que recebe por hora e calcula o salário desse colaborador.
Em seguida, apresente o número e o salário do colaborador, com duas casas decimais.

Entrada
Você receberá 2 números inteiros e 1 número com duas casas decimais, representando o número,
quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada.

Saída
Exiba o número e o salário do colaborador, conforme exemplo abaixo,
com um espaço em branco antes e depois da igualdade.
No caso do salário, também deve haver um espaço em branco após o $.

Exemplos de Entrada: 25 100 5.50
Exemplos de Saída: NUMBER = 25 SALARY = U$ 550.00

Exemplos de Entrada: 1 200 20.50
Exemplos de Saída: NUMBER = 1 SALARY = U$ 4100.00

Exemplos de Entrada: 6 145 15.55
Exemplos de Saída: NUMBER = 6 SALARY = U$ 2254.75
*/

// Desafio 03 /03 :	Folha de Pagamento

let valor1 = parseInt(gets()); // numero do trabalhador
let valor2 = parseInt(gets()); // horas trabalhadas
let valor3 = parseFloat(gets()); // valor por hora trabalhada
let salary = parseFloat(valor2 * valor3).toFixed(2); // Digite aqui o calculo do salário
console.log("NUMBER = " + valor1);
console.log("SALARY = U$ " + salary);
