function agregarAlInput(valor) {
  document.getElementById("display").value += valor;
}

function limpiarInput() {
  document.getElementById("display").value = "";
}

function resultado() {
  const result = eval(document.getElementById("display").value);
  try {
    document.getElementById("display").value = result;
  } catch (error) {
    alert('Verifique cuando pone los números y el punto')
  }
}
