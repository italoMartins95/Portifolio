var enderecos = document.getElementById('formEndereco')
var cepNumber = document.getElementById('cepNumber')

var logradouro = document.getElementById('logradouro')
var bairro = document.getElementById('bairro')
var cidade_estado = document.getElementById('cidade_estado')

function buscarCep(){
    (event).preventDefault()

    if(cepNumber.value == ""){
        window.alert('Insira o CEP para continuar!')
    }

    var cep = cepNumber.value
    var url = `https://viacep.com.br/ws/${cep}/json/`

    try{
        fetch(url).then(resposta => {
            return resposta.json()
        }).then(retorno => {
                logradouro.innerText = retorno.logradouro
                bairro.innerText = retorno.bairro
                cidade_estado.innerText = `${retorno.localidade}/${retorno.uf}`
        })  
    }catch{
        window.alert('Não foi possível encontrar o endereço. Verifique o CEP!')
        console.log(error)
    }
         
}

enderecos.addEventListener('submit' , buscarCep)