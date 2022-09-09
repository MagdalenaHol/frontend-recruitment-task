const modalButton = document.querySelector(".btn");
const modalBg = document.querySelector(".modal-bg");


modalButton.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
});
