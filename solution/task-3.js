
// task-3
const str = 'Write a function to count the number of vowels in a string';

function countVowels(e){
    let lowerCase = e.toLowerCase();
    let iterator = lowerCase.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let sum = 0;

    for(let elem of iterator){
        if(vowels.includes(elem)){
            sum = sum + 1;
        }
    }
    return sum;
}
const totalVowels = countVowels(str);
console.log(totalVowels);