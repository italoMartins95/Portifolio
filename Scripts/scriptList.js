var btnAddIten = document.getElementById('labelBuscarInserir')

var htmlList = document.getElementById('checkListItens')
var checkListItensOk = document.getElementById('checkListItensOk')

var myItens = Array.from(document.getElementById('checkListItens').children).map(item => {return item.innerText})
    var myItensFiltred

var form = document.getElementById('checkListBusca')
var itemInsert = document.getElementById('buscar_inserir')

var imgOpenClose = document.getElementById('imgOpenClose')
		
function removeItem(id){
    var itemRemoved = myItens[id]

    myItens.splice(myItens.indexOf(itemRemoved) , 1)

    setTimeout(() => {
        htmlList.innerHTML = ""

        myItens.map( el => {
            var li = document.createElement('li')
        
            htmlList.appendChild(li)

            htmlList.lastChild.innerHTML = `<input type="checkbox" id=${htmlList.children.length - 1} onchange="removeItem(id)"> ${el}`
        })
    
        var li = document.createElement('li')
        li.style.textDecoration = "line-through"
        li.style.color = "#5b5f62"
        li.innerText = itemRemoved

        checkListItensOk.appendChild(li)    
    }, 200)       
}

function searchItem(){
    myItensFiltred = myItens.filter( el => {
        return el.toLowerCase().includes(itemInsert.value.toLowerCase())
    })

    
    htmlList.innerHTML = ""

    myItensFiltred.map( function(item , indice) {
        var li = document.createElement('li')

        li.innerHTML = `<input type="checkbox" id=${indice} onchange="removeItem(id)"> ${item}`

        htmlList.appendChild(li)
    })

    if(myItensFiltred.length < 1){
        var li = document.createElement('li')

        li.innerHTML = `Item não encontrado...`

        htmlList.appendChild(li)
    }    
}
		
function insertItem(){
    event.preventDefault()

    if(itemInsert.value == ""){
        window.alert('insira o nome do item antes de adicionar a lista!')
        return false
    }

    myItens.unshift(itemInsert.value)
    
    htmlList.innerHTML = ""

    myItens.map( el => {
        var li = document.createElement('li')

        htmlList.appendChild(li)

        htmlList.lastChild.innerHTML = `<input type="checkbox" id=${htmlList.children.length - 1} onchange="removeItem(id)"> ${el}`
    })

    itemInsert.value = ""
    itemInsert.focus()
}

function openCloseListItensOk(){
    var classe = this.parentNode.className

    if(classe == "closeItensOk"){
        this.parentNode.className = "openItensOk"
        this.src = "Images/close.svg"
    }else{
        this.parentNode.className = "closeItensOk"
        this.src = "Images/lixeira.png"
    }

}

itemInsert.addEventListener('input' , searchItem)
btnAddIten.addEventListener('click' , insertItem)
form.addEventListener('submit' , insertItem)
imgOpenClose.addEventListener('click' , openCloseListItensOk)