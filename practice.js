document.getElementById("double").addEventListener('click', function () {
    const inputValue = getInputValueById("input-field");
    const doubleNumber = make_double(inputValue);
    
    const elementValue = document.getElementById('head');
    if (isNaN(inputValue) === true) {
        alert('Please input a number');
    }
    else {
        elementValue.innerText = doubleNumber;
    }
    
});

document.getElementById('triple').addEventListener('click', function () {
    const inputValue = getInputValueById('input-field');
    const tripleNumber = make_triple(inputValue);
    const elementValue = document.getElementById('head');
    
    if (isNaN(inputValue) === true) {
        alert("please input a Number")
    }
    else {
        elementValue.innerText = tripleNumber;
    }
})