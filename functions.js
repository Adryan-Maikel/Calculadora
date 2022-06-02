function insert(number){
    var num = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = num + number;
}
function clean(){
    document.getElementById('resultado').innerHTML = "";
}
function back(){
    var result = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = result.substring(0, result.length -1);
}
function calculate(){
    var result = document.getElementById('resultado').innerHTML;
    if(result){
        document.getElementById('resultado').innerHTML = eval(result);
    }
}
  
