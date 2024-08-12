/**
 * Функция, которая принимает на вход массив чисел и возвращает наименьшее и наибольшее число в массиве.
 * @param {number[]} arr - входной массив чисел
 * @return {number[]} - массив, содержащий наименьшее и наибольшее число в массиве
 */
function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(arr);
    return [min, max];
}
console.log(minMax([1, 2, 3, 4, 5, 6]));
