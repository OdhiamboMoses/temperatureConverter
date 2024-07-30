const convertToFBtn = document.querySelector("#convertToF");
const convertToCBtn = document.querySelector("#convertToC");
const celsiusInput = document.querySelector("#celsius");
const fahrenheitInput = document.querySelector("#fahrenheit");
const resultDisplay = document.querySelector("#result");
const buttons = document.querySelectorAll("button");
const inputs = document.getElementsByTagName("input");

const celsiusTofFunction = function () {
  const celsius = celsiusInput.value;
  if (celsius !== "") {
    const fahrenheit = (celsius * 9) / 5 + 32;
    resultDisplay.innerText = `${celsius}°C is ${fahrenheit.toFixed(1)}°F`;
    celsiusInput.value = "";
    resultDisplay.style.color = "black";
  } else {
    resultDisplay.innerText = "Input is required";
    resultDisplay.style.color = "red";
  }
};

const fahrenheitTocFunction = function () {
  const fahrenheit = fahrenheitInput.value;
  if (fahrenheit !== "") {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    resultDisplay.innerText = `${fahrenheit}°F is ${celsius.toFixed(1)}°C`;
    fahrenheitInput.value = "";
    resultDisplay.style.color = "black";
  } else {
    resultDisplay.innerText = "Input is required";
    resultDisplay.style.color = "red";
  }
};

convertToFBtn.addEventListener("click", celsiusTofFunction);
convertToCBtn.addEventListener("click", fahrenheitTocFunction);

celsiusInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    celsiusTofFunction();
  }
});

fahrenheitInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    fahrenheitTocFunction();
  }
});

for (let button of buttons) {
  button.style.fontFamily = "Georgia";
}

for (let input of inputs) {
  input.style.border = "1px solid dodgerblue";
}
