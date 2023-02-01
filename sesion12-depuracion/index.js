function fibonacci(num){
    let count = 1;
    let fibonacci = 1;
    while(count <= num){
        fibonacci = fibonacci + fibonacci;
        console.log(fibonacci);
        count++;
    }
}

resultado = fibonacci(34);
console.log(resultado);