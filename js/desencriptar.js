let botonDesencriptar = document.getElementById('desencriptar');

const desencriptar = (string) => {
    string = string.split('enter').join('e');
    string = string.split('imes').join('i');
    string = string.split('ai').join('a');
    string = string.split('ober').join('o');
    string = string.split('ufat').join('u');
    return string;
}

botonDesencriptar.addEventListener('click', (event) => {
    event.preventDefault();
    
    let input = document.getElementById('input');
    let inputValue = input.value
    
    inputValue = desencriptar(inputValue);

    let output = document.getElementById('output');

    output.innerHTML = inputValue

    let aviso = document.getElementById('copiado')

    aviso.classList.add('ocultar')
})