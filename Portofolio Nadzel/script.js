function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}

function calculate() {
    let display = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(display);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateTrig(func) {
    let display = document.getElementById('display').value;
    let radians = parseFloat(display) * (Math.PI / 180); // Konversi derajat ke radian
    let result;

    if (func === 'sin') {
        result = Math.sin(radians);
    } else if (func === 'cos') {
        result = Math.cos(radians);
    } else if (func === 'tan') {
        result = Math.tan(radians);
    }

    document.getElementById('display').value = result;
}

