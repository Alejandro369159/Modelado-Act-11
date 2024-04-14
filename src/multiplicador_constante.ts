// Método de multiplicador constante
function getRandomNumbersByConstantMultiplicator() {
  const randomNumbers = [];
  // crear un numero aleatorio (4 dígitos) para que sea la semilla
  let xNumber = Math.floor(Math.random() * 10000);

  // crear una constante que sea el multiplicador
  const multiplierConstant = Math.floor(Math.random() * 10000);

  // A partir de eso hacer un loop
  for (let i = 0; i < 5; i++) {
    let num = `${xNumber * multiplierConstant}`;
    num = num.length < 8 ? "0" + num : num;

    const randomNumber = Number(num.slice(2, 6));
    xNumber = randomNumber;
    const decimalRandomNumber = randomNumber / 10000;
    randomNumbers.push(decimalRandomNumber);
  }

  console.log(randomNumbers);
}

getRandomNumbersByConstantMultiplicator();
