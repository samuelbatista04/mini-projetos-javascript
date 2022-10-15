const listaBtn = document.querySelectorAll('#menu-botoes li')
const listaAnimal = document.querySelectorAll('#lista-animais li')
const listaVerso = document.querySelectorAll('#lista-versos li')

function ativarAnimal(index) {
    listaAnimal.forEach((imgAnimal) => {
        imgAnimal.classList.remove('ativo')
    })

    listaAnimal[index].classList.add('ativo')

    listaVerso.forEach((verso) => {
        verso.classList.remove('ativo')
    })

    listaVerso[index].classList.add('ativo')
}

listaBtn.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        ativarAnimal(index)
    })
})