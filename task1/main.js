// — Напишіть функцию arrCopy(arr), яка копією всі значення з переданого масиву і повертає новий масив не змінюючи оригінал arr.

// - const arr1 = arrCopy([1,2,3]) – запише в змінну масив [1,2,3].

// - const arr2 = arrCopy([1,2,3,[10,20]]) – запише в змінну масив [1,2,3,[10,20]].

function arrCopy(arr){
    let Arr = arr.concat();
    return Arr;
}

let arr1 = arrCopy([1,2,3]);
const arr2 = arrCopy([1,2,3,[10,20]])





