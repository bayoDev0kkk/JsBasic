/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
    if (password.length < 7) {
        return false;
    }
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasDigit = false;

    for (let char of password) {
        if (char >= "a" && char <= "z") {
            hasLowerCase = true;
        } else if (char >= "A" && char <= "Z") {
            hasUpperCase = true;
        } else if (char >= "0" && char <= "9") {
            hasDigit = true;
        }

        if (hasLowerCase && hasUpperCase && hasDigit) {
            return true;
        }
    }
    return false;

    // return /[0-9a-zA-Z]/.test(password);
}

module.exports = validatePassword;
