const inputCalc = document.getElementById('inp'),
      resultCalc = document.getElementById('allresult');

function input(i) {
    inputCalc.value = inputCalc.value + i;
}

function result() {
    if ( eval(inputCalc.value) == undefined) {
        resultCalc.value = '0.00';
        inputCalc.value = '0.00';
    } else if ( eval(inputCalc.value) == Infinity) {
        resultCalc.value = '0.00';
        inputCalc.value = 'Dividing by zero is not allowed';
    }
    resultCalc.value = eval(inputCalc.value);
    inputCalc.value = eval(inputCalc.value);
}

function backspace(){
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length-1);
}

function reset(){
    resultCalc.value = '0.00';
    inputCalc.value = '';
}
