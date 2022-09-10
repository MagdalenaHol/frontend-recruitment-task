
const activeModal = () => {
  document.querySelector(".modal")
    .classList.toggle("modal--hidden");
  document.querySelector(".overlay")
    .classList.toggle("overlay--hidden");
};

document.querySelector("#btn-pop-up")
    .addEventListener("click", activeModal);

document.querySelector(".overlay")
    .addEventListener("click", activeModal);

document.querySelector(".modal__close")
    .addEventListener("click", activeModal);

document.querySelector(".overlay")
    .addEventListener("click", activeModal);
