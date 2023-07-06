function convertToVowels(word) {
    return word.split('').filter(item => item == 'a' || item == 'e' || item == 'i' || item == 'o' || item == 'u').join('')
  }
  
const word = 'thisissomeword'
  const wordWithOnlyVowels = convertToVowels(word)
  console.log(wordWithOnlyVowels) // iioeo

