let botonEncriptar = document.getElementById('encriptar');
let input = document.getElementById('input');
input.value = localStorage.getItem('mensajeGuardado') == null ? '' : `Mensaje Encriptado de la Anterior Sesion: ${localStorage.getItem('mensajeGuardado')}`

const encriptar = (string) => {
    string = string.split('e').join('enter');
    string = string.split('i').join('imes');
    string = string.split('a').join('ai');
    string = string.split('o').join('ober');
    string = string.split('u').join('ufat');
    return string;
}

botonEncriptar.addEventListener('click', (event) => {
    event.preventDefault();
    let input = document.getElementById('input');
    let inputValue = input.value
    
    inputValue = encriptar(inputValue);

    let output = document.getElementById('output');

    output.innerText = inputValue

    let aviso = document.getElementById('copiado')

    aviso.classList.add('ocultar')

    localStorage.setItem('mensajeGuardado', inputValue)
})