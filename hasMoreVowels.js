const hasMoreVowels = (word) => {
    let vowels = word.match(/[aeiou]/gi).length;
            if(vowels > word.length / 2 ){
            return true
        }
    return false
}


  // for(i = 0; i < word.length; i++){
        // for(let k = i+1; k <= word.length; k++){
   // }
// }

console.log(hasMoreVowels("moon"))