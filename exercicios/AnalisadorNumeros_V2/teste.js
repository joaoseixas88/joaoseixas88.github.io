let menor = 0
let maior = 0
let lista = [-2,-24,-1]




for (c in lista){ 
    if (lista[c] > maior) { //Verifica se numero adicionado eh maior que 
        maior=lista[c]      //A variavel (maior), caso seja, maior recebe o valor
    }                       //Do numero verificado
    if (lista[c] < menor){  //A mesma coisa acontece com o menor
    menor=lista[c]
    }
}


console.log(menor)
console.log(maior)