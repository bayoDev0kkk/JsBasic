/**
 * Функция, которая принимает на вход два массива чисел и возвращает новый массив, содержащий только элементы, которые есть в обоих массивах.
 * @param {number[]} arr1 - первый входной массив чисел
 * @param {number[]} arr2 - второй входной массив чисел
 * @return {number[]} - массив, содержащий только элементы, которые есть в обоих массивах
 */
let globalArr = [];
function intersect(arr1, arr2) {
    return (globalArr = arr1.filter((i) => arr2.includes(i)));
}
intersect([12, 21, 22], [12, 22, 22]);
console.log(globalArr);
