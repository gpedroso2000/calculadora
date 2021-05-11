function writeNumber(element) {
    var inputValue = document.getElementById("display");

    if (inputValue.value == "0" || inputValue.value == "error") {
        inputValue.value = element.textContent;
    }

    else {
        inputValue.value += element.textContent;
    }

}

function writeExp(element) {
    var inputValue = document.getElementById("display");
    inputValue.value += element.textContent;

}

function cleartxt() {
    var display = document.getElementById("display");
    display.value = "0";

}


function calcular() {

    try {

        var display = document.getElementById("display");
        if (display.value != "") {
            var result = eval(display.value);
            display.value = result;
        }

    }
    catch (err) {
        display.value = "error"
    }
}