// — Напишіть функцію arrToString(arr), яка приймає масив arr з чисел і повертає вже масив з стрічками:

// - const arr1 = arrToString([1,2,3]) – запише в змінну масив [‘1’,‘2’,‘3’]. 

// - const arr2 = arrToString([10,200,3333]) – запише в змінну масив [‘10’,‘200’,‘3333’].

function arrToString(arr){
    let arrNew = [];
    for(let i = 0; i < arr.length; i++){
        arrNew[i] = arr[i].toString();
    }
    return arrNew;
}

const arr1 = arrToString([1,2,3]);
const arr2 = arrToString([10,200,3333]);