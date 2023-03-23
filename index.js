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