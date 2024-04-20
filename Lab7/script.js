let displayValue = '0';

// Function to append value to display
function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

// Function to clear the display
function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

// Function to perform calculation
function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

// Function to perform backspace
function backspace() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

// Function to update the display
function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

// Function to toggle the options menu
function toggleOptionsMenu() {
    const optionsMenu = document.getElementById('options-menu');
    if (optionsMenu.style.display === 'block') {
        optionsMenu.style.display = 'none';
    } else {
        optionsMenu.style.display = 'block';
    }
}

// Function to toggle calculator modes
function toggleCalculatorMode(mode) {
    const calculatorModes = document.querySelectorAll('.calculator-mode');
    calculatorModes.forEach(calculatorMode => {
        if (calculatorMode.id === mode) {
            calculatorMode.style.display = 'block';
        } else {
            calculatorMode.style.display = 'none';
        }
    });
}

// Function to handle scientific calculator functions
function performScientificOperation(operation) {
    switch(operation) {
        case 'sin':
            displayValue = Math.sin(eval(displayValue)).toString();
            break;
        case 'cos':
            displayValue = Math.cos(eval(displayValue)).toString();
            break;
        case 'tan':
            displayValue = Math.tan(eval(displayValue)).toString();
            break;
        case 'sqrt':
            displayValue = Math.sqrt(eval(displayValue)).toString();
            break;
        case 'pow':
            displayValue = Math.pow(eval(displayValue), 2).toString();
            break;
        case 'pi':
            displayValue = Math.PI.toString();
            break;
        default:
            break;
    }
    updateDisplay();
}

// Function to handle unit conversion operations
function performUnitConversion() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    let result;

    // Check for the type of conversion
    if (fromUnit === toUnit) {
        result = value; // No conversion needed
    } else if (isLengthUnit(fromUnit) && isLengthUnit(toUnit)) {
        result = convertLength(value, fromUnit, toUnit);
    } else if (isWeightUnit(fromUnit) && isWeightUnit(toUnit)) {
        result = convertWeight(value, fromUnit, toUnit);
    } else if (isTemperatureUnit(fromUnit) && isTemperatureUnit(toUnit)) {
        result = convertTemperature(value, fromUnit, toUnit);
    } else {
        result = 'Invalid conversion';
    }

    document.getElementById('result').innerText = result;
}

// Function to handle currency conversion operations
function performCurrencyConversion() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('currencyAmount').value);

    // Call the currency conversion API here and update the display with the converted amount
    // Placeholder code for demonstration purposes
    const convertedAmount = (amount * 1.2).toFixed(2); // Assume a conversion rate of 1.2 for demonstration
    displayValue = convertedAmount.toString();
    updateDisplay();
}

// Helper functions to check units
function isLengthUnit(unit) {
    return ['mm', 'cm', 'm', 'km'].includes(unit);
}

function isWeightUnit(unit) {
    return ['mg', 'g', 'kg', 'ton'].includes(unit);
}

function isTemperatureUnit(unit) {
    return ['C', 'F', 'K'].includes(unit);
}

// Event listener for keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ((/[0-9*/\-+.]|Enter/).test(key)) {
        if (key === 'Enter') {
            calculate(); // Call the calculate function when Enter is pressed
        }
        appendToDisplay(key);
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});

// Event listeners for scientific calculator buttons
document.getElementById('sinButton').addEventListener('click', () => performScientificOperation('sin'));
document.getElementById('cosButton').addEventListener('click', () => performScientificOperation('cos'));
document.getElementById('tanButton').addEventListener('click', () => performScientificOperation('tan'));
document.getElementById('sqrtButton').addEventListener('click', () => performScientificOperation('sqrt'));
document.getElementById('powButton').addEventListener('click', () => performScientificOperation('pow'));
document.getElementById('piButton').addEventListener('click', () => performScientificOperation('pi'));

// Event listener for unit conversion button
document.getElementById('unitConversionButton').addEventListener('click', () => toggleCalculatorMode('unit-conversion-mode'));

// Event listener for currency conversion button
document.getElementById('currencyConversionButton').addEventListener('click', performCurrencyConversion);
