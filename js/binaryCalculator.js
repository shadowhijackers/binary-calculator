
const displayEl = document.getElementById('res');
let displayValue = '';

const button0El = document.getElementById('btn0');
const button1El = document.getElementById('btn1');
const buttonClrEl = document.getElementById('btnClr');
const buttonEqlEl = document.getElementById('btnEql');

const buttonSumEl = document.getElementById('btnSum');
const buttonSubEl = document.getElementById('btnSub');
const buttonMulEl = document.getElementById('btnMul');
const buttonDivEl = document.getElementById('btnDiv');


function updateDisplay(){
    displayEl.innerText = displayValue.split(';').join('');
}

function binaryToDecimal(binary){
    return parseInt(binary, 2);
}

function decimalToBinary(decimal){
    return Number(decimal).toString(2);
}

button0El && button0El.addEventListener('click', (event)=>{
   displayValue += '0';
   updateDisplay()
});

button1El && button1El.addEventListener('click', (event)=>{
    displayValue += '1';
    updateDisplay()
});


buttonSumEl && buttonSumEl.addEventListener('click', (event)=>{
    displayValue += ';+;';
    updateDisplay()
});

buttonSubEl && buttonSubEl.addEventListener('click', (event)=>{
    displayValue += ';-;';
    updateDisplay()
});

buttonMulEl && buttonMulEl.addEventListener('click', (event)=>{
    displayValue += ';*;';
    updateDisplay()
});

buttonDivEl && buttonDivEl.addEventListener('click', (event)=>{
    displayValue += ';/;';
    updateDisplay()
});

buttonClrEl && buttonClrEl.addEventListener('click', (event)=>{
    displayValue  = '';
    updateDisplay()
});

buttonEqlEl && buttonEqlEl.addEventListener('click', (event)=>{
    let values = displayValue.split(';');
    let decimalsValues = 0;
    values.forEach(val=>{
        if(/[+\-/*]/.test(val)){
            decimalsValues += val;
            return;
        }
        decimalsValues += binaryToDecimal(val);
    });

    displayValue = decimalToBinary(eval(String(decimalsValues)));
    updateDisplay()
});
