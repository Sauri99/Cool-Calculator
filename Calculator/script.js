let display = document.getElementById('display');
let inputDisplay = document.getElementById('input-display');
let outputDisplay = document.getElementById('output-display');
let historyDisplay = document.getElementById('history-display');
let historyList = [];
let memory = 0;

function appendToDisplay(value) {
    display.value += value;
    updateInputDisplay();
}

function clearDisplay() {
    display.value = '';
    updateInputDisplay();
    updateOutputDisplay();
}

function calculateResult() {
    try {
        let result = eval(display.value.replace(/sqrt/g, 'Math.sqrt').replace(/\*\*2/g, '**2').replace(/\*\*/g, '**').replace(/Math\.sin/g, 'Math.sin').replace(/Math\.cos/g, 'Math.cos').replace(/Math\.tan/g, 'Math.tan').replace(/Math\.log10/g, 'Math.log10').replace(/Math\.exp/g, 'Math.exp'));
        display.value = result;
        updateOutputDisplay();
        addToHistory(display.value, result);
    } catch (error) {
        display.value = 'Error';
        updateOutputDisplay();
    }
}

function addToHistory(expression, result) {
    historyList.push({ expression, result });
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    historyDisplay.innerHTML = '';

    historyList.forEach((item, index) => {
        let historyItem = document.createElement('div');
        historyItem.innerText = `${index + 1}. ${item.expression} = ${item.result}`;
        historyDisplay.appendChild(historyItem);
    });
}

function updateInputDisplay() {
    inputDisplay.innerText = display.value;
}

function updateOutputDisplay() {
    outputDisplay.innerText = display.value;
}

function toggleSign() {
    if (display.value.charAt(0) === '-') {
        display.value = display.value.slice(1);
    } else {
        display.value = '-' + display.value;
    }
    updateInputDisplay();
}

function calculatePercentage() {
    try {
        let result = eval(display.value) / 100;
        display.value = result;
        updateOutputDisplay();
    } catch (error) {
        display.value = 'Error';
        updateOutputDisplay();
    }
}

function memoryAdd() {
    try {
        memory += eval(display.value);
        // You may want to add a visual indicator that memory has been added
    } catch (error) {
        display.value = 'Error';
        updateOutputDisplay();
    }
}

// Add other memory functions: memoryClear, memoryRecall, etc.
// ...
