// Soal 1 (A)
function tanpaSort(arr){
    let low = arr[0]
    let high = arr[0]
    let sum = 0
    
    for (let i = 0; i < arr.length; i++) {
        if(low > arr[i]){
            low = arr[i]
        }
        if (high < arr[i]){
            high = arr[i]
        }
        sum += arr[i]
        //task
    }
    return {
        lowest : low,
        highest : high,
        average : sum / arr.length
    }
}
const arrAy = [12, 5, 23, 18, 4, 45, 32] 
console.log(tanpaSort(arrAy));

// Soal 1 (B)
function pakeSort(arr) {
    const arrSort = arr.sort(function(a,b){
            return a - b
        })
    console.log(arrSort);
    const arrKecil = arr[0]
    console.log(arrKecil);
    const arrBesar = arr[arr.length-1]
    console.log(arrBesar);
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum+= arr[i]
        console.log(sum);
    }
    const avg = sum /arr.length
    return {
        kecil: arrKecil,
        besar: arrBesar,
        average: avg
    }
}
const arrAy1 = [12, 5, 23, 18, 4, 45, 32] 
console.log(pakeSort(arrAy1));

// let numbersAsc = numbers.sort(function(a,b){
//     return a - b
// })

// Soal 2
function gabungKataPisahDan (arr){
    let result = ""
    for (let i = 0; i <= arr.length -1;i++){
        if(i < arr.length -1){
            result += `${arr[i]}, `
        }
        else {
            result += `and ${arr[i]}`
        }
    }
    return result
}
const buahBuahan = ["apple", "banana", "cherry", "date", "kucing", "meong"]
console.log(gabungKataPisahDan(buahBuahan));

// Soal 3
function potongString (str){
    return str.split(" ")
}
const string = "Hello World 123 cuy";
const wordsArray = potongString(string)
console.log(wordsArray)

// Soal 4
function penjumlahanArray(arr1, arr2){
    const resultArr = []
    let pemilah = arr1.length
    if(arr1.length < arr2.length){
        pemilah = arr2.length
    }
    for(let i = 0; i < pemilah; i ++){
        if(arr2[i] == undefined){
            arr2[i] = 0
         }
        if(arr1[i]== undefined){
            arr1[i] = 0
        }
        const hasil = arr1[i] + arr2[i]
        resultArr.push(hasil) 
    }
    return resultArr
}

const arr1 = [1, 2, 3, 5, 6,7]
const arr2 = [3, 2, 1, 5, 5, 6]
console.log(penjumlahanArray(arr1, arr2));

//Soal 5
function addElement (arr, elementBaru){
    if(!arr.includes(elementBaru)){
        arr.push(elementBaru)
    }
    return arr
}

const arr = [1, 2, 3, 4]
console.log(addElement(arr, 4));
console.log(addElement(arr, 7));

