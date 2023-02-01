function fibonacci(num){
    let acc = 0;
    let curr = 1; 
    let nxt; 1
    let list = [];
    for(let i = 0; i <= num; i++){
        nxt = acc + curr;
        list.push(acc);
        acc = curr;
        curr = nxt;
    }

    return list;
}

console.log(fibonacci(6));