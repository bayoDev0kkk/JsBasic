/**
 Задача "Shuffle". Напишите функцию shuffle(arr), которая принимает массив и перемешивает его элементы в случайном
 порядке. Функция должна изменять исходный массив, а не возвращать новый. Например, shuffle([1, 2, 3, 4, 5]) может
 вернуть [3, 1, 5, 4, 2].
 * */
function shuffle(arr) {
    arr.sort(() => Math.random() - 0.7);

    // for (let i = arr.length - 1; i > 0; i--) {
    //     let j = Math.floor(Math.random() * (i + 1));
    //     [array[i], array[j]] = [array[j], array[i]];
    // }
}
const array = [3, 2, 7, 4, 15];
shuffle(array);
console.log(array);
