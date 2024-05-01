let btn = document.querySelector('.btn');

function handle() {
    let inputs = document.querySelectorAll("input");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
}

document.querySelector('click', handle);