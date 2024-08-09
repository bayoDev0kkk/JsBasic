/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */
function anagram(x, y) {
    const normalize = (str) => str.toLowerCase().replace(/[^a-zа-я]/g, "");

    const normX = normalize(x);
    const normY = normalize(y);

    const isOnlyLetters = (str) => /^[a-zа-я]+$/.test(str);
    const sortedX = normX.split("").sort().join("");
    const sortedY = normY.split("").sort().join("");

    return isOnlyLetters(normX) && isOnlyLetters(normY) && sortedX === sortedY;
}

module.exports = anagram;
