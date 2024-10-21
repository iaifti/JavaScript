const result = document.getElementById('result');
const length1 = document.getElementById('length');
const upperCase = document.getElementById('upperCase');
const lowerCase = document.getElementById('lowerCase');
const symbols = document.getElementById('symbols');
const numbers = document.getElementById('numbers');
const generate = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');


const randomFunc = {
    lower: getLowerCase,
    upper: getUpperCase,
    number: getNumbers,
    symbol: getSymbols
}

generate.addEventListener('click', () => {
    const length = +length1.value;
    const hasLower = lowerCase.checked;
    const hasUpper = upperCase.checked;
    const hasNumber = numbers.checked;
    const hasSymbol = symbols.checked;

    result.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {

    let generatedPassword = ''; // Renamed from generatePassword to avoid conflict
    const count = lower + upper + number + symbol;
    const countArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if(count === 0) {
        return '';
    }

    // Corrected the loop, use 'i++' instead of 'count++'
    for(let i = 0; i < length; i += count) {
        countArray.forEach(type => {
            const funcName = Object.keys(type)[0]; // Get the function name string
            generatedPassword += randomFunc[funcName](); // Append a random character
        });
    }

    // Make sure the generated password is exactly the right length
    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword; // Moved return statement outside of the loop
}

function getUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSymbols() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

clipboard.addEventListener('click', async () => {
    const password = result.innerText;

    if (!password) {
         return; 
    }

    try {
        await navigator.clipboard.writeText(password);
        alert('Password copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
});
