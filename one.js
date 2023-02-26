//console.log("hola como estas")

//funcion recorido c++

factorial = (num) => {
    var total=1;
    for (i=1 ; i<=num ; i++){
        total = total * i;
    }
    return total;
}
console.log(factorial(5))