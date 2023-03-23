function display(val) {
    document.querySelector('#result').value += val;
}

function clearScreen() {
    document.querySelector('#result').value = "";
}

function solve() {
    var x = document.querySelector('#result').value;
    var y = eval(x);
    document.querySelector('#result').value = y;
    return y;
}

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case '1':
            document.getElementById('1').click();
            break;
        case '2':
            document.getElementById('2').click();
            break;
        case '3':
            document.getElementById('3').click();
            break;
        case '4':
            document.getElementById('4').click();
            break;
        case '5':
            document.getElementById('5').click();
            break;
        case '6':
            document.getElementById('6').click();
            break;
        case '7':
            document.getElementById('7').click();
            break;
        case '8':
            document.getElementById('8').click();
            break;
        case '9':
            document.getElementById('9').click();
            break;
        case '0':
            document.getElementById('0').click();
            break;
        case '/':
            document.getElementById('/').click();
            break;
        case '*':
            document.getElementById('*').click();
            break;
        case '-':
            document.getElementById('-').click();
            break;
        case '+':
            document.getElementById('+').click();
            break;
        case '.':
            document.getElementById('.').click();
            break;
        case 'Enter':
            document.getElementById('=').click();
            break;
        case 'Backspace':
            document.getElementById('C').click();
            break;
        default:
            return;
    }
})