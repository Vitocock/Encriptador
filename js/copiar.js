let botonCopiar = document.getElementById('copiar');

botonCopiar.addEventListener('click', (event) => {
    event.preventDefault();

    let output = document.getElementById('output');
    
    let copy = document.createElement('input')
    copy.setAttribute('value', output.innerHTML)


    copy.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copy.value)

    let aviso = document.getElementById('copiado')

    aviso.classList.remove('ocultar')
})