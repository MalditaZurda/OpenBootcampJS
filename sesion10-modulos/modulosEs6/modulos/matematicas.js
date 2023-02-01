export function suma(a,b){
    return a + b;
}

export function eleva(a,b){
    return a**b;
}

export function factorial(n){
    let fact = 1;
    while(n !== 0){
        fact = fact * n;
        n--;
    }
    return fact;
}

