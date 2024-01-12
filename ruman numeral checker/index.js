    function convertToRoman(num) {
      if (num <= 0) {
        return 'Please enter a number greater than 0';
      }
      if (num >= 4000) {
        return 'Please enter a number less than 4000';
      }

      var romanSymbols = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
      ];

      var result = '';

      for (var i = 0; i < romanSymbols.length; i++) {
        while (num >= romanSymbols[i].value) {
          result += romanSymbols[i].symbol;
          num -= romanSymbols[i].value;
        }
      }

      return result;
    }

    var numberInput = document.getElementById('number');
    var convertBtn = document.getElementById('convert-btn');
    var outputDiv = document.getElementById('output');

    convertBtn.addEventListener('click', function() {
      var inputNumber = parseInt(numberInput.value.trim(), 10);

      if (isNaN(inputNumber)) {
        outputDiv.textContent = 'Please enter a valid number';
      }else if(inputNumber < 0){
        outputDiv.textContent = 'Please enter a number greater than or equal to 1';  
      }else if (inputNumber > 3999) {
        outputDiv.textContent = 'Please enter a number less than or equal to 3999'
      }
       else {
        var romanNumeral = convertToRoman(inputNumber);
        outputDiv.textContent = romanNumeral;
      }
    });
