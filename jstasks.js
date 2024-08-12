// function factorial(n) {
//     let result = 1;
//     for (let i = n; i > 0; i--) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)

// function sumRange(a, b) {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         sum += i;
//         console.log(sum);
//     }
//     return sum;
// }

// console.log(sumRange(1, 4));

// function uniqueElements(arr) {
//     const uniqItem = {};
//     arr.forEach((el) => {
//         uniqItem[el] = true;
//     });
//     return Object.keys(uniqItem);
// }

// console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5]));

// function fibonacci(n) {
//     let f = 0;
//     for (let i = n; i >= 0; i--) {
//         f = f[i - 1] + f[i - 2];
//     }
//     return f;
// }

// console.log(fibonacci(5));

// const users = [
//     { id: "1", name: "John" },
//     { id: "2", name: "Anna" },
//     { id: "3", name: "Kate" },
// ];

// const usernamesById = users.reduce(function (result, user) {
//     return {
//         ...result,
//         [user.id]: user.name,
//     };
// }, {});

// console.log(usernamesById);

const users = [
    { id: "123", name: "Vasiliy", age: 18 },
    { id: "345", name: "Anna", age: 22 },
    { id: "567", name: "Igor", age: 20 },
    { id: "345", name: "Shrek", age: 202 },
    { id: "789", name: "Irina", age: 24 },
];

// function userObj(arr, key) {
//     return arr.reduce((acc, el) => {
//         const keyValue = el[key];
//         if (!acc[keyValue]) {
//             acc[keyValue] = [];
//         }
//         acc[keyValue].push(el);
//         return acc;
//     }, {});
// }
// console.log(userObj(users, "id"));



// function userObj(arr, key) {
//     return arr.reduce((acc, el) => {
//         const keyValue = el[key];
//         acc[keyValue] = {
//             name: el.name,
//             age: el.age,
//         };
//         return acc;
//     }, {});
// }
// const usObj = userObj(users, "id");
// console.log(usObj["123"]);
