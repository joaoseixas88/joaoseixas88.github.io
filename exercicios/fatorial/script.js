function fatorial(){
    var numero = document.getElementById(`num1`)
    var n1 = Number(numero.value)
    var res = document.getElementById(`res`)
    var fat = 1
    
    if (n1<0){
        alert(`Escolha numeros não negativos`)
        res.innerHTML = `Resultado:`
    }else if (n1==0){        
        res.innerHTML = `${n1}! = ${fat}`
    } else {
        for (c = n1; c>1 ;c--){
            fat*=c
        }
        res.innerHTML = `${n1}! = ${fat}`
    }

}
