let display = document.getElementById('display');


function input(value) {
    display.value += value;
}


function clearDisplay() {
    display.value = '';
}


function backspace() {
    display.value = display.value.slice(0, -1);
}


function toggleSign() {
    if (display.value) {
        display.value = display.value.startsWith('-')
            ? display.value.slice(1)
            : '-' + display.value;
    }
}


function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
