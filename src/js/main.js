const button = document.getElementById('click-counter')
const counter = document.querySelector('.counter');
count = 0;


const activeModal = () => {
  document.querySelector(".modal")
    .classList.toggle("modal--hidden");
  document.querySelector(".overlay")
    .classList.toggle("overlay--hidden");
};

document.querySelector(".btn")
    .addEventListener("click", activeModal);

document.querySelector(".overlay")
    .addEventListener("click", activeModal);

document.querySelector(".modal__close")
    .addEventListener("click", activeModal);

document.querySelector(".overlay")
    .addEventListener("click", activeModal);


button.addEventListener('click', function() {
    count += 1;
    counter.innerHTML = count;
});

    