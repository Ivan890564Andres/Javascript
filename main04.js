// comenta somente uma linha
/* comenta várias linhas */
// tipagem dinamica: não precisa declarar previamente o tipo da variavel.
/* somente pelo fato de que o texto foi colocado entre aspas duplas o Javascript percebe
   que o tipo da variavel é texto ou string */

//   var idade = 18;
//   if (idade>=18) { alert(" maior de idade ")}
//   else { alert(" menor de idade ") };
/* exibe na janela pop-up o texto: maior de idade */

/*   var idade = prompt("Qual é a sua idade ? = ");
   if (idade>=18) { alert(" maior de idade ")}
   else { alert(" menor de idade ") }; */
   /* exibe na janela pop-up uma caixa de texto na qual o usuário deve digitar o valor da
   idade e conforme esse valor digitado pelo usuário, pode exibir uma das 2 mensagens acima */

/*   var nome = prompt("Qual é o seu nome ? = ");
   var idade = prompt("Qual é a sua idade ? = ");
   if (idade>=18) { alert(nome + " é maior de idade e tem " + idade + " anos")}
   else { alert(nome + " é menor de idade pois " + idade + "< 18 anos !!! ") };
   /* exibe na janela pop-up uma caixa de texto na qual o usuário deve digitar o seu nome e sua
   idade e conforme esse valor digitado pelo usuário, pode exibir uma das 2 mensagens acima */

/*   var count = 0;
   while (count<5)		{
   	console.log(count);
   	count=count+1;	};   // pode ser substituido por count++
/* no console imprime a a sequencia: 0,1,2,3,4 um em cada linha de execução*/

/*   var count = 0;
   console.log("Tabuada do 1")
   while (count<=10)		{
    console.log(count);
    count++;	};
/* no console imprime a tabuada do 1 em cada linha de execução*/

/*   var count = 0;
      console.log("Tabuada do 3")
      while (count<=10)		{
       console.log(count+3);
       count++;	};   // é uma abreviação para count=count+1
/* no console imprime a tabuada do 3 em cada linha de execução*/

/*   var count = 0;
   var tabuada = prompt("Entre com o número da Tabuada: ")
   console.log("Tabuada do " + tabuada)
   while (count<=10)		{
    console.log(count*tabuada);
    count++;	};   // é uma abreviação para count=count+1
/* no console imprime a tabuada escolhida pelo usuário */

   var count = 0;
   var tabuada = prompt("Entre com o número da Tabuada: ")
   console.log("Tabuada do " + tabuada)
   while (count<=10)		{
    console.log(tabuada + " x " + count + " = " + count*tabuada);
    count++;	};   // é uma abreviação para count=count+1
/*  no console imprime a tabuada escolhida pelo usuário com mais detalhes */

/*   var count;
      for(count=0; count<=5; count++)
	       {	alert(count); 	}
/*   exibe 6 janelas pop-up em sequencia cada uma com os valores: 0,1,2,3,4,5 um em
          cada janela de pop-up*/

/*          var count;
          var tabuada=2;
          console.log("Tabuada do " + tabuada)
          for(count=0; count<=10; count++)
          {	console.log(count*tabuada);           }
          /*  no console imprime a tabuada do 2 em cada linha de execução*/

/*          var d=new Date();
          alert(d);
          /* exibe a data do sistema numa janela pop-up */
/*
          var d=new Date();
          alert("Dia da semana: " + d.getDay());
          alert("Hora: " + d.getHours());
          /* exibe o dia da semana e as horas do sistema numa janela pop-up */

/*          var d=new Date();
          alert("Mês anterior: " + d.getMonth());
          alert("Mês atual: " + (d.getMonth()+1));
          alert("Mês seguinte: " + (d.getMonth()+2));
          /* exibe o número do Mês anterior ao atual do sistema numa janela pop-up */

/*        var d=new Date();
        alert("Hora Atual : " + d.getHours() + ":" + d.getMinutes() );
          /* exibe a Hora atual do sistema numa janela pop-up */

/*        var d=new Date();
          alert("Minutos : " + d.getMinutes());
          alert("Horas :" + d.getHours());
/* exibe os minutos do sistema numa janela pop-up e depois exibe as horas */
