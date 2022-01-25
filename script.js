// alert("hello my friend")


/* 
---------------------------------aritmeticas--------------------------
    + adição 
    - subtração
    * multiplicação
    / divisão 
    % modulo 
    -- decremento
    ++ incremento
-----------------------------------------------------------------------

----------------------------atribuições---------------------------------

    = recebe
    +=nº indica qual o valor deve ser incrementado à variante
    -=nº  indica qual valor deve ser decrementado à variante
    *=
    /=
    %=
------------------------------------------------------------------------

-----------------------Operadores comparativos --------------------------
    == igual à
    === valor 100% igual, ve a diferença ente texto e numero mesmo que tenha "numero" igual numero
    != não é igual
    !== não igual e nao igual
    > maior que
    > menor que
    >= maior ou igual a 
    <= menor ou igual a 
---------------------------------------------------------------------------

----------------------- operadores logicos ---------------------------------
    && 
    || ou
    ! negativo-quando usada em um valor falso se torna verdadeiro / quando usada no valor verdadeiro se torna falso

    ex1: var a = true
        var b = false
        var c = a && b ------ a é verdadeiro e b é verdadeiro?
        console.log (c) ---     R- false
    
    ex 2:
       var a = true
        var b = true
        var c = a && b ------ a é verdadeiro e b é verdadeiro?
        console.log (c) ---     R- true     

    ex3:
        var idade = 9
        var menor10 = idade <=10
        var maior65 =  idade >=65 
        var gratuidade = menor10 || maior65 ---- vai dar true somente se o menor10 ou maior65 der true

        console.log (menor10) ---     R- true   
        console.log (maior65) ----   R-false
        console.log (gratuidade) -------- true -----------so da false se os 2 var derem false 
    
    ex4:
        var idade = 35
        var maior20 =  idade >= 20
        var menor20 = !maior20 ------ ele está negando a primeira variante ou seja "idade não é maior que 20"

        console.log (maior20) ---     R- true   
        console.log (menor20) ----   R-false
    ------------------------------------------------------------------------------    

    --------------------------transformar string em numeros-----------------------

    parseInt(a) numeros inteiros
    parseFloat(a) numeros quebrados

    ------------------------------------------------------------------------------

    --------------------------- brincadeira com alert -----------------------------

    prompt -    abre uma caixinha par o usuario inserir o nome --- é uma string, entao no caso de valores usar parse para mudar p numero
    alert -  abre uma janela com informações que queremos informar ao usuário

    var numero = parseInt(prompt("digite um numero"))

    var dobro = numero + numero

    alert("O dobro de " + numero + " é " + dobro)

    -------------------------------------------------------------------------------

    -------------------------------IF e else---------------------------------------
    var idade = 5

    console.log(idade)

    if ( idade < 18 ) {
        console.log("não pode")
        console.log("volte futuramente")
    }
    
    else{
        console.log("pode")
        console.log(" qual seu pedido?")
    }
    
    ex:
    var nome = prompt("qual seu nome?")
    var covid = prompt("Oi " + nome + " você está com falta de ar? sim/não")

    if (covid == "sim")
         alert("Procure um medico urgente!")

    else if (covid == "Sim") {
            alert("Procure um medico urgente!")
    }    

    else if (covid == "não") {
        alert("Fique tranquilo, mas em caso de piora volte nesta pagina!")
    }

    else if (covid == "Não") {
        alert("Fique tranquilo, mas em caso de piora volte nesta pagina!")
    }

    else if (covid == "nao") {
        alert("Fique tranquilo, mas em caso de piora volte nesta pagina!")
    }
    else if (covid == "Nao") {
        alert("Fique tranquilo, mas em caso de piora volte nesta pagina!")
    }

    var covid2 = prompt( nome + " você está com febre? sim /não")

    if(covid2 == "sim"){
        alert("Tome medicamentos para febre. \nSe persistir procure um hospital!")

    }
    else if (covid2 == "Sim"){
        alert("Tome medicamentos para febre. \nSe persistir procure um hospital!")

    }
    else if (covid == "Não") {
        alert("Fique tranquilo, mas em caso de piora volte nesta pagina!")
    }
    else if (covid == "não") {
        alert("Fique tranquilo, mas em caso de piora volte nesta pagina!")
    }
    else if (covid2 == "Nao") {
        alert("Fique tranquilo, mas em caso de piora volte nesta pagina!")
    }
    else if (covid2 == "nao") {
        alert("Fique tranquilo, mas em caso de piora volte nesta pagina!")
    }


    if (covid, covid2 == "sim")
        alert("Vá o mais rápido possivel para um Hospital")
--------------------------------------------------------------------------------

------------------- Operador ternario ------------------------------------

? var a true : false

-------------------------------------------------------------------------------

-------------------------- switch ------------------------------------------------

var nota1 = 0
var nota2 = 10

var media = (nota1 + nota2) / 2

var mediac = 7 

var conceito = ""

console.log("Sua nota é " + media)



if ( media >= mediac ){
    conceito = "otimo"
    console.log ("isso é " + conceito)
    
    
}

else{
    conceito = "ruim";
    console.log ("isso é muito " + conceito)
    
}

switch (conceito){
    case "ruim" : console.log("estude mais vagabundo!")
    break
    case "otimo": console.log("você é um otimo aluno!")
    break
    default :
}

----------------------------------------------------------------------------

--------------------------FOR e WHILE---------------------------------------
ex1:
    for (var b = 0; b < a; b++){

        console.log("executando o for pela "+ b + " vez")

    }
    executando o for pela 0 vez
    executando o for pela 1 vez
    executando o for pela 2 vez
    executando o for pela 3 vez
    executando o for pela 4 vez

ex2:

    var a = 5

    while(a < 10){

        console.log("numero " + a )
        numero++ 
    }

    numero 5
    numero 6
    numero 7
    numero 8
    numero 9

ex3:    
    var nome = prompt("Qual seu nome?")
    var apelido = prompt("Qual seu apelido")

    while(nome == apelido){

        alert("Seu apelido não é seu nome")
        apelido = prompt("Qual seu apelido")

    }

    alert ("Oi " + nome + " seu apelido é " + apelido)

-----------------------------------------------------------------------------
-----------------------------------ARRAYS -----------------------------------
    var alunos = new Array("eldio","leticia", "luciane", "neto", "virginia")

    for (var i = 0; i < alunos.length; i++){

        console.log(alunos[i])
    }

    +++++++++++++++++++++++++++++--- OU ---+++++++++++++++++++++++++++++++

    var alunos = ["eldio","leticia", "luciane", "neto", "virginia", "carlos"]

    for (var i in alunos){

        console.log(alunos[i])
    }

    +++++++++++++++++++++++++++++++ OU +++++++++++++++++++++++++++++++++++++++
    
    var alunos = ["eldio","leticia", "luciane", "neto", "virginia", "carlos"]

    for (var i of alunos){

        console.log(i)
}
----------------------------------------------------------------------------------------------    

*/


var alunos = ["eldio","leticia", "luciane", "neto", "virginia", "carlos"]

for (var i of alunos){

    console.log(i)
}











