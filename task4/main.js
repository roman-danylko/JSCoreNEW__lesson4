// — Напишіть функцію removeDuplicates(arr), яка приймає масив arr з стрічок і повертає новий масив де виключені елементи, що повторюються з масиву arr(ігнорувати чутливість до регістру):

// - const arr1 = removeDuplicates([‘html’,‘css’,‘html’,‘js’]) – запише в змінну масив [‘html’,‘css’,‘js’]. 

// - const arr2 = removeDuplicates([‘html’,‘css’,‘js’,‘html’,‘js’,‘python’,‘js’,‘scss’]) – запише в змінну масив [‘html’,‘css’,‘js’,‘python’,‘scss’]). 

function removeDuplicates(arr){
    debugger;
    let newArr = [];
    for(let b = 0; b < arr.length; b++){
        newArr[b] = arr[b];
    };
    
    for(let i = 0; i < newArr.length; i++){
        let num = newArr.findIndex(element => element = newArr[i]);
        if(typeof num == "number"){
            newArr.splice(num, 1);
        }
    }

    return newArr;
}


const arr1 = removeDuplicates(['html','css','html','js']);
const arr2 = removeDuplicates(['html','css','js','html','js','python','js','scss'])

console.log(arr1);