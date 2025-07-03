const notas = document.querySelectorAll(".nota");

notas.forEach(nota => {
  const hiddenInput = nota.querySelector('input[type="hidden"]');
  const valorNota = Number(hiddenInput.value);

  const input = nota.querySelector('input[type="number"]');
  const total = nota.querySelector("p");

  input.addEventListener("input", () => {
    somar(input.value, total, valorNota);
  });
});

function somar(valor, texto, multiplicador) {
  const resultado = Number(valor) * multiplicador;
  texto.innerHTML = `R$${resultado.toFixed(2).replace(".",",")}`;
}
