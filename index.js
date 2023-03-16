const display = (val) => {
    document.querySelector('#result').value += val;
}

const clearScreen = () => {
    document.querySelector('#result').value = "";
}

const solve = () => {
    var x = document.querySelector('#result').value;
    var y = eval(x);
    document.querySelector('#result').value = y;
    return y;
}