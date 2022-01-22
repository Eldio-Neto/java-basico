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

    var numero = parseInt(prompt(digite um numero))

    var dobro = numero + numero

    alert("O dobro de " + numero + " é " + dobro)

    --------------------------------------------------------------------------------














*/
var a = 20

a %= 50

console.log(a)



