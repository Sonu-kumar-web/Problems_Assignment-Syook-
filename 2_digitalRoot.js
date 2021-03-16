const digital_root = (n) =>{
    if(n==10){
        return 1;
    }
    if(n>0 && n<10){
        return n;
    }
    return digital_root(digitSum(n));
}

// To Calculate the sum of digits
const digitSum = (n)=>{
    let sum = 0;
    while(n){
        sum +=n%10;
        n = Math.floor(n / 10);
    }
    return sum;
}

console.log(digital_root(942));