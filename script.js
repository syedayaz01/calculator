const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operator");
const calculateButton = document.getElementById("calculate");
const clearButton = document.getElementById("clear");

function handleInput(input) {
    if (input === "Enter") {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    } else if (input === "C") {
        display.value = "";
    }  else if (input === "Del") {
        display.value = display.value.slice(0, -1);
    } else if (input === "." && display.value.includes(".")) {
        return; 
    } else {
        display.value += input;
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        handleInput(button.textContent);
    });
});

document.addEventListener("keydown", event => {
    const key = event.key;
    const validInputs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", ".", "=", "(", ")", "Enter", "Backspace"];

    if (validInputs.includes(key)) {
        if (key === "Enter") {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        } else if (key === "Backspace") {
            display.value = display.value.slice(0, -1);
        } else {
            handleInput(key);
        }
    }
});

// Add event listeners to operators for click events
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        const lastChar = display.value.slice(-1);

        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === "(" || lastChar === ")") {
            display.value = display.value.slice(0, -1) + operator.textContent;
        } else {
            handleInput(operator.textContent);
        }
    });
});