const birthDate = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const showMsg = document.querySelector("#show-message");

showMsg.style.display = "none";

function sumOfBirthDay() {
  let sum = 0;
  const dateSplit = birthDate.value.replaceAll("-", "").split("");

  for (let digit of dateSplit) {
    sum += Number(digit);
  }
  return sum;
}

function showMessage(message) {
  showMsg.style.display = "block";
  showMsg.innerText = message;
}

function clickHandler() {
  if (birthDate.value && luckyNumber.value) {
    if (sumOfBirthDay() % luckyNumber.value === 0) {
      const message = `hurray 🤗🤗🤗 ${luckyNumber.value} is a lucky number`;
      showMessage(message);
    } else {
      const message = `${luckyNumber.value} is not that lucky 🙁🙁🙁🙁`;
      showMessage(message);
    }
  } else {
    const message = "Please enter value in both fields";
    showMessage(message);
  }
}

checkBtn.addEventListener("click", clickHandler);
