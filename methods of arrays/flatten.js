/**
    Задача "Flatten".
    Напишите функцию flatten(arr), которая принимает массив, содержащий вложенные массивы, и возвращает новый массив,
    в котором все элементы исходного массива и его вложенных массивов расположены на одном уровне.
    Например, flatten([1, [2, 3], [4, [5, 6]]]) должна вернуть [1, 2, 3, 4, 5, 6].
* */

function flatten(arr) {
    return arr.flat(Infinity);
}
console.log(flatten([1, [2, 3], [4, [5, 6]]]));

//
//

///
//



// function flatten(arr) {
//     return arr.reduce((a, b) => a.concat(b), []);
// }

// console.log(flatten([1, [2, 3], [4, [5, 6]]]));

// let flattened = [
//     [0, 1],
//     [2, 3],
//     [4, 5],
// ].reduce(function (a, b) {
//     return a.concat(b);
// }, []);
// console.log(flattened);

// let friends = [
//     { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 },
// ];

// let allBooks = friends.reduce(function (prev, curr) {
//     return [...prev, ...curr.books];
// }, []);
// console.log(allBooks);
