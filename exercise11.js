// Soal 1
function cariAbjad(input){
    let result = 0
    let abjad = ["a","b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let input1 = input.slice(1,2)
    if(input.length == 2){
        result = abjad.length + abjad.indexOf(input1) + 1
    } else if(input.length ==1){
        result = abjad.indexOf(input) + 1
    }
    return result
}
console.log(cariAbjad("ab"));

//Soal 2

function hilangAngkaDouble (arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
        let penampung = arr[i]
        if(arr.indexOf(penampung) === arr.lastIndexOf(penampung)){
            result.push(arr[i])
        }
    }
    return result
}
console.log(hilangAngkaDouble([1,2,4,1,2]))
console.log(hilangAngkaDouble([1]))
console.log(hilangAngkaDouble([2,2,1]))

// Soal 3
function anagram (input, t){
    let a = input.split("").sort()
    let b = t.split("").sort()
    let penampung = Boolean
    
    if(input.length !== t.length){
        penampung = false
    }
    for(let i = 0; i < t.length; i++){
        for(let j = 1; j <= i; j++){
            if(b[i] == a[j]){
                penampung = true;
            } else {
                penampung = false
            }
        }
        if(penampung == false){
            penampung = false
        }
    }
    return penampung
}

let a = "anagram"
let b = a.split("")
console.log(anagram("nagaram", "anagram"));
console.log(anagram("rat", "car")); // ini false karena loop terakhir, nilainya false
console.log(anagram("rat", "tar")); // ini false karena loop terakhir, nilainya false
console.log(a[0]);

let c = "anagram"
let d = a.split("").sort()
console.log(d);

// Soal 4

const climbStairs = (n) => {
    if (n === 1) {
        return 1;
    }
    
    const dp = [0, 1, 2];
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
};

console.log(climbStairs(5));