/**
 Задача "Chunk". Напишите функцию chunk(arr, size), которая принимает массив и число size, и возвращает новый массив,
 состоящий из подмассивов длиной не более size. Например, chunk([1, 2, 3, 4, 5], 2) должна вернуть [[1, 2], [3, 4], [5]].
 * */
const sliced_arr = [];
function chunk(arr, size) {
    for (let i = 0; i < arr.length; i += size) {
        console.log(i);

        sliced_arr.push(arr.slice(i, i + size));
    }
}
chunk([12, 12, 12, 21, 123, 32], 2);
console.log(sliced_arr);
