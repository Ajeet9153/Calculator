let currentDisplay = "";

function updateDisplay() {
  document.querySelector("#display").value = currentDisplay;
}

function appendToDisplay(value) {
  currentDisplay += value;
  updateDisplay();
}

function clearDisplay() {
  currentDisplay = "";
  updateDisplay();
}

function calculateResult() {
  try {
    currentDisplay = eval(currentDisplay);
    updateDisplay();
  } catch (error) {
    currentDisplay = "Error";
    updateDisplay();
  }
}