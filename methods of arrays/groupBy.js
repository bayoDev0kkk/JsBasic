/**
 Задача "Group by". Напишите функцию groupBy(arr, key), которая принимает массив объектов и строку key, соответствующую
 ключу объекта, по которому нужно сгруппировать элементы. Функция должна возвращать новый объект, где каждый ключ -
 уникальное значение, полученное из свойства key, а каждое значение - массив объектов, у которых значение свойства key
 равно ключу. Например, groupBy([{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Alice'}], 'name') должна
 вернуть {Alice: [{id: 1, name: 'Alice'}, {id: 3, name: 'Alice'}], Bob: [{id: 2, name: 'Bob'}]}.
 * */

function groupBy(arr, key) {
        return arr.reduce((acc, el) => {
            const keyValue = el[key];

            if (!acc[keyValue]) {
                acc[keyValue] = [];
            }

            acc[keyValue].push(el);
            return acc;
        }, {});
    }

    const data = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Alice" },
    ];

//     return arr.reduce((acc, el) => {
//         const num = el[key];

//         if (!acc[num]) {
//             acc[num] = [];
//         }

//         acc[num].push(el);
//         return acc;
//     }, {});
// }

// const data = [
//     { id: 1, n: "1" },
//     { id: 2, n: "2" },
//     { id: 3, n: "1" },
// ];

const groupedData = groupBy(data, "name");
// const groupedData = groupBy(data, "n");
console.log(groupedData);
