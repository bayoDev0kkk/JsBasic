/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(value) {
     const sortedString = (str) => str.toLowerCase().split('').sort().join('');

     const words = value.match(/\b\w+\b/g) || [];
     
     const seenAnagrams = new Set();
     const anagrams = [];
 
     for (const word of words) {
         const sortedWord = sortedString(word);
         if (!seenAnagrams.has(sortedWord)) {
             const isAnagram = words.some(w => w !== word && sortedString(w) === sortedWord);
             if (isAnagram) {
                 anagrams.push(word);
                 seenAnagrams.add(sortedWord);
             }
         }
     }
 
     return anagrams.join('');
 }
module.exports = searchAnagrams;
