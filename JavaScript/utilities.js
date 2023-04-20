function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const newdepositValueString = inputField.value;
    const newdepositValue = parseFloat(newdepositValueString);
    inputField.value = '';
    return newdepositValue;
}

function getElementValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const currentDepositValueString = elementField.innerText;
    const currentDepositValue = parseFloat(currentDepositValueString);
    return currentDepositValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}