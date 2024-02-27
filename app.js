let input = document.querySelector('#entrada');
let output = document.querySelector('#saida');
let foto = document.querySelector("#texto2");
let copyreply = document.querySelector("#copiar");


function formatarTexto() {
    var input = document.getElementById("entrada");
    var texto = input.value;
  
    // Converter para minúsculas e remover acentos
    texto = texto.toLowerCase();
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
    // Atualizar o conteúdo do textarea
    input.value = texto;
}



function cripy(){
    if (input.value === '') {

        cripy().disable;
    } 
    else{

        var mensagem = input.value;

    var textcrip = mensagem.replace(/e/g, "enter")
                        .replace(/i/g, "imes")
                        .replace(/a/g, "ai")
                        .replace(/o/g, "ober")
                        .replace(/u/g, "ufat");
    
    document.getElementById('saida').innerHTML = textcrip;

    foto.style.display = 'none'
    copyreply.style.display = 'inline'
    }
}

function descripy(){
    if (input.value === '') {

        descripy().disable
        
    }
    else{
    var megasnem = input.value;

    var textdescrip = megasnem.replace(/enter/g, "e")
                              .replace(/imes/g, "i")
                              .replace(/ai/g, "a")
                              .replace(/ober/g, "o")
                              .replace(/ufat/g, "u");

    document.getElementById('saida').innerHTML = textdescrip;

    foto.style.display = 'none'
    copyreply.style.display = 'inline'        
    }
}

function copy(){
    var copyText = document.getElementById('saida');
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(copyText.value);
  
    alert("Copied the text: " + copyText.value);
  }

