// Método de Algoritmo de productos medios
function getRandomNumbersByMediumProducts() {
  const randomNumbers = [];
  //   Se crean X1 y X2
  let firstNumber = Math.floor(Math.random() * 10000);
  let secondNumber = Math.floor(Math.random() * 10000);

  //   Se hace el loop para la generación de productos medios
  for (let i = 0; i < 5; i++) {
    let num = `${firstNumber * secondNumber}`;
    num = num.length < 8 ? "0" + num : num;

    const randomNumber = Number(num.slice(2, 6));
    const decimalRandomNumber = randomNumber / 10000;
    randomNumbers.push(decimalRandomNumber);
    firstNumber = secondNumber;
    secondNumber = randomNumber;
  }
  console.log(randomNumbers);
}

getRandomNumbersByMediumProducts();
