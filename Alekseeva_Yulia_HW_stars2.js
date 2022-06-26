for(let i =1; i < 11; i++) {
    console.log(2 ** i)
}

for(let i =1; i < 11; i++) {
    console.log(MAth.pow(2,i))
}


const pow = function (counter) {
    for(let i =1; i <= counter; i++) {
        console.log(2 ** i)
}}
pow(10)

let result = " "
let smile = ":)"
for(let i =1; i<6; i ++) {
    console.log(smile.repeat(i))
}

function smilik(str, numberPfRows) {
    for(let i =1; i<numberPfRows; i ++) {
        console.log(str.repeat(i))
    }
}
smilik(";)", 10)

function getWordStructure(word) {

    const vowels = 'aeioy'.split ("")
    const consonants = 'bcdfghjklmpqrstvwxz'.split("")
    let vowelsCount = 0;
    let consonantsCount = 0;
    for(const char of word.toLowerCase()) {
if (vowels.includes(char)) vowelsCount++
else if(consonants.includes(char)) consonantsCount++
    }
    console.log(`В слове ${word} : ${vowelsCount} гласных и ${consonantsCount} согласных букв`)

}

getWordStructure("Check-list")
getWordStructure("Case")
getWordStructure("case")

function isPalindrom(word) {
    word = word.toLowerCase()
    for(let i=0, j=word.length-1; i<word.length, j>=0; i++, j--) {
        if(word[i] !== word[j]) {
            return false
        }
    } 
    return true
    
}
console.log(isPalindrom('abba'))
console.log(isPalindrom('Abba'))



function isPalindrom2(word) {
    return word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
}
console.log(isPalindrom2('abba'))
console.log(isPalindrom2('Abba'))

function isPalindrom3(word) {
    word = word.toLowerCase ();
    for(let i=0; i<=word.length/2; i++) {
        if(word[i] !== word[word.length-1-i])
        return false
    }
    return true
}
console.log(isPalindrom3('abba'))
console.log(isPalindrom3('Abba'))
