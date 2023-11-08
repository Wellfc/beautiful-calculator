'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}

/* Variables */
const display = select('.display');
const buttons = selectAll('.btn');

/* Arithmetic Operations */
buttons.forEach(button => {
    onEvent('click', button, () => {
        if (button.value === '=') {
            if (display.value !== '') {
                display.value = eval(display.value);
            }
        } else if (button.value === 'C') {
            display.value = '';
        } else {
            display.value += button.value;
        }
    });
});

