/**
 * Функция, которая принимает на вход строку и возвращает true, если она является палиндромом, и false в противном случае.
 * @param {string} str - входная строка
 * @return {boolean} - true, если строка является палиндромом, и false в противном случае
 */
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

// Примеры:
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
