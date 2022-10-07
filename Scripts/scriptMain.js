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

function exibirCardText(id){
    window.alert(id)
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


Array.from(document.querySelectorAll('.cardProject')).forEach(el => {
    el.addEventListener('mousemove' , () => {
        el.children[1].classList.add('exibirTextCard')
    })
})

Array.from(document.querySelectorAll('.cardProject')).forEach(el => {
    el.addEventListener('mouseout' , () => {
        el.children[1].classList.remove('exibirTextCard')
    })
})

const scrol = new IntersectionObserver( entry => {
    entry[0].target.classList.add('viss')
    console.log(entry)
})

Array.from(document.querySelectorAll('.itensMenuProjetos')).forEach(element => {
    scrol.observe(element)
})

function start(){
    Array.from(document.querySelectorAll('.saudacoes')).forEach(element => {
        element.classList.add('viss')
    })
}