/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */
function sortTimestamps(list) {
    const convertToSeconds = (timestamp) => {
        const [hours, minutes, seconds] = timestamp.split(':').map(Number);
        return hours * 3600 + minutes * 60 + seconds;
    };
    
    return list.sort((a, b) => convertToSeconds(a) - convertToSeconds(b));
}

module.exports = sortTimestamps;
