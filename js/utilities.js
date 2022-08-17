// Function for getting value from an input field or text area.
function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    if (isNaN(inputFieldValue)) {
        alert('Please Enter Number')
        return 0;
    }

    return inputFieldValue;
}

// Function for getting value from text 
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const valueString = element.innerText;
    const value = parseFloat(valueString);
    return value;
}

// Function for set value 

function setTextValueById(elementId, newQuantity) {
    const totalQuantity = document.getElementById(elementId);
    totalQuantity.innerText = newQuantity;

}