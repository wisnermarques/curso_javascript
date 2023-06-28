function soma(e) {
  e.preventDefault();
  const valor1 = parseFloat(document.getElementById("valor1").value);
  const valor2 = parseFloat(document.getElementById("valor2").value);
  const soma = valor1 + valor2;
  let resultadoElement = document.getElementById("resultado");

  resultadoElement.textContent = "A soma é " + soma;
}

function limpar() {
  let resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = "";
}
