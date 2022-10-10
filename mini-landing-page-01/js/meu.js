const imgRelogio = document.querySelector('#img-relogio')

const btnRosa = document.querySelector('#rosa')
const btnPreto = document.querySelector('#preto')
const btnAzul = document.querySelector('#azul')
const btnBranco = document.querySelector('#branco')

function mudarImg(event) {
    if (event.currentTarget === btnRosa) {
        imgRelogio.setAttribute('src', './img/rosa.png')
    } else if (event.currentTarget === btnPreto) {
        imgRelogio.setAttribute('src', './img/preto.png')
    } else if (event.currentTarget === btnAzul) {
        imgRelogio.setAttribute('src', './img/azul.png')
    } else if (event.currentTarget === btnBranco) {
        imgRelogio.setAttribute('src', './img/branco.png')
    }
}

btnRosa.addEventListener('click', mudarImg)
btnPreto.addEventListener('click', mudarImg)
btnAzul.addEventListener('click', mudarImg)
btnBranco.addEventListener('click', mudarImg)