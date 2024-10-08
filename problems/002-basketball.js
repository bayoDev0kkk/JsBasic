/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    let teamScore1 = 0;
    let teamScore2 = 0;

    points.forEach((point) => {
        const [score1, score2] = point.split("-").map(Number);

        teamScore1 += score1;
        teamScore2 += score2;
    });
    if (teamScore1 > teamScore2) {
        return 1;
    } else if (teamScore1 < teamScore2) {
        return 2;
    } else {
        undefined;
    }
}

module.exports = getWinner;
