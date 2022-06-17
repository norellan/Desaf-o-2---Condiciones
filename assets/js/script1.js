let b = document.querySelector("#imagen");
a = 0;
console.log(a);
b.addEventListener("click", function () {
  if (a == 0) {
    document.getElementById("imagen").style.border = "2px solid red";
    a = 1;
    console.log(a);
  } else {
    document.getElementById("imagen").style.border = "none";
    a = 0;
    console.log(a);
  }
});
