/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
    if (value < 0) return undefined;

    let a = 0,
        b = 1,
        index = 0;

    if (value === a) return index;
    index++;

    while (b <= value) {
        if (b === value) return index;
        let temp = a + b;
        a = b;
        b = temp;
        index++;
    }

    return undefined;
}

module.exports = isFibonacci;
