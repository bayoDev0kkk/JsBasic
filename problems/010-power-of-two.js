/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {
    if (n <= 0) return undefined; // Не рассматриваем отрицательные числа и ноль
    
    let power = 0;
    let num = n;
    
    while (num > 1) {
        if (num % 2 !== 0) return undefined; // Если число нечетное, значит, не является степенью двойки
        num /= 2;
        power++;
    }
    
    return power;
}

module.exports = getPower;
