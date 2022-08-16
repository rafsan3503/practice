function make_double(num) {
    let double = num * 2;
    return double;
}
function make_triple(num) {
    let triple = num * 3;
    return triple;
}
function getInputValueById(inputId) {
    const input = document.getElementById(inputId);
    const inputValueString = input.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}
function getElementValueById(element) {
    const elementText = document.getElementById(element);
    const elementValueString = elementText.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}