let result = ''
let operator = ''

function appendtoresult(value) {
    result += value;
    document.getElementById('result').value = result;
}
function setOperator(op){
    operator = op;
    result += operator;
    document.getElementById('result').value = result;
}
function clearresult() {
    result = ''
    operator = ''
    document.getElementById('result').value = result;
}
function displayresult(){
    let expresion = result;
    let answer = eval(expresion)
    document.getElementById('result').value = answer;
    result = answer.toString();
    operator = '';
}