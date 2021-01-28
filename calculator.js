
function calculate() {
    var cola = document.getElementById('cola').textContent;
    var count = document.getElementById('input-count').value
    var totalCola = count * 100
    var total = totalCola
    var checkInt = Number.isInteger(+count)
    if(count < 0|| !checkInt || count > 999){
        document.getElementById("error").innerHTML = "Fill in correct value"
        document.getElementById("output").innerHTML = ``;
    }
    if(cola && count >= 0 && checkInt && count <= 999){
        document.getElementById("error").innerHTML = ""
        document.getElementById("output").innerHTML = `${cola} ${count} X 100 = ${totalCola} EUR`;
        document.getElementById("total").innerHTML = `TOTAL = ${total} EUR`;

    } 
  }
