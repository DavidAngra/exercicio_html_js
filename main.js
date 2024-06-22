const form = document.getElementById("form");
const numeroA = document.getElementById("numA");
const numeroB = document.getElementById("numB");
const containerErro = document.querySelector(".error-message");
const containerConfirmation = document.querySelector(".confirmation");

form.addEventListener("submit", (ev) => {
   ev.preventDefault();

   const n1 = numeroA.value;
   const n2 = numeroB.value;
   const msgConfirmation = `Ok! <b>${n2}</b> é maior que <b>${n1}</b>!`;
   const msgError = `O segundo número precisa ser <b>MAIOR</b> para continuar!`;

   if (n1 < n2) {
      containerConfirmation.innerHTML = msgConfirmation;
      containerConfirmation.classList.add("active");
      containerErro.classList.remove("active");
      numeroB.classList.remove("error");
      numeroA.value = "";
      numeroB.value = "";
   } else {
      containerErro.innerHTML = msgError;
      containerErro.classList.add("active");
      numeroB.classList.add("error");
      containerConfirmation.classList.remove("active");
      numeroA.value = "";
      numeroB.value = "";
   }
});
