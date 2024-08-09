/**
 * Функция, которая принимает на вход массив строк и возвращает массив строк, содержащих только уникальные значения.
 * @param {string[]} arr - входной массив строк
 * @return {string[]} - массив строк, содержащий только уникальные значения
 */
function uniqueStrings(arr) {
    const uniqueValue = new Set(arr);
    return uniqueValue;
}
console.log(uniqueStrings(["1", "2", "2", "3", "3"]));
