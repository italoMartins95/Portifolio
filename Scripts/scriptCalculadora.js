var calculator = window.document.getElementById('calculator')
var displayContent = window.document.getElementById('displayContent')
var displayCalc = window.document.getElementById('displayCalc')


function botoes(num){    
    displayCalc.value += num
	displayCalc.focus()
}

function clean(){
    displayCalc.value = ""
    displayContent.innerText = ""
}

function submiteDefault(){
	event.preventDefault()

	calcular()
}

function calcular(){
    try{
    	var resultado = eval(displayCalc.value)
    	var p = document.createElement('p');

    	p.innerText = `${displayCalc.value} = ${resultado.toFixed(1)}`
    
    	if(displayContent.children.length >= 3){
		displayContent.removeChild(displayContent.childNodes[0])
		displayContent.appendChild(p)
    	}else{
		displayContent.appendChild(p)
    	}
    }catch (error){
		displayCalc.value = ""
		console.log(error)
		window.alert("Algo deu errado, tente novamente!")
    }

    displayCalc.value = ""
	cursorToCalc()
}

function cursorToCalc(){
    displayCalc.focus()
}


calculator.addEventListener('mouseenter' , cursorToCalc)