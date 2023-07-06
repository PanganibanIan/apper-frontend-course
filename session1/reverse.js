function reverse(word) {
     wordSplit = word.split('')
     for (let i = 0, n = wordSplit.length -1; i<=n ; i++,n--) {
        let temp = wordSplit[n]
        wordSplit[n] = wordSplit[i]
        wordSplit[i] = temp
     }
     return wordSplit.join('')
   }
   
   const word = 'hello'
   const reversedWord = reverse(word)
   console.log(reversedWord) // 'olleh'
   