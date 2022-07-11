"use strict";

// let value = "";
// let add = document.querySelectorAll("#change");
// let count = document.querySelectorAll("#count");

// for (let i = 0; i < add.length; i++) {
//   add[i].addEventListener("click", function () {
//     value = count[i].innerHTML;
//     value++;
//     count[i].innerHTML = value;

//     if (value > 10) {
//       add[i].style.color = "black";
//       add[i].style.transform = "scale(1.2)";
//     }
//   });
// }

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


// const modalNotify = document.querySelector(".popup-content-notify");
// const modalParentNotify = document.querySelector(".popup-notify");
// const overlayNotify = document.querySelector(".overlay-notify");
// const btnCloseModalNotify = document.querySelector(".close-modal-notify");
// const btnsOpenModalNotify = document.querySelector(".open-modal-notify");

// const toggleModalNotify = function () {
//   modalNotify.classList.toggle("hidden-notify");
//   overlayNotify.classList.toggle("hidden-notify");
//   modalParentNotify.classList.toggle("hidden-notify");
// };

// btnsOpenModalNotify.addEventListener("click", toggleModalNotify);

// btnCloseModalNotify.addEventListener("click", toggleModalNotify);
// overlayNotify.addEventListener("click", toggleModalNotify);

// //Handling and escape keypress
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden-notify")) {
//     toggleModalNotify();
//   }
// });

// const notifArray = [
//   {
//     item: `<div class="notification-container" id="toggle-notif">
//             <div class="row info cleeck my-2 w-100 mx-auto align-items-center py-1 rounded-2" id="notclick">
//               <div class="col-2 m-0 bg-transparent">
//                 <div class="card border-0 bg-transparent">
//                   <img src="img/landing-page-image/logo-2.png" alt="">
//                 </div>
//               </div>
//               <div class="col-8 m-0 bg-transparent">
//                 <div class="card border-0 bg-transparent">
//                   <p class="m-0 fw-bold" style="font-size: 10px;">Lorem ipsum dolor sit amet, consectetur adipiscimn dolor sit</p>
//                   <p class="text-muted m-0" style="font-size: 8px;">5 hours ago</p>
//                 </div>
//               </div>
//               <div class="col-2 m-0 bg-transparent">
//                 <div class="card border-0 bg-transparent">
//                   <i class="fa-solid fa-ellipsis info-toggle"></i>
//                 </div>
//               </div>
//             </div>
//             <div class="notif-menu hidden-notify px-2 shadow" style="background-color: white;"dataset="toggle-notif">
//               <div class="delete-btn d-flex align-items-center">
//                 <i class="fa-solid fa-trash-can"></i>
//                 <div class="delete-text p-2">
//                   <span class="delete-head">Remove</span>
//                   <div class="head-text">Remove this notification</div>
//                 </div>
//               </div>
//               <div class="mute-btn d-flex align-items-center">
//                 <i class="fa-solid fa-volume-xmark"></i>
//                 <div class="mute-text p-2">
//                   <span class="mute-head">Mute</span>
//                   <div class="head-text">Mute this notification</div>
//                 </div>
//               </div>
//             </div>
//           </div>`
    
//   },{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
// ]

// let data = notifArray[0];
// notifArray.fill(data, 1, 26);

// const notification = document.querySelector('.notification-details');
// let element = '';
// for (let i = 0; i < notifArray.length; i++) {
//   element += notifArray[i].item;
// }

// notification.innerHTML = element;


// function toggleNotif() {
//     const menuBtn = document.querySelectorAll('.info-toggle');

//     menuBtn.forEach(function clickEvent(e) {
//       e.addEventListener('click', toggleFunc);
//     })

//     function toggleFunc(e) {
//       let parentElem = e.target.closest('.notification-container');
//       let _id = parentElem.id
//       if (_id) {
//         let childElem = parentElem.querySelector(`[dataset=${_id}]`);
//         childElem.classList.toggle('hidden-notify');
//       }
//     }
// }

// toggleNotif();


// function deleteFunc() {
//   const deleteBtn = document.querySelectorAll('.delete-btn')
//   for (let i = 0; i < deleteBtn.length; i++) {
//     deleteBtn[i].addEventListener('click', () => {
//       deleteBtn[i].parentElement.parentElement.style.opacity = 0;
//       setTimeout(() => {
//         deleteBtn[i].parentElement.style.display = 'none';
//         deleteBtn[i].parentElement.parentElement.remove();
//       }, 500);
//     })
    
//   }

// }

// deleteFunc();


let sideDrop = document.querySelector('.sidedrop');
let sideListItems = document.querySelector('.side-list-item');

sideDrop.addEventListener('click', function() {
  sideListItems.classList.toggle('side-list-item-show');
}
)


// function notCleek() {
//   const notClick = document.querySelectorAll('#notclick');
//   for (let i = 0; i < notClick.length; i++) {
//     notClick[i].addEventListener('click', () => {
//       notClick[i].style.backgroundColor = '#E0E0E0';
//     })
//   }
// }
// notCleek();

// function readAll() {
//   const readAll = document.querySelector('.markall');
//   readAll.addEventListener('click', () => {
//     let notClick = document.querySelectorAll('#notclick');
//     for (let i = 0; i < notClick.length; i++) {
//       notClick[i].style.backgroundColor = '#E0E0E0';
//     }
//   }
//   )
// }
// readAll();


const please = document.querySelectorAll('.please');

console.log(please);

for (let i = 0; i < please.length; i++) {
  please[i].addEventListener('click', () => {
    window.alert('Please login or sign up to have access to this feature');
  }
  )
}

