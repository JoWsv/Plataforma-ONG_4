// acessibilidade.js
const body = document.body;

const modoEscuroBtn = document.getElementById("modoEscuro");
const modoClaroBtn = document.getElementById("modoClaro");
const altoContrasteBtn = document.getElementById("altoContraste");

// Alterna tema
modoEscuroBtn.addEventListener("click", () => {
  body.classList.add("modo-escuro");
  body.classList.remove("modo-claro", "alto-contraste");
});

modoClaroBtn.addEventListener("click", () => {
  body.classList.add("modo-claro");
  body.classList.remove("modo-escuro", "alto-contraste");
});

altoContrasteBtn.addEventListener("click", () => {
  body.classList.add("alto-contraste");
  body.classList.remove("modo-escuro", "modo-claro");
});
