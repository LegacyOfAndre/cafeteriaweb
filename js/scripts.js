const btnEndereco = document.getElementById("#btnEndereco")
btnEndereco.addEventListener("click", mostrarModal)

const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")
mascara.addEventListener("click", esconderModal)

function mostrarModal(){
    modal.style.left = '50%'
    mascara.style.visibility = 'visible'
}

function esconderModal(){
    modal.style.left = '-100%'
    mascara.style.visibility = 'hidden'
}