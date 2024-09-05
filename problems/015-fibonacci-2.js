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
    let a = 0;
    let b = 1;
    let index = 0;

    if (value === a) return index;
    index++;

    while (b <= value) {
        if (b === value) return index;
        let res = a + b;
        a = b;
        b = res;
        index++;
    }

    return undefined;
}

module.exports = isFibonacci;
