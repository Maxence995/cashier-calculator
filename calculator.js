
function calculate() {
    var cola = document.getElementById('cola').textContent;
    var count = document.getElementById('input-count').value
    var totalCola = count * 100
    var total = totalCola
    var checkInt = Number.isInteger(+count)

    if (count < 0) {document.getElementById("error").innerHTML = "Waarde moet groter dan of gelijk zijn aan 0"}
    if (!checkInt) {document.getElementById("error").innerHTML = "Geef een geldige waarde op. De twee dichtsbijzijnde geldige waarde zijn 4 en 5"}
    if (count > 999) {document.getElementById("error").innerHTML = "Waarde moet onder of gelijk aan 999"}
    if(count.length <=0){document.getElementById("error").innerHTML = "Geef een getal in"}

    if(cola && count >= 0 && checkInt && count <= 999 && !count.length <=0){
        document.getElementById("error").innerHTML = ""
        document.getElementById("output").innerHTML = `${cola} ${count} X 100 = ${totalCola} EUR`;
        document.getElementById("total").innerHTML = `TOTAAL = ${total} EUR`;
    } 
  }
