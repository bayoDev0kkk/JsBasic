/**
 * Функция, которая принимает на вход строку и возвращает ее обратный порядок.
 * @param {string} str - входная строка
 * @return {string} - строка, обращенная задом наперед
 */
function reverseString(str) {
    let reversed = str.split("").reverse().join('');
    return reversed;
}
console.log(reverseString("abcdefg"));
