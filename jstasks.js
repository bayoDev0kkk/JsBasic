// function factorial(n) {
//     let result = 1;
//     for (let i = n; i > 0; i--) {
//         result *= i;
//     }
//     return result;
// }

// const sum = require("./problems/001-sum");

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

// const users = [
//     { id: "123", name: "Vasiliy", age: 18 },
//     { id: "345", name: "Anna", age: 22 },
//     { id: "567", name: "Igor", age: 20 },
//     { id: "345", name: "Shrek", age: 202 },
//     { id: "789", name: "Irina", age: 24 },
// ];

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

// let arr = [5, 2, 1, -10, 8];

// // ... ваш код для сортировки по убыванию
// const sortArrays = (arr) => {
//     arr.sort((a, b) => {
//         return b - a;
//     });
//     return arr;
// };

// console.log(sortArrays(arr));

// function eachCons(array, n) {
//     let res = [];

//     for (let i = 0; i < array.length; i += n) {
//         res.push(array.slice(i, i + n));
//     }

//     return res;
// }

// let result = eachCons([1, 2, 3, 4, 5, 6], 2);
// console.log(result);

// console.log(getWinner(["23-26", "24-30", "30-27", "35-31"])); // 2
// console.log(getWinner(["36-32", "32-24", "20-28", "30-26"])); // 1
// console.log(getWinner(["36-18", "22-31", "27-21", "19-34"])); // undefined

// const arr = [1, 2, 3, 4, 5];
// let s = 0;
// for (let i = 0; i < arr.length; i++) {
//     s += arr[i];
// }
// console.log(s);

// function getSpringMeltStreak(temperature) {
//     let maxTemp = 0;
//     let tempNow = 0;
//     for (const temp of temperature) {
//         if (temp > 0) {
//             tempNow += 1;
//         } else {
//             maxTemp = tempNow;
//             tempNow = 0;
//         }
//         if (tempNow > maxTemp) {
//             maxTemp = tempNow;
//         }
//     }
//     console.log(maxTemp);
//     return maxTemp;
// }

// console.log(getSpringMeltStreak([-20, 30, -40, 50, 10, -10]));
// console.log(getSpringMeltStreak([10, 20, 30, 1, -10, 1, 2, 3]));
// console.log(getSpringMeltStreak([-10, 0, -10, 0, -10]));

// function getPower(n) {
//     if (n <= 0) return undefined;

//     let power = 0;
//     let num = 2;
//     // while (num > 1) {
//     //     if (num % 2 !== 0) return undefined;
//     //     num /= 2;
//     //     power++;
//     //     console.log(power);
//     //     console.log(num, "Num");
//     // }

//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
//     console.log(num);

//     return power;
// }

// getPower(12);

function fibonacci(num) {
    const res = [0, 1];

    for (let i = 2; i <= num; i++) {
        let prev1 = res[i - 1];
        let prev2 = res[i - 2];
        console.log(prev1);
        console.log(prev2);

        res.push(prev1 + prev2);
        console.log(res);
    }
    return res[num];
}
fibonacci(12);
