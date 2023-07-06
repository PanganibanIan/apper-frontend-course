function isPalindrome(word) {
    let reverse = word.split('').reverse().join('')
    return (reverse == word)
  }
  
  const word = 'racecar'
  if (isPalindrome(word)) {
    console.log('It is a palindrome!')
  } else {
    console.log('It is not a palindrome!')
  }