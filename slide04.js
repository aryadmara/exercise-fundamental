//Soal 1
// Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10

// ● Parameters : height → triangle height

function buatSegitiga(height){
    let counter = 1
    let hasil = ""
    for(let i = 0; i <= height; i++){
        for(let j = 1; j <=i; j++){
            if(counter < 10){
                hasil = hasil + `0${counter} `
            } 
            else{
                hasil += `${counter} `
            }
            counter++
        }
        hasil += `\n`
    }
    return hasil
}
let nyoba = buatSegitiga(4)
console.log(nyoba);

// Soal 2
// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".

function fizzBuzz(x){
    let result = ""
    for(let i = 1; i <= x; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            result += "FizzBuzz\n"
        } else if (i % 3 === 0){
            result += "Fizz\n"
        } else if (i % 5 === 0){
            result += "Buzz\n"
        } else {
            result += `${i}\n`
        }
    } 
    return result
}

let coba = fizzBuzz(30)
console.log(coba);
//Soal 3
// ● Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))2
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”

function bodyMassIndex(weight, height){
    let formula = weight / (height/100)
    console.log(formula);
    let result = ''
    if(formula < 18.5){
        return result = "less weight"
    } else if (formula > 18.5 && formula <=24.9){
        return result = "ideal"
    } else if (formula >= 25 && formula <=29.9){
        return result = "overweight"
    } else if (formula >= 30 && formula <= 39.9){
        return result = "very overweight"
    } else {
        return result = "obesity"
    }
}
let coba1 = bodyMassIndex(40, 170)
console.log(coba1);

// Soal 4
// Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10] ==> HILANG GANJIL
function removeOdd (arr){
    let penampung = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            penampung.push(arr[i])
        }
    }
    return penampung
}

let coba2 = removeOdd([1,2,3,4,5,6,7,8,9,10])
console.log(coba2);
// Soal 5
// Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]
function splitCloning(x, y){
    let result = []
    let penampungKata =''
    for(let i = 0; i < x.length; i++){
        if(x[i] !== y){
            penampungKata = penampungKata + x[i]
        }
    }
    result.push(penampungKata)
    return result
}


console.log(splitCloning("Hello World", "W"))

// Soal 1
const triangle = (height) => {
    let print =""
    let counter = 1
    for (let index = 0; index < height; index++) { // masukin variabel tiap loopignya
        for (let j = 0; j <= index; j++) {
            if(counter < 10){
                print += "0"
            }
            print += `${counter} `
            counter++
        }
        print += "\n "//task
    }
    return print
}
console.log(triangle(5));

// Fokus bikin baris dulu sejumlah tinggi yang sesuai (vertikal dulu)
// melakukan pengulangan untuk lebarnya (horizontal kemudian)
// setelah  selesai looping di dalam ditambahin baris bari
// saat looping dalam sudah tidak memenuhi compartison baru \n
// karena shpe vertikal dan horizontal udah, jadi tinggal tambahin counter