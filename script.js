const notas = document.querySelectorAll(".nota");
const campoTotal = document.querySelector(".rodape p");

// Atualiza valores individuais e total ao digitar
notas.forEach(nota => {
  const inputQuantidade = nota.querySelector('input[type="number"]');
  const valorUnitario = Number(nota.querySelector('input[type="hidden"]').value);
  const campoResultado = nota.querySelector("p");

  inputQuantidade.addEventListener("input", () => {
    if(inputQuantidade.value < 0) inputQuantidade.value = 0

    const quantidade = Number(inputQuantidade.value);
    const totalNota = quantidade * valorUnitario;
    
    campoResultado.innerHTML = formatarReal(totalNota);

    atualizarTotalGeral();
  });
});

// Formata número em R$
function formatarReal(valor) {
  return `R$${valor.toFixed(2).replace(".", ",")}`;
}

// Soma todos os valores totais
function atualizarTotalGeral() {
  let totalGeral = 0;

  notas.forEach(nota => {
    const quantidade = Number(nota.querySelector('input[type="number"]').value);
    const valor = Number(nota.querySelector('input[type="hidden"]').value);
    totalGeral += quantidade * valor;
  });

  campoTotal.innerHTML = `Valor total em caixa ${formatarReal(totalGeral)}`;
}
