const menuHamburguer = document.getElementById('menuHamburguer')
const menu = document.getElementById('menu')
const menuCalc = document.getElementById('projectCalc')
const menuList = document.getElementById('projectLista')
const menuGaleria = document.getElementById('projetoGaleriaSt')
const menuConversor = document.getElementById('projetoConversor')
const menuEndereco = document.getElementById('projetoBuscadorEnderecos')

const carrosselProjetos = document.getElementById('carrosseContent')

// Funções

function girarCarrossel(valor){
    carrosselProjetos.style.marginLeft = `-${valor}%`
}

function exibirCardText(id){
    window.alert(id)
}

function openCloseMenu(){
    if(Array.from(menu.classList).indexOf('haburguerDisplayNone') == -1){
       menu.classList.add('haburguerDisplayNone')
    }else{
        menu.classList.remove('haburguerDisplayNone')
    }
}

// Eventos

menuHamburguer.addEventListener('click' , openCloseMenu)

menuCalc.addEventListener('click' , () => {
    girarCarrossel(0)
})

menuList.addEventListener('click' , () => {
    girarCarrossel(100)
})

menuGaleria.addEventListener('click' , () => {
    girarCarrossel(200)
})

menuConversor.addEventListener('click' , () => {
    if(window.screen.width <= 450){
        girarCarrossel(200)
    }else{
        girarCarrossel(300)
    }
})

menuEndereco.addEventListener('click' , () => {
    if(window.screen.width <= 450){
        girarCarrossel(300)
    }else{
        girarCarrossel(400)
    }
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