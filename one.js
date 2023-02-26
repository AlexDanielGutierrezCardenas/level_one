//console.log("hola como estas")

//funcion recorido c++
console.log("factorial")
factorial = (num) => {
    var total=1;
    for (i=1 ; i<=num ; i++){
        total = total * i;
    }
    return total;
}
console.log(factorial(5))

console.log("fibonacci")
fibonacci = (num) => {
    var a=1,b=0,c=0;
    for (i = 1; i<=num;i++ ){
        console.log(a);
        b=a,c=b,a=b+c;
    }
}
console.log(fibonacci(5))