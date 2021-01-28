
function calculate() {
    var cola = document.getElementById('cola').textContent;
    var count = document.getElementById('input-count').value
    var totalCola = count * 100
    var total = totalCola
    if(count < 0){
        document.getElementById("error").innerHTML = "don't enter negetive values"
        document.getElementById("output").innerHTML = ``;

    }
    if(cola && count >= 0){
        document.getElementById("error").innerHTML = ""
        document.getElementById("output").innerHTML = `${cola} ${count} X 100 = ${totalCola} EUR`;
        document.getElementById("total").innerHTML = `TOTAL = ${total} EUR`;

    } 
  }
