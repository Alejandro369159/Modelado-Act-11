// Método de multiplicador constante
function getRandomNumbersByConstantMultiplicator() {
    var randomNumbers = [];
    // crear un numero aleatorio (4 dígitos) para que sea la semilla
    var xNumber = Math.floor(Math.random() * 10000);
    // crear una constante que sea el multiplicador
    var multiplierConstant = Math.floor(Math.random() * 10000);
    // A partir de eso hacer un loop
    for (var i = 0; i < 5; i++) {
        var num = "".concat(xNumber * multiplierConstant);
        num = num.length < 8 ? "0" + num : num;
        var randomNumber = Number(num.slice(2, 6));
        xNumber = randomNumber;
        var decimalRandomNumber = randomNumber / 10000;
        randomNumbers.push(decimalRandomNumber);
    }
    console.log(randomNumbers);
}
getRandomNumbersByConstantMultiplicator();
