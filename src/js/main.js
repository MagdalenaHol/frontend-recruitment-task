const button = document.getElementById('click-counter')
const counter = document.querySelector('#counter');
const resetButton = document.querySelector('#reset')
let count = 0;


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



const reset = () => {
  counter.innerHTML = `${count}`;
  localStorage.removeItem("counter");
};

button.addEventListener('click', function() {
    let count = localStorage.getItem("counter");
    count ++;
    localStorage.setItem("counter", count); 
    document.getElementById("counter").innerHTML = count;

    if (count > 5) {
        resetButton.style.display = 'block'
        resetButton.addEventListener('click', reset);
    } else {
        resetButton.style.display = 'none'
    };
});