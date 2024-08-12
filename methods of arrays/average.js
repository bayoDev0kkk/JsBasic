/**
 * Функция, которая принимает на вход массив чисел и возвращает среднее значение всех элементов массива.
 * @param {number[]} arr - входной массив чисел
 * @return {number} - среднее значение всех элементов массива
 */

let age = [12, 31, 22, 24];

function average(arr) {
    const ageSum = arr.reduce((acc, el) => {
        return acc + el / arr.length;
    }, 0);
    return ageSum;
}
console.log(Math.round(average(age)));
