const menuCalc = document.getElementById('projectCalc')
const menuList = document.getElementById('projectLista')
const menuGaleria = document.getElementById('projetoGaleriaSt')
const menuConversor = document.getElementById('projetoConversor')
const menuEndereco = document.getElementById('projetoBuscadorEnderecos')

const carrosselProjetos = document.getElementById('carrosseContent')

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

const scrol = new IntersectionObserver( entry => {
    entry[0].target.classList.add('viss')
    console.log(entry)
})

Array.from(document.querySelectorAll('.card')).forEach(element => {
    scrol.observe(element)
})

Array.from(document.querySelectorAll('.itensMenuProjetos')).forEach(element => {
    scrol.observe(element)
})

function start(){
    Array.from(document.querySelectorAll('.saudacoes')).forEach(element => {
        element.classList.add('viss')
    })
}