
document.getElementById("cadastro").style.display = "none"
arraycampo = []


function Validardados(formClientes) {
    if (formClientes.Nome.value == "") {
        alert("Preencha seu nome.")
        formClientes.Nome.focus()
        return false
    }

    if (formClientes.email.value.indexOf("@") == -1 ||
        formClientes.email.value.indexOf(".") == -1 ||
        formClientes.email.value == "") {
        alert("Preencha um E-Mail válido.")
        formClientes.email.focus()
        return false
    }
    if (formClientes.senha.value == "") {
        alert("insira uma senha.")
        formClientes.Endereço.focus()
        return false
    }

    if (formClientes.Celular.value == "") {
        alert("Preencha seu Celular.")
        formClientes.Celular.focus()
        return false
    }
    if (formClientes.Cpf.value == "") {
        alert("Preencha seu CPF.")
        formClientes.Cpf.focus()
        return false

    }
  
}

function login(){

    let usuarioUser = document.getElementById("usuarioUser").value
    let senhaUser = document.getElementById("senhaUser").value

    console.log(arraycampo)

    arraycampo.forEach(function(e){
        console.log(e)
        if(e.email == usuarioUser && e.senha == senhaUser){
            location.href = "https://www.w3schools.com"
        }
        else{
            console.log("deu ruim")
        }
    });
}


function cadastrar(){

    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value


    arraycampo.push({
        email: email,
        senha: senha
    })

    document.getElementById("email").value = ''
    document.getElementById("senha").value = ''
    document.getElementById("Cpf").value = ''
    document.getElementById("Nome").value = ''

    console.log(arraycampo)

    return arraycampo
}

function alterar(e){
    if(e == login){
        document.getElementById("cadastro").style.display = "none"
        document.getElementById("login").style.display = "flex"
    }

    if(e == cadastrar){
        document.getElementById("cadastro").style.display = "flex"
        document.getElementById("login").style.display = "none"
    }
}

