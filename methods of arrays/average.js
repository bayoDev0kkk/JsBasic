/**
 * Функция, которая принимает на вход массив чисел и возвращает среднее значение всех элементов массива.
 * @param {number[]} arr - входной массив чисел
 * @return {number} - среднее значение всех элементов массива
 */

let age = [12, 31, 22, 24];

function average(arr) {
    const ageSum = arr.reduce((accumulator, el) => {
        return accumulator + el;
    }, 0);
    return ageSum / arr.length;
}
console.log(Math.round(average(age)));
