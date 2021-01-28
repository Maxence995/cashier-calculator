
function calculate() {
    var cola = document.getElementById('cola').textContent;
    var colaCount = document.getElementById('input-cola').value
    var colaPrice = document.getElementById('price-cola').value
    var totalCola = colaCount * colaPrice

    var fanta = document.getElementById('fanta').textContent;
    var fantaCount = document.getElementById('input-cola').value
    var fantaPrice = document.getElementById('price-fanta').value
    var totalFanta = fantaCount * fantaPrice

    var sprite = document.getElementById('sprite').textContent;
    var spriteCount = document.getElementById('input-sprite').value
    var spritePrice = document.getElementById('price-sprite').value
    var totalSprite = spriteCount * spritePrice

    var koffie = document.getElementById('koffie').textContent;
    var koffieCount = document.getElementById('input-cola').value
    var koffiePrice = document.getElementById('price-cola').value
    var totalKoffie = koffieCount * koffiePrice

    var thee = document.getElementById('fanta').textContent;
    var theeCount = document.getElementById('input-thee').value
    var theeprice = document.getElementById('price-thee').value
    var totalThee = theeCount * theeprice

    var total = totalCola + totalFanta + totalSprite + totalKoffie + totalThee
    console.log(totalCola, totalSprite)
    console.log(total)
    var colacheckInt = Number.isInteger(+colaCount)
    var fantacheckInt = Number.isInteger(+fantaCount)

    if (colaCount < 0) {document.getElementById("error").innerHTML = "Waarde moet groter dan of gelijk zijn aan 0"}
    if (!colacheckInt) {document.getElementById("error").innerHTML = "Geef een geldige waarde op. De twee dichtsbijzijnde geldige waarde zijn 4 en 5"}
    if (colaCount > 999) {document.getElementById("error").innerHTML = "Waarde moet onder of gelijk aan 999"}
    if(colaCount.length <=0){document.getElementById("error").innerHTML = "Geef een getal in"}

    if(colaCount && colaCount >= 0 && colacheckInt && colaCount <= 999 && !colaCount.length <=0){
        document.getElementById("error").innerHTML = ""
        if(!document.getElementById('cola-output')){
            var p2 = document.createElement('p');
            p2.innerHTML = `${cola} ${colaCount} X ${colaPrice} = ${totalCola} EUR`;
            var p3 = document.getElementById("output");
            p3.parentNode.insertBefore(p2, p3);
            p2.setAttribute("id", "cola-output")
        } else{
            document.getElementById('cola-output').innerHTML=`${cola} ${colaCount} X ${colaPrice} = ${totalCola} EUR`
        }}

        
        if(fantaCount && fantaCount >= 0 && fantacheckInt && fantaCount <= 999 && !fantaCount.length <=0){
            document.getElementById("error").innerHTML = ""
            if(!document.getElementById('fanta-output')){
                var p2 = document.createElement('p');
                p2.innerHTML = `${fanta} ${fantaCount} X ${fantaPrice} = ${fantaCola} EUR`;
                var p3 = document.getElementById("output");
                p3.parentNode.insertBefore(p2, p3);
                p2.setAttribute("id", "fanta-output")
            } else{
                document.getElementById('fanta-output').innerHTML=`${fanta} ${fantaCount} X ${fantaPrice} = ${totalFanta} EUR`
            }
        }
       
        document.getElementById("total").innerHTML = `TOTAAL = ${total} EUR`;
    
}
