var button = document.getElementById('btnConvert')
var buttonModify = document.getElementById('btnModify')
var imgModify = document.getElementById('imgModify')

var decimal = document.getElementById('decimal')

var binary = true

function modifyConvertion(){
    if(binary == true){
        binary = false

        document.getElementById('labelFirst').innerText = "Insira decimal"
        document.getElementById('labelLast').innerText = "Resultado da conversão para binário:"
        document.getElementById('btnModify').innerText = "Trocar: binário para decimal"

        document.getElementById('binario').value = ""
        decimal.innerText = ""
        document.getElementById('binario').focus()
    }
    else{
        binary = true

        document.getElementById('labelFirst').innerText = "Insira binário"
        document.getElementById('labelLast').innerText = "Resultado da conversão para decimal:"
        document.getElementById('btnModify').innerText = "Trocar: decimal para binário"

        document.getElementById('binario').value = ""
        decimal.innerText = ""
        document.getElementById('binario').focus()
    }
}

function convertToDecimal(){
        let numberStart = document.getElementById('binario').value

        var numberEnd = 0
        var expoente = numberStart.length -1

        for(var x = 0 ; x < numberStart.length ; x++){
            if(Number(numberStart[x]) < 0 || Number(numberStart[x]) > 1){
                window.alert('Digite apenas 0 e 1')
                numberEnd = ""
                document.getElementById('binario').value = ""
                document.getElementById('binario').focus()
                break
            }else{
                numberEnd += Number(numberStart[x]) * 2**expoente
                expoente--
            }
        }   

        decimal.innerText = numberEnd
        console.log(numberEnd)
}


function convertToBinary(){
        let numberStart = document.getElementById('binario').value

        var arrayNumbers = []
        var numberBinary = ""

        while(numberStart >= 1){
           if(numberStart%2 == 0){
                arrayNumbers.push(0)
            }
            else{
                arrayNumbers.push(1)
            }
            numberStart = Math.floor(numberStart /= 2)
        } 
        
        arrayNumbers.reverse().map((li) => {
        numberBinary += li
        })

        decimal.innerText = numberBinary
        console.log(numberBinary)
}

function convertNumber(){
    if(binary == true){
        convertToDecimal()
    }
    else{
        convertToBinary()
    }
}

button.addEventListener('click' , convertNumber)
buttonModify.addEventListener('click' , modifyConvertion)
imgModify.addEventListener('click' , modifyConvertion)