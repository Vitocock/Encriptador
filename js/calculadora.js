let Btn = document.getElementsByClassName('button');

let input = document.getElementById('calculadora__input');
input.value = 0;

let resBtn = document.getElementById('button__res');

let delBtn = document.getElementById('button__del');

const writeNum = (num) => {
    input.value += num
}

const addNumsValue = () => {
    for (let button of Btn) {
        button.addEventListener('click', (event) => {
            if (input.value.split(' ')[0] == '=') {
                input.value = ''
            }
            writeNum(button.value)
        })
    }
}

resBtn.addEventListener('click', () => {
    let operation = input.value.trim().split(' ')
    let n1 = parseFloat(operation[0])
    let n2 =parseFloat(operation[2])

    if (operation.length == 3) {
        if  (operation[1] == '+') {
            input.value = `= ${n1 + n2}`;
        } else if (operation[1] == '-') {
            input.value = `= ${n1 - n2}`
        } else if (operation[1] == '/') {
            input.value = `= ${n1 / n2}`
        } else if (operation[1] == 'X') {
            input.value = `= ${n1 * n2}`
        }
    }

    if (input.value == '= NaN') {
        input.value = 'SyntaxError'
    }
})

delBtn.addEventListener('click', (event) => {
    if (input.value.split(' ')[0] == '=') {
        input.value = ''
    } else {
        newValue = input.value.split('')
        newValue.pop()
        input.value = newValue.join('')
    }

})


addNumsValue();
