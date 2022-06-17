sumaStickers();
function sumaStickers() {
  let opcion1 = document.querySelector("#input1").value;
  let opcion2 = document.querySelector("#input2").value;
  let opcion3 = document.querySelector("#input3").value;
  let total = Number(opcion1) + Number(opcion2) + Number(opcion3);

  if (total >= 10) {
    resultado.innerHTML = `LLEVAS DEMASIADOS STICKERS`;
  } else {
    resultado.innerHTML = `LLEVAS: ${total} STICKER(S)`;
  }
}
