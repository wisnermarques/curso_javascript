function soma(e) {
  e.preventDefault();
  const valor1 = parseFloat(document.getElementById("valor1").value);
  const valor2 = parseFloat(document.getElementById("valor2").value);

  const op = document.getElementById("op").value;

  let resultado;

  let resultadoElement = document.getElementById("resultado");

  switch (op) {
    case "sum":
      resultado = valor1 + valor2;
      break;
    case "sub":
      resultado = valor1 - valor2;
      break;
    case "mult":
      resultado = valor1 * valor2;
      break;
    case "div":
      if (!isNaN(valor2) && valor2 !== 0) {
        resultado = valor1 / valor2;
      } else {
        resultado = "Não é permitido divisão por zero.";
      }
      break;
    default:
      resultado = "Você não selecionou nenhuma operação.";
  }

  resultadoElement.textContent = resultado;
}

function limpar() {
  let resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = "";
}
