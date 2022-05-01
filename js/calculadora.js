let Btn = document.getElementsByClassName('button')

let input = document.getElementById('calculadora__input')

let resBtn = document.getElementById('button__res')


const writeNum = (num) => {
    input.value += num
}

const addNumsValue = () => {
    for (let button of Btn) {
        button.addEventListener('click', (event) => {
            writeNum(button.value)
        })
    }
}

resBtn.addEventListener('click', () => {
    let operation = input.value.trim().split(' ')
    let n1 = parseInt(operation[0])
    let n2 =parseInt(operation[2])

    if (operation.length == 3) {
        if  (operation[1] == '+') {
            input.value = n1 + n2;
        } else if (operation[1] == '-') {
            input.value = n1 - n2
        } else if (operation[1] == '/') {
            input.value = n1 / n2
        } else if (operation[1] == 'X') {
            input.value = n1 * n2
        }
    }
})


addNumsValue();
