function insert(number){
    var result = window.document.getElementById('resultado').innerHTML;
    if(result.length < 16){
        window.document.getElementById('resultado').innerHTML = result + number;
    }else{
        clean()
        window.confirm('Digite um número menor.');
    }
}

function clean(){
    var result = window.document.getElementById('resultado');
    result.innerHTML = "";
}

function backspace(){
    var result = window.document.getElementById('resultado').innerHTML;
    window.document.getElementById('resultado').innerHTML = result.substring(0, result.length - 1);
}

function calculate(){
    var result = window.document.getElementById('resultado').innerHTML;
    if(result){
        window.document.getElementById('resultado').innerHTML = eval(result);
    }
}