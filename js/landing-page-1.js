"use strict";

function rotateChevron() {
  document.querySelector(".fa-chevron-down").style.transform = "rotate(180deg)";
}


// Modal javascript

const modal = document.querySelector(".popup-content");
const modalParent = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".open-modal");

const toggleModal = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  modalParent.classList.toggle("hidden");
};

btnsOpenModal.addEventListener("click", toggleModal);

btnCloseModal.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

//Handling and escape keypress
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    toggleModal();
  }
});

let swap = document.querySelector(".swap");
let swap1 = document.querySelector(".swap1");
let swap2 = document.querySelector(".swap2");
let swap3 = document.querySelector(".swap3");
let swap4 = document.querySelector(".swap4");
let swap5 = document.querySelector(".swap5");
let swap6 = document.querySelector(".swap6");

swap.addEventListener("click", function () {

    let value = swap.innerHTML;

  if (value === "Sign In") {
    swap.innerHTML = "Sign Up";
    swap1.innerHTML = "Welcome Back";
    swap2.innerHTML = "Sign In with Google";
    swap3.innerHTML = "Sign In with Facebook";
    swap4.innerHTML = "Sign In with Email";
    swap5.innerHTML = "'Sign In'";
    swap6.innerHTML = "Dont have an account?";
  }

  else {
    swap.innerHTML = "Sign In";
    swap1.innerHTML = "Join KodeBlog";
    swap2.innerHTML = "Sign Up with Google";
    swap3.innerHTML = "Sign Up with Facebook";
    swap4.innerHTML = "Sign Up with Email";
    swap5.innerHTML = "'Sign Up'";
    swap6.innerHTML = "Already a member?";
  }
});

let sideDrop = document.querySelector('.sidedrop');
let sideListItems = document.querySelector('.side-list-item');

sideDrop.addEventListener('click', function() {
  sideListItems.classList.toggle('side-list-item-show');
}
)

const please = document.querySelectorAll('.please');

console.log(please);

for (let i = 0; i < please.length; i++) {
  please[i].addEventListener('click', () => {
    window.alert('Please login or sign up to have access to this feature');
  }
  )
}