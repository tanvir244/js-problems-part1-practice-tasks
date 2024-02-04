
// task-2
const numbers = [5,6,11,12,98, 5];
let find1 = 5;
let find2 = 25;

function repeated_number(m, n){
    let sum = 0;
    for(const iterator of m){
        if(n === iterator){
            sum = sum + 1;
        }
    }
    return sum;
}
// ====
const totalTimes1 = repeated_number(numbers, find1);
const totalTimes2 = repeated_number(numbers, find2);
console.log(totalTimes1);
console.log(totalTimes2);
    

