var cpfAdc = window.document.getElementById('cpfAdc')
var cpfDeclAdc = window.document.getElementById('cpfDeclAdc')
var nomeAdc = window.document.getElementById('nomeAdc')
var cidadeAdc = window.document.getElementById('cidadeAdc')
var numRecAdc = window.document.getElementById('numRecAdc')
var valorAdc = window.document.getElementById('valorAdc')

var referenteAdc = window.document.getElementById('referenteAdc')
var dataAdc = window.document.getElementById('dataAdc')
var nomeDecAdc = window.document.getElementById('nomeDecAdc')





function formatarDataPorExtenso(dataISO) {
    const meses = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho",
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
  
    const [ano, mes, dia] = dataISO.split("-");
    const nomeMes = meses[parseInt(mes) - 1];
  
    return `${dia} de ${nomeMes} de ${ano}`;
}

//tenho que enteder mais, serve para formatar o CPF na hora de digitar
function mascara(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += "."
    if (v.length == 11) i.value += "-"
 
 }

 
function gerar(){
    
    if(nomeAdc.value.length == 0){
        window.alert('Favor informe o NOME DECLARANTE')
        nomeAdc.focus()
    }else if(cidadeAdc.value == 0){
        window.alert('favor informe a CIDADE')
        cidadeAdc.focus()
    }else if(cpfDeclAdc.value == 0){    
        window.alert('Favor informe o CPF DECLARANTE')
        cpfDeclAdc.focus()
    }else if(nomeDecAdc.value == 0){
        window.alert('favor informe seu nome')
        nomeDecAdc.focus()
    }else if(cpfAdc.value == 0){
        window.alert('Favor informe seu CPF')
        cpfAdc.focus()
    }else if(valorAdc.value == 0){
        window.alert('Favor informe o VALOR')
        valorAdc.focus()
    }else if(referenteAdc.value == 0){
        window.alert('Favor informar o que se REFERE')
        referenteAdc.focus()
    } else if(dataAdc.value == 0){
        window.alert('Favor informar a DATA')
        dataAdc.focus()
    }
    else{
        localStorage.setItem('nome1',nomeAdc.value.toUpperCase())  // 1
        localStorage.setItem('cpf1', cpfDeclAdc.value) // 2       
        localStorage.setItem('nome2', nomeDecAdc.value.toUpperCase()) // 3
        localStorage.setItem('cpf2', cpfAdc.value) // 4
        localStorage.setItem('valor', valorAdc.value) // 5
        localStorage.setItem('referente', referenteAdc.value) // 6
        localStorage.setItem('cidade', cidadeAdc.value) //7
        localStorage.setItem('data',dataTeste = formatarDataPorExtenso(dataAdc.value)) // 9
        localStorage.setItem('numRec',numRecAdc.value)


        window.location.href = "impressao.html"   
    }
}

function recibo(){
    let nom1 = window.document.getElementById('nom1') //1
    let cpfDec = window.document.getElementById('cpf1') // 2
    let nom2 = window.document.getElementById('nom2') // 3
    let cpf = window.document.getElementById('cpf2') //4
    let valor = window.document.getElementById('valor') // 5
    let referente = window.document.getElementById('referente') // 6 
    let cidade = window.document.getElementById('cidade') // 7
    let nomAssina = window.document.getElementById('nomAssina') //8
    let data = window.document.getElementById('data') // 9
    let numRecCabe = window.document.getElementById('numRecCabe') // 10
    let valorCabe = window.document.getElementById('valorCabe') // 11
    
    nom1.innerHTML = localStorage.getItem('nome1') //1
    cpfDec.innerHTML = localStorage.getItem('cpf1') //2
    nom2.innerHTML = localStorage.getItem('nome2') //3
    cpf.innerHTML = localStorage.getItem('cpf2') // 4
    valor.innerHTML = localStorage.getItem('valor') // 5
    referente.innerHTML = `${localStorage.getItem('referente')}` // 6
    cidade.innerHTML = localStorage.getItem('cidade') //7
    nomAssina.innerHTML = localStorage.getItem('nome1') // 8
    data.innerHTML = localStorage.getItem('data') // 9
    numRecCabe.innerHTML = localStorage.getItem('numRec')// 10
    valorCabe.innerHTML = localStorage.getItem('valor') // 11

}

 
 function printTela(){
    
    window.print()
 }


