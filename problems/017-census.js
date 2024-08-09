/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
    let maxAge = 0; 
    let index = undefined;

    list.forEach((person, i) => {
        if (person.gender === "Male" && person.age > maxAge) {
            maxAge = person.age;
            index = i + 1; 
        }
    });

    return index;
}

module.exports = census;
