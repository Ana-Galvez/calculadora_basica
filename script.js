function agregarAlInput(valor) {
  document.getElementById("display").value += valor;
}

function limpiarInput() {
  document.getElementById("display").value = "";
}

function resultado() {
  let result;
  try {
    result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    alert("Verifique cuando pone los números y el punto");
    limpiarInput();
  }
}
