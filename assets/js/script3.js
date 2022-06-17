function seleccionarEingresar() {
  valor1 = Number(document.getElementById("valor1").value);
  valor2 = Number(document.getElementById("valor2").value);
  valor3 = Number(document.getElementById("valor3").value);
  mensaje = document.getElementById("mensaje");
}

function ingresar() {
  if (valor1 == 9 && valor2 == 1 && valor3 == 1) {
    mensaje.innerHTML = "PASSWORD 1 CORRECTO";
  } else if (valor1 == 7 && valor2 == 1 && valor3 == 4) {
    mensaje.innerHTML = "PASSWORD 2 CORRECTO";
  } else {
    mensaje.innerHTML = "PASSWORD INCORRECTO";
  }
}
