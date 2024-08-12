/**
 * Функция, которая принимает на вход два массива чисел и возвращает новый массив, содержащий только элементы, которые есть в обоих массивах.
 * @param {number[]} arr1 - первый входной массив чисел
 * @param {number[]} arr2 - второй входной массив чисел
 * @return {number[]} - массив, содержащий только элементы, которые есть в обоих массивах
 */



function intersect(arr1, arr2) {
    return arr1.reduce((acc, el) => {
        if (arr2.includes(el) && !acc.includes(el)) {
            acc.push(el);
        }
        return acc;
    }, []);
}
console.log(intersect([12, 21, 22], [12, 22, 22]));

