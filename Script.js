let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(e) {
    if (e.target.innerHTML === '=') {
        string = calculateExpression(string);
        input.value = string;
    } else if (e.target.innerHTML === 'AC') {
        string = "";
        input.value = string;
    } else if (e.target.innerHTML === 'DEL') {
        string = removeLastCharacter(string);
        input.value = string;
    } else {
        string += e.target.innerHTML;
        input.value = string;
    }
}

function calculateExpression(expression) {
    return eval(expression);
}

function removeLastCharacter(str) {
    return str.substring(0, str.length - 1);
}
