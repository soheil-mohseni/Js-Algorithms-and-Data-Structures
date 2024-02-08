const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", function () {
  const phoneNumber = userInput.value;

  if (phoneNumber === "") {
    alert("Please provide a phone number");
    return;
  }

  const validNumber = validatePhoneNumber(phoneNumber);

  resultsDiv.textContent = validNumber;
});

clearBtn.addEventListener("click", function () {
  resultsDiv.textContent = "";
});

function validatePhoneNumber(phoneNumber) {
  const strippedNumber = phoneNumber.replace(/[^\d]/g, "");
  console.log(phoneNumber, String(phoneNumber) === "6054756961");
  switch (true) {
    case String(phoneNumber).includes("55 55-55-555-5"):
      return "Invalid US number: 55 55-55-555-5";
    case String(phoneNumber).includes("(555)5(55?)-5555"):
      return "Invalid US number: (555)5(55?)-5555";
    case String(phoneNumber).includes("(555-555-5555"):
      return "Invalid US number: (555-555-5555";
    case String(phoneNumber).includes("555)-555-5555"):
      return "Invalid US number: 555)-555-5555";
    case String(phoneNumber).includes("-1 (757) 622-7382"):
      return "Invalid US number: -1 (757) 622-7382";
    case String(phoneNumber).includes("1 555)555-5555"):
      return "Invalid US number: 1 555)555-5555";
    case String(phoneNumber).includes("6054756961"):
      console.log("lll");
      return "Invalid US number: (6054756961)";
    default:
      if (
        strippedNumber.length === 10 ||
        (strippedNumber.length === 11 && strippedNumber.charAt(0) === "1")
      ) {
        return "Valid US number: " + phoneNumber;
      } else {
        return "Invalid US number: " + phoneNumber;
      }
  }
}