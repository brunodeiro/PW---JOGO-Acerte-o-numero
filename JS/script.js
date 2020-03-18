var inputNome = document.getElementById("inputNome")
var tentativas = 0
var game = true
// FUNÇÃO PARA 2 JOGADORES
function jogar2(){
    // VALIDAÇÃO PARA CADASTRAMENTO DO NOME
    if (inputNome.value){    
        var menu = document.getElementById("menu")
        menu.style.display="none"

        var jogo = document.getElementById("jogo")
        // JOGO
        var numeroSecreto = document.createElement("input")
        numeroSecreto.id="numeroSecreto"
        numeroSecreto.setAttribute("type", "password")
        numeroSecreto.setAttribute("placeholder", "Informe o Numero secreto")
        jogo.appendChild(numeroSecreto)
        
        var numeroJogador = document.createElement("input")
        numeroJogador.id="numeroJogador"
        numeroJogador.setAttribute("type", "text")
        numeroJogador.setAttribute("placeholder", "Insira aqui o suposto numero")
        jogo.appendChild(numeroJogador)

        var btn = document.createElement("button")
        btn.id="btn"
        btn.innerText="Go"
        btn.setAttribute("onclick", "rodar()")
        jogo.appendChild(btn)

    }
    else{
        alert("Digite o seu nome antes de começar!")
    }
}

// RESPOSTA
function rodar(){
    if(numeroSecreto.value && numeroJogador.value){    
        numeroSecreto.style.display="none"
        if (game){
            tentativas++
            var ul = document.getElementById("ul")
            var li = document.createElement("li")

            if (Number(numeroSecreto.value) > Number(numeroJogador.value)){
                 li.innerHTML = inputNome.value+", " +numeroJogador.value+" é um Valor MENOR que o numero secreto"
                 ul.appendChild(li)
             }
             if (Number(numeroSecreto.value) < Number(numeroJogador.value)){
                 li.innerHTML =  inputNome.value+", " +numeroJogador.value+" é um Valor MAIOR que o numero secreto"
                 ul.appendChild(li)
             }
             if (Number(numeroSecreto.value) == Number(numeroJogador.value)){
                 li.innerHTML =  inputNome.value+", " +numeroSecreto.value+" é o numero exato!! Você acertou após: "+tentativas+" Tentativa(s)"
                 ul.appendChild(li)
                 game = false // ao finalizar o game não vai ser executado o bloco if
                 var btnRank = document.createElement("button")
                 btnRank.id="btnRank"
                 btnRank.innerText="Ranking"
                 btnRank.setAttribute("onclick", "rank()")
                 ul.appendChild(btnRank)
                
             }  
        }
    }
    else{
        alert("Preencha todos os campos!")
    }
}

function rank(){
    jogo.style.display="none"
    ul.style.display="none"

    var divTabela = document.getElementById("divTabela")

    var tituloEl = document.createElement("h3")
    tituloEl.id="tituloEl"
    tituloEl.innerText="Ranking"
    divTabela.appendChild(tituloEl)

    var tabela = document.createElement("table")
    tabela.id="tabela"
    divTabela.appendChild(tabela)
    
    var tr1 = document.createElement("tr")
    tr1.id="tr1"
    tabela.appendChild(tr1)

    var th1 = document.createElement("th")
    th1.id="th1"
    th1.innerText="Nome"
    tr1.appendChild(th1)

    var th2 = document.createElement("th")
    th2.id="th2"
    th2.innerText="Tentativas"
    tr1.appendChild(th2)

    var tr2 = document.createElement("tr")
    tr2.id="tr2"
    tabela.appendChild(tr2)

    var td1 = document.createElement("td")
    td1.id="td1"
    td1.innerHTML= inputNome.value
    tr2.appendChild(td1)

    var td2 = document.createElement("td")
    td2.id="td2"
    td2.innerHTML= tentativas
    tr2.appendChild(td2)
    
}