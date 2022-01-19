const initCalculator = () => {
  // The final result
  let runningTotal = 0;

  // The string first displayed, awaiting for user input
  let buffer = "";

  // The previous operator
  let previousOperator = null;
  const screen = document.querySelector(".screen");


  let buttons = document.querySelectorAll(".button")
    buttons.forEach(button => {
      button.addEventListener("click", function(event) {
        buttonClick(event.target.innerText);
    });
  })

  function buttonClick(value) {
    if (isNaN(parseInt(value))) {
      console.log(value)
      handleSymbol(value);
    } else {
      handleNumber(value);
    }
    rerender();
  }

  function handleNumber(value) {
    if (buffer === "0") {
      // The inputted number will simply replace 0
      buffer = value;
    } else {
      // You are not doing a sum, you are adding numbers in a string as input
      buffer += value;
    }
    // To update the buffer, you need a new function
  }
  function handleSymbol(value) {
    switch (value) {
      case "C":
        buffer = "0";
        runningTotal = 0;
        previousOperator = null;
        break;
      case "=":
        if (previousOperator === null) {
          return;
        }
        // Do the operation
        flushOperator(parseInt(buffer));
        previousOperator = null;
        // Assign the result of the operation after turning it into a string
        buffer = "" + runningTotal;
        runningTotal = 0;
        break;
      case "<-":
        if ( buffer.length === 1) {
          buffer = "0";
        } else {
          buffer = buffer.substring(0, buffer.length - 1)
        }
        break
      default:
        handleMath(value)
        break;
    }
  }

  function handleMath(value) {
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
      runningTotal = intBuffer;
    } else {
      flushOperator(intBuffer);
    }
    previousOperator = value;

    buffer = "0";
  }

  function flushOperator(intBuffer) {
    switch (previousOperator) {
      case "+":
        runningTotal += intBuffer;
        break;
      case "-":
        runningTotal -= intBuffer;
        break;
      case "x":
        runningTotal *= intBuffer;
        break;
      case "%":
        runningTotal /= intBuffer;
        break;
      default:
        break;
    }
  }

  function rerender() {
    screen.innerText = buffer
  }
}


export { initCalculator }
