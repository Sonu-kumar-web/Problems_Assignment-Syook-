let t = 174;
let maxDistance = 0;
let towns = [];

// Calculate best Sum
const bestSum = (arr)=>{
    for(let i=0; i<arr.length-2;i++){
        for(let j=i+1; j<=arr.length-1; j++){
            for(let k=j+1; k<=arr.length;k++){
                let sum = arr[i]+arr[j]+arr[k];
                if(sum> maxDistance && sum<=t){
                    maxDistance = sum;
                    towns = [arr[i], arr[j], arr[k]];
                }
            }
        }
    }
};

bestSum([50, 55, 57, 58, 60]);
console.log("maxDistance: ", maxDistance);
console.log("Towns", towns);
