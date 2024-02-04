
/***
 * task-1
 * we know: C / 5 = (F-32) / 9
 * so, F = (9C + 160) / 5
 */
function celsiusToFahrenheit(n){
    const temperature = (9 * n) + 160;
    return temperature / 5;
}
const result = celsiusToFahrenheit(1);
console.log(result);

