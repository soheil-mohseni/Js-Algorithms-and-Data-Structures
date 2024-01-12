function isPalindrome(str) {
    var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    var reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }

  var userInput = document.getElementById('text-input');
  var checkBtn = document.getElementById('check-btn');
  var resultDiv = document.getElementById('result');

  checkBtn.addEventListener('click', function() {
    var inputText = userInput.value.trim();

    if (inputText === '') {
      alert('Please input a value');
    } else {
      if (isPalindrome(inputText)) {
        resultDiv.textContent = inputText + ' is a palindrome';
      } else {
        resultDiv.textContent = inputText + ' is not a palindrome';
      }
    }
  });