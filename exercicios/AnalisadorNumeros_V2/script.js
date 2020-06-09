//Instancia objetos\\
var numero = document.getElementById(`numero`)
var select = document.getElementById(`seltab`)
var lista = [] //Array que serao adicionados os valores
var resultado = document.getElementById(`res`)

function isNumero(x){
    if (x>=1 && x<=100){
        return true
    } else {
        return false
    }
}

/*Verifica se o numero passado esta na lista
indexOf retorna -1 quando o numero passado
nao eh encontrado no Array
*** REPARAR NA RELACAO TRUE/FALSE***
Como esse codigo verifica se o numero esta na lista
ELe vai retornar um valor verdadeiro caso 
O numero nao seja encontrado
Acho melhor retornar falso para nao encontrado
Acredito que facilita na hora de repassar a condicao para 
A funcao principal. Por exemplo, nesse caso especifico
eu precisei negar com (!) a funcao inLista na verificacao*/
function inLista(x, y){
    if (y.indexOf(x) != -1){
        return true
    } else {
        return false
    }

}



function add(){
    
    let num = Number(numero.value)//Converte o numero
    if (isNumero(num) && !inLista(num,lista)){
        lista.push(num)
        let item = document.createElement(`option`)
        item.text = `Numero (${num}) adicionado.`
        select.appendChild(item)        
        numero.value = `` //Zera o input depois de utilizado

    } else {
        if (!isNumero(num)){
            alert (`Numeros entre 1 e 100, por favor`)
        } else {
            alert (`O numero ja esta na lista.`)
        }
        numero.value = ``
    }
}

function finalizar(){
    let maior = lista[0] //Criei variaveis para serem comparadas
    let menor = lista[0] // com os valores que serao encontrados na lista
    let soma = 0
    let media = 0
    let num = Number(numero.value) // repetindo a conversao porque essa variavel estava presa dentro da outra funcao
    
    if (lista[0] > 0){      //Verifica se o primeiro numero
        maior = 0           //do array eh positivo
        menor = lista[0]    //faz as devidas alteracoes
    } else {                //das variaveis menor e maior
        maior = lista[0]
        menor = 0
    }
    
    if (lista.length==0){ //Verifica se existe algum numero dentro da lista
        alert(`Por favor, digite pelo menos um numero para ser adicionado!`)
    } else {

    for (c in lista){ 
        if (lista[c] > maior) { //Verifica se numero adicionado eh maior que 
            maior=lista[c]      //A variavel (maior), caso seja, maior recebe o valor
        }                       //Do numero verificado
        if (lista[c] < menor){  //A mesma coisa acontece com o menor
        menor=lista[c]
        }
        soma += lista[c]
        media = soma / lista.length
    }
    resultado.innerHTML =(` 
    Temos ${lista.length} numeros.<br><br>
    O maior numero informado foi ${maior}.<br><br>
    O menor numero informado foi ${menor}.<br><br>
    Somando todos os valores, temos: ${soma}.<br><br>
    A media dos valores digitados eh: ${media}.
    `)
   } 
}