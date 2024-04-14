// Método de Algoritmo de productos medios
function getRandomNumbersByMediumProducts() {
    var randomNumbers = [];
    //   Se crean X1 y X2
    var firstNumber = Math.floor(Math.random() * 10000);
    var secondNumber = Math.floor(Math.random() * 10000);
    //   Se hace el loop para la generación de productos medios
    for (var i = 0; i < 5; i++) {
        var num = "".concat(firstNumber * secondNumber);
        num = num.length < 8 ? "0" + num : num;
        var randomNumber = Number(num.slice(2, 6));
        var decimalRandomNumber = randomNumber / 10000;
        randomNumbers.push(decimalRandomNumber);
        firstNumber = secondNumber;
        secondNumber = randomNumber;
    }
    console.log(randomNumbers);
}
getRandomNumbersByMediumProducts();
