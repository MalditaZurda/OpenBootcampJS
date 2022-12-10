let factorial = 0;
let i = 1;

while(i < 10){
    factorial *=  i;
    if(factorial === 0){
      factorial++;
    }else if(i > 9){
      break; 
    }
    i++;
}

console.log(factorial);