
// task-4
const str = 'I am learning Programming to become a programmer';

function longest_word(e){
    let iterator = e.split(' ');
    let highestLengthString = iterator[0];

    for(const elements of iterator) {
        if(elements.length > highestLengthString.length) {
        highestLengthString = elements;
        }
    }
    return highestLengthString;
}
const longestWorld = longest_word(str);
console.log(longestWorld);
