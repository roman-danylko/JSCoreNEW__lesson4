// — Напишіть функцію getLength(arr), яка приймає масив arr з стрічок і повертає новий масив з довжиною елементів тих стрічок:

// - const arr1 = getLength([‘Ivan’,‘Pavlo’,‘Ira’]) – запише в змінну масив [4,5,3]. 

// - const arr2 = getLength([‘Oleksiy’,‘Andriana’]) – запише в змінну масив [7,8].

function getLength(arr){
    let newArr = [];
    for (const i in arr) {
        newArr[i] = arr[i].length;
    }
    return newArr;
}

const arr1 = getLength(['Ivan','Pavlo','Ira']);
const arr2 = getLength(['Oleksiy','Andriana'])
console.log(arr1, arr2)

