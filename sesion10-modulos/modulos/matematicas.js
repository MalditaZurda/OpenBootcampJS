function suma(a,b){
    return a + b;
}

function eleva(a,b){
    return a**b;
}

function factorial(n){
    let fact = 1;
    while(n !== 0){
        fact = fact * n;
        n--;
    }
    return fact;
}

module.exports = {
    suma,
    eleva,
    factorial
}