function updateOutput(value) {
    let output = document.getElementById('output').value;
    if (output === '0') {
        output = '';
    }
    document.getElementById('output').value = output + value;
}

function clearOutput() {
    document.getElementById('output').value = '0';
}

function square() {
    let output = document.getElementById('output').value;
    document.getElementById('output').value = output * output;
}

function cube() {
    let output = document.getElementById('output').value;
    document.getElementById('output').value = output * output * output;
}

function calculate() {
    let output = document.getElementById('output').value;
    let result = eval(output);
    if (isNaN(result)) {
        alert("Invalid input value");
    } else {
        document.getElementById('output').value = result;
    }
}

