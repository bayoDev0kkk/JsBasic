/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    const numStr =  number.toString();

    const firstHalf = numStr.slice(0, 3);
    const secondHalf = numStr.slice(3);

    const sumFirstHalf = firstHalf
        .split("")
        .reduce((acc, digit) => acc + Number(digit), 0);
    const sumSecondHalf = secondHalf
        .split("")
        .reduce((acc, digit) => acc + Number(digit), 0);

    return sumFirstHalf === sumSecondHalf;
}

module.exports = checkTicket;
