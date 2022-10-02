const menuCalc = document.getElementById('projectCalc')
const menuList = document.getElementById('projectLista')
const menuGaleria = document.getElementById('projetoGaleriaSt')
const menuConversor = document.getElementById('projetoConversor')
const menuEndereco = document.getElementById('projetoBuscadorEnderecos')

const carrosselProjetos = document.getElementById('carrosselProjetos')

// Funções

function teste(valor){
    carrosselProjetos.style.marginLeft = `-${valor}%`
}

// Eventos

menuCalc.addEventListener('click' , () => {
    teste(0)
})

menuList.addEventListener('click' , () => {
    teste(100)
})

menuGaleria.addEventListener('click' , () => {
    teste(200)
})

menuConversor.addEventListener('click' , () => {
    teste(300)
})

menuEndereco.addEventListener('click' , () => {
    teste(400)
})

