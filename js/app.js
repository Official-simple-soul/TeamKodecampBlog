"use strict";

let value = "";
let add = document.querySelectorAll("#change");
let count = document.querySelectorAll("#count");

for (let i = 0; i < add.length; i++) {
  add[i].addEventListener("click", function () {
    value = count[i].innerHTML;
    value++;
    count[i].innerHTML = value;

    if (value > 10) {
      add[i].style.color = "black";
      add[i].style.transform = "scale(1.2)";
    }
  });
}

function rotateChevron() {
  document.querySelector(".fa-chevron-down").style.transform = "rotate(180deg)";
}

const modalNotify = document.querySelector(".popup-content-notify");
const modalParentNotify = document.querySelector(".popup-notify");
const overlayNotify = document.querySelector(".overlay-notify");
const btnCloseModalNotify = document.querySelector(".close-modal-notify");
const btnsOpenModalNotify = document.querySelector(".open-modal-notify");

const toggleModalNotify = function () {
  modalNotify.classList.toggle("hidden-notify");
  overlayNotify.classList.toggle("hidden-notify");
  modalParentNotify.classList.toggle("hidden-notify");
};

btnsOpenModalNotify.addEventListener("click", toggleModalNotify);

btnCloseModalNotify.addEventListener("click", toggleModalNotify);
overlayNotify.addEventListener("click", toggleModalNotify);

//Handling and escape keypress
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden-notify")) {
    toggleModalNotify();
  }
});

const notifArray = [
  {
    item: `<div class="notification-container" id="toggle-notif">
              <div class="row info cleeck my-2 w-100 mx-auto align-items-center py-1 rounded-2" id="notclick">
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <img src="img/landing-page-image/logo-2.png" alt="">
                  </div>
                </div>
                
                <div class="col-8 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                  <p class="m-0 fw-bold" style="font-size: 10px;">KodeCamp responded to your comment “Tech....</p>
                  <p class="text-muted m-0" style="font-size: 8px;">2 hours ago</p>
                  </div>
                  </div>
                  <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent notif-icons" id="toggle-icons" >
                    <i class="mute-notif fa-solid fa-volume-xmark"></i>
                    <i class="fa-solid fa-ellipsis info-toggle"></i>
                  </div>
                </div>
              </div>
              <div class="notif-menu hidden-notify px-2 shadow" style="background-color: white;" dataset="toggle-notif">
                <div class="delete-btn d-flex align-items-center">
                  <i class="fa-solid fa-trash-can"></i>
                  <div class="delete-text p-2">
                    <span class="delete-head">Remove</span>
                    <div class="head-text">Remove this notification</div>
                  </div>
                </div>
              </div>
            </div>`,
  },
  {
    item: `<div class="notification-container" id="toggle-notif">
              <div class="row info cleeck my-2 w-100 mx-auto align-items-center py-1 rounded-2" id="notclick">
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <img src="img/landing-page-image/logo-2.png" alt="">
                  </div>
                </div>
                <div class="col-8 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <p class="m-0 fw-bold" style="font-size: 10px;">David Freeman liked your comment “Tech....</p>
                    <p class="text-muted m-0" style="font-size: 8px;">2 hours 32 mins ago</p>
                  </div>
                </div>
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent notif-icons">
                    <i class="mute-notif fa-solid fa-volume-xmark"></i>
                    <i class="fa-solid fa-ellipsis info-toggle"></i>
                  </div>
                </div>
              </div>
              <div class="notif-menu hidden-notify px-2 shadow" style="background-color: white;"dataset="toggle-notif">
                <div class="delete-btn d-flex align-items-center">
                  <i class="fa-solid fa-trash-can"></i>
                  <div class="delete-text p-2">
                    <span class="delete-head">Remove</span>
                    <div class="head-text">Remove this notification</div>
                  </div>
                </div>
              </div>
            </div>`,
  },
  {
    item: `<div class="notification-container" id="toggle-notif">
              <div class="row info cleeck my-2 w-100 mx-auto align-items-center py-1 rounded-2" id="notclick">
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <img src="img/landing-page-image/logo-2.png" alt="">
                  </div>
                </div>
                <div class="col-8 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <p class="m-0 fw-bold" style="font-size: 10px;">KodeCamp updated their article on “Doing UX....</p>
                    <p class="text-muted m-0" style="font-size: 8px;">3 hours 40 mins ago</p>
                  </div>
                </div>
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent notif-icons">
                    <i class="mute-notif fa-solid fa-volume-xmark"></i>
                    <i class="fa-solid fa-ellipsis info-toggle"></i>
                  </div>
                </div>
              </div>
              <div class="notif-menu hidden-notify px-2 shadow" style="background-color: white;"dataset="toggle-notif">
                <div class="delete-btn d-flex align-items-center">
                  <i class="fa-solid fa-trash-can"></i>
                  <div class="delete-text p-2">
                    <span class="delete-head">Remove</span>
                    <div class="head-text">Remove this notification</div>
                  </div>
                </div>
              </div>
            </div>`,
  },
  {
    item: `<div class="notification-container" id="toggle-notif">
              <div class="row info cleeck my-2 w-100 mx-auto align-items-center py-1 rounded-2" id="notclick">
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <img src="img/landing-page-image/logo-2.png" alt="">
                  </div>
                </div>
                <div class="col-8 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <p class="m-0 fw-bold" style="font-size: 10px;">Check out notifications you missed on Program..</p>
                    <p class="text-muted m-0" style="font-size: 8px;">3 hours 56 mins ago</p>
                  </div>
                </div>
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent notif-icons">
                    <i class="mute-notif fa-solid fa-volume-xmark"></i>
                    <i class="fa-solid fa-ellipsis info-toggle"></i>
                  </div>
                </div>
              </div>
              <div class="notif-menu hidden-notify px-2 shadow" style="background-color: white;"dataset="toggle-notif">
                <div class="delete-btn d-flex align-items-center">
                  <i class="fa-solid fa-trash-can"></i>
                  <div class="delete-text p-2">
                    <span class="delete-head">Remove</span>
                    <div class="head-text">Remove this notification</div>
                  </div>
                </div>
              </div>
            </div>`,
  },
  {
    item: `<div class="notification-container" id="toggle-notif">
              <div class="row info cleeck my-2 w-100 mx-auto align-items-center py-1 rounded-2" id="notclick">
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <img src="img/landing-page-image/logo-2.png" alt="">
                  </div>
                </div>
                <div class="col-8 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <p class="m-0 fw-bold" style="font-size: 10px;">KodeCamp liked your comment “Wow, this is.....</p>
                    <p class="text-muted m-0" style="font-size: 8px;">4 hours 2 mins ago</p>
                  </div>
                </div>
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent notif-icons">
                    <i class="mute-notif fa-solid fa-volume-xmark"></i>
                    <i class="fa-solid fa-ellipsis info-toggle"></i>
                  </div>
                </div>
              </div>
              <div class="notif-menu hidden-notify px-2 shadow" style="background-color: white;"dataset="toggle-notif">
                <div class="delete-btn d-flex align-items-center">
                  <i class="fa-solid fa-trash-can"></i>
                  <div class="delete-text p-2">
                    <span class="delete-head">Remove</span>
                    <div class="head-text">Remove this notification</div>
                  </div>
                </div>
              </div>
            </div>`,
  },
  {
    item: `<div class="notification-container" id="toggle-notif">
              <div class="row info cleeck my-2 w-100 mx-auto align-items-center py-1 rounded-2" id="notclick">
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <img src="img/landing-page-image/logo-2.png" alt="">
                  </div>
                </div>
                <div class="col-8 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <p class="m-0 fw-bold" style="font-size: 10px;">Check out new article on Web3</p>
                    <p class="text-muted m-0" style="font-size: 8px;">4 hours 3 mins ago</p>
                  </div>
                </div>
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent notif-icons">
                    <i class="mute-notif fa-solid fa-volume-xmark"></i>
                    <i class="fa-solid fa-ellipsis info-toggle"></i>
                  </div>
                </div>
              </div>
              <div class="notif-menu hidden-notify px-2 shadow" style="background-color: white;"dataset="toggle-notif">
                <div class="delete-btn d-flex align-items-center">
                  <i class="fa-solid fa-trash-can"></i>
                  <div class="delete-text p-2">
                    <span class="delete-head">Remove</span>
                    <div class="head-text">Remove this notification</div>
                  </div>
                </div>
              </div>
            </div>`,
  },
  {
    item: `<div class="notification-container" id="toggle-notif">
              <div class="row info cleeck my-2 w-100 mx-auto align-items-center py-1 rounded-2" id="notclick">
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <img src="img/landing-page-image/logo-2.png" alt="">
                  </div>
                </div>
                <div class="col-8 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <p class="m-0 fw-bold" style="font-size: 10px;">Dangerman responded to your comment “Tech..</p>
                    <p class="text-muted m-0" style="font-size: 8px;">4 hours 15 mins ago</p>
                  </div>
                </div>
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent notif-icons">
                    <i class="mute-notif fa-solid fa-volume-xmark"></i>
                    <i class="fa-solid fa-ellipsis info-toggle"></i>
                  </div>
                </div>
              </div>
              <div class="notif-menu hidden-notify px-2 shadow" style="background-color: white;"dataset="toggle-notif">
                <div class="delete-btn d-flex align-items-center">
                  <i class="fa-solid fa-trash-can"></i>
                  <div class="delete-text p-2">
                    <span class="delete-head">Remove</span>
                    <div class="head-text">Remove this notification</div>
                  </div>
                </div>
              </div>
            </div>`,
  },
  {
    item: `<div class="notification-container" id="toggle-notif">
              <div class="row info cleeck my-2 w-100 mx-auto align-items-center py-1 rounded-2" id="notclick">
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <img src="img/landing-page-image/logo-2.png" alt="">
                  </div>
                </div>
                <div class="col-8 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <p class="m-0 fw-bold" style="font-size: 10px;">KodeCamp liked your comment “Tech is the........</p>
                    <p class="text-muted m-0" style="font-size: 8px;">4 hours 45 mins ago</p>
                  </div>
                </div>
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent notif-icons">
                    <i class="mute-notif fa-solid fa-volume-xmark"></i>
                    <i class="fa-solid fa-ellipsis info-toggle"></i>
                  </div>
                </div>
              </div>
              <div class="notif-menu hidden-notify px-2 shadow" style="background-color: white;"dataset="toggle-notif">
                <div class="delete-btn d-flex align-items-center">
                  <i class="fa-solid fa-trash-can"></i>
                  <div class="delete-text p-2">
                    <span class="delete-head">Remove</span>
                    <div class="head-text">Remove this notification</div>
                  </div>
                </div>
              </div>
            </div>`,
  },
  {
    item: `<div class="notification-container" id="toggle-notif">
              <div class="row info cleeck my-2 w-100 mx-auto align-items-center py-1 rounded-2" id="notclick">
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <img src="img/landing-page-image/logo-2.png" alt="">
                  </div>
                </div>
                <div class="col-8 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <p class="m-0 fw-bold" style="font-size: 10px;">KodeCamp updated their article on “Doing UX....</p>
                    <p class="text-muted m-0" style="font-size: 8px;">5 hours 7 mins ago</p>
                  </div>
                </div>
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent notif-icons">
                    <i class="mute-notif fa-solid fa-volume-xmark"></i>
                    <i class="fa-solid fa-ellipsis info-toggle"></i>
                  </div>
                </div>
              </div>
              <div class="notif-menu hidden-notify px-2 shadow" style="background-color: white;"dataset="toggle-notif">
                <div class="delete-btn d-flex align-items-center">
                  <i class="fa-solid fa-trash-can"></i>
                  <div class="delete-text p-2">
                    <span class="delete-head">Remove</span>
                    <div class="head-text">Remove this notification</div>
                  </div>
                </div>
              </div>
            </div>`,
  },
  {
    item: `<div class="notification-container" id="toggle-notif">
              <div class="row info cleeck my-2 w-100 mx-auto align-items-center py-1 rounded-2" id="notclick">
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <img src="img/landing-page-image/logo-2.png" alt="">
                  </div>
                </div>
                <div class="col-8 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <p class="m-0 fw-bold" style="font-size: 10px;">KodeCamp liked your comment “Wow, this is.....</p>
                    <p class="text-muted m-0" style="font-size: 8px;">5 hours 23 mins ago</p>
                  </div>
                </div>
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent notif-icons">
                    <i class="mute-notif fa-solid fa-volume-xmark"></i>
                    <i class="fa-solid fa-ellipsis info-toggle"></i>
                  </div>
                </div>
              </div>
              <div class="notif-menu hidden-notify px-2 shadow" style="background-color: white;"dataset="toggle-notif">
                <div class="delete-btn d-flex align-items-center">
                  <i class="fa-solid fa-trash-can"></i>
                  <div class="delete-text p-2">
                    <span class="delete-head">Remove</span>
                    <div class="head-text">Remove this notification</div>
                  </div>
                </div>
              </div>
            </div>`,
  },
  {
    item: `<div class="notification-container" id="toggle-notif">
              <div class="row info cleeck my-2 w-100 mx-auto align-items-center py-1 rounded-2" id="notclick">
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <img src="img/landing-page-image/logo-2.png" alt="">
                  </div>
                </div>
                <div class="col-8 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <p class="m-0 fw-bold" style="font-size: 10px;">David Freeman liked your comment “Tech....</p>
                    <p class="text-muted m-0" style="font-size: 8px;">5 hours 50 mins ago</p>
                  </div>
                </div>
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent notif-icons">
                    <i class="mute-notif fa-solid fa-volume-xmark"></i>
                    <i class="fa-solid fa-ellipsis info-toggle"></i>
                  </div>
                </div>
              </div>
              <div class="notif-menu hidden-notify px-2 shadow" style="background-color: white;"dataset="toggle-notif">
                <div class="delete-btn d-flex align-items-center">
                  <i class="fa-solid fa-trash-can"></i>
                  <div class="delete-text p-2">
                    <span class="delete-head">Remove</span>
                    <div class="head-text">Remove this notification</div>
                  </div>
                </div>
              </div>
            </div>`,
  },
  {
    item: `<div class="notification-container" id="toggle-notif">
              <div class="row info cleeck my-2 w-100 mx-auto align-items-center py-1 rounded-2" id="notclick">
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <img src="img/landing-page-image/logo-2.png" alt="">
                  </div>
                </div>
                <div class="col-8 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <p class="m-0 fw-bold" style="font-size: 10px;">KodeCamp responded to your comment “Tech....</p>
                    <p class="text-muted m-0" style="font-size: 8px;">5 hours 52 mins ago</p>
                  </div>
                </div>
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent notif-icons">
                    <i class="mute-notif fa-solid fa-volume-xmark"></i>
                    <i class="fa-solid fa-ellipsis info-toggle"></i>
                  </div>
                </div>
              </div>
              <div class="notif-menu hidden-notify px-2 shadow" style="background-color: white;"dataset="toggle-notif">
                <div class="delete-btn d-flex align-items-center">
                  <i class="fa-solid fa-trash-can"></i>
                  <div class="delete-text p-2">
                    <span class="delete-head">Remove</span>
                    <div class="head-text">Remove this notification</div>
                  </div>
                </div>
              </div>
            </div>`,
  },
  {
    item: `<div class="notification-container" id="toggle-notif">
              <div class="row info cleeck my-2 w-100 mx-auto align-items-center py-1 rounded-2" id="notclick">
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <img src="img/landing-page-image/logo-2.png" alt="">
                  </div>
                </div>
                <div class="col-8 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <p class="m-0 fw-bold" style="font-size: 10px;">Check out new article on Web3</p>
                    <p class="text-muted m-0" style="font-size: 8px;">6 hours ago</p>
                  </div>
                </div>
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent notif-icons">
                    <i class="mute-notif fa-solid fa-volume-xmark"></i>
                    <i class="fa-solid fa-ellipsis info-toggle"></i>
                  </div>
                </div>
              </div>
              <div class="notif-menu hidden-notify px-2 shadow" style="background-color: white;"dataset="toggle-notif">
                <div class="delete-btn d-flex align-items-center">
                  <i class="fa-solid fa-trash-can"></i>
                  <div class="delete-text p-2">
                    <span class="delete-head">Remove</span>
                    <div class="head-text">Remove this notification</div>
                  </div>
                </div>
              </div>
            </div>`,
  },
  {
    item: `<div class="notification-container" id="toggle-notif">
              <div class="row info cleeck my-2 w-100 mx-auto align-items-center py-1 rounded-2" id="notclick">
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <img src="img/landing-page-image/logo-2.png" alt="">
                  </div>
                </div>
                <div class="col-8 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <p class="m-0 fw-bold" style="font-size: 10px;">KodeCamp liked your comment “Tech is the........</p>
                    <p class="text-muted m-0" style="font-size: 8px;">6 hours 22 mins ago</p>
                  </div>
                </div>
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent notif-icons">
                    <i class="mute-notif fa-solid fa-volume-xmark"></i>
                    <i class="fa-solid fa-ellipsis info-toggle"></i>
                  </div>
                </div>
              </div>
              <div class="notif-menu hidden-notify px-2 shadow" style="background-color: white;"dataset="toggle-notif">
                <div class="delete-btn d-flex align-items-center">
                  <i class="fa-solid fa-trash-can"></i>
                  <div class="delete-text p-2">
                    <span class="delete-head">Remove</span>
                    <div class="head-text">Remove this notification</div>
                  </div>
                </div>
              </div>
            </div>`,
  },
  {
    item: `<div class="notification-container" id="toggle-notif">
              <div class="row info cleeck my-2 w-100 mx-auto align-items-center py-1 rounded-2" id="notclick">
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <img src="img/landing-page-image/logo-2.png" alt="">
                  </div>
                </div>
                <div class="col-8 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent">
                    <p class="m-0 fw-bold" style="font-size: 10px;">Dangerman responded to your comment “Tech..</p>
                    <p class="text-muted m-0" style="font-size: 8px;">6 hours 34 mins ago</p>
                  </div>
                </div>
                <div class="col-2 m-0 bg-transparent">
                  <div class="card border-0 bg-transparent notif-icons">
                    <i class="mute-notif fa-solid fa-volume-xmark"></i>
                    <i class="fa-solid fa-ellipsis info-toggle"></i>
                  </div>
                </div>
              </div>
              <div class="notif-menu hidden-notify px-2 shadow" style="background-color: white;"dataset="toggle-notif">
                <div class="delete-btn d-flex align-items-center">
                  <i class="fa-solid fa-trash-can"></i>
                  <div class="delete-text p-2">
                    <span class="delete-head">Remove</span>
                    <div class="head-text">Remove this notification</div>
                  </div>
                </div>
              </div>
            </div>`,
  },
];

const notification = document.querySelector(".notification-details");
let element = "";
for (let i = 0; i < notifArray.length; i++) {
  element += notifArray[i].item;
}

notification.innerHTML = element;

function toggleNotif() {
  const menuBtn = document.querySelectorAll(".info-toggle");

  menuBtn.forEach(function clickEvent(e) {
    e.addEventListener("click", toggleFunc);
  });

  function toggleFunc(e) {
    let parentElem = e.target.closest(".notification-container");
    let _id = parentElem.id;
    if (_id) {
      let childElem = parentElem.querySelector(`[dataset=${_id}]`);
      childElem.classList.toggle("hidden-notify");
    }
  }
}

toggleNotif();

function deleteFunc() {
  const deleteBtn = document.querySelectorAll(".delete-btn");
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", () => {
      deleteBtn[i].parentElement.parentElement.style.opacity = 0;
      setTimeout(() => {
        deleteBtn[i].parentElement.style.display = "none";
        deleteBtn[i].parentElement.parentElement.remove();
      }, 500);
    });
  }
}

deleteFunc();

const muteBtn = document.querySelector(".mute");
const unmuteBtn = document.querySelector(".unmute");
let muteIcons = document.querySelectorAll(".mute-notif");

function muteFunc() {
  muteBtn.addEventListener("click", () => {
    muteIcons.forEach((e) => {
      e.classList.add("show-mute");
      e.classList.remove("mute-notif");
    });
    muteBtn.style.display = "none";
    unmuteBtn.style.display = "block";
  });

  unmuteBtn.addEventListener("click", () => {
    muteIcons.forEach((e) => {
      e.classList.remove("show-mute");
      e.classList.add("mute-notif");
    });
    muteBtn.style.display = "block";
    unmuteBtn.style.display = "none";
  });
}
muteFunc();

let sideDrop = document.querySelector(".sidedrop");
let sideListItems = document.querySelector(".side-list-item");

sideDrop.addEventListener("click", function () {
  sideListItems.classList.toggle("side-list-item-show");
});

function notCleek() {
  const notClick = document.querySelectorAll("#notclick");
  for (let i = 0; i < notClick.length; i++) {
    notClick[i].addEventListener("click", () => {
      notClick[i].style.backgroundColor = "#E0E0E0";
    });
  }
}
notCleek();

function readAll() {
  const readAll = document.querySelector(".markall");
  readAll.addEventListener("click", () => {
    let notClick = document.querySelectorAll("#notclick");
    for (let i = 0; i < notClick.length; i++) {
      notClick[i].style.backgroundColor = "#E0E0E0";
    }
  });
}
readAll();

const modal = document.querySelector(".popup-content-logout");
const modalParent = document.querySelector(".popup-logout");
const overlay = document.querySelector(".overlay-logout");
const btnCloseModal = document.querySelectorAll(".close-modal-logout");
const btnsOpenModal = document.querySelector(".open-modal-logout");

const toggleModal = function () {
  modal.classList.toggle("hidden-logout");
  overlay.classList.toggle("hidden-logout");
  modalParent.classList.toggle("hidden-logout");
};

btnsOpenModal.addEventListener("click", toggleModal);

for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener("click", toggleModal);
}
overlay.addEventListener("click", toggleModal);

//Handling and escape keypress
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden-logout")) {
    toggleModal();
  }
});

let accountDrop = document.querySelector(".account-drop");
let accountList = document.querySelector(".account-list");
console.log(accountList);
accountDrop.addEventListener("click", function () {
  console.log("clicked");
  accountList.classList.toggle("account-list-show");
});

//input function//

const button = document.querySelector(".trending-button");
const input = document.querySelector(".trending-input");

input.value = "Kodeblog.com/Trending/Figma_new_features";
function copy() {
  const copyText = input.value;
  navigator.clipboard.writeText(copyText);
}

button.addEventListener("click", copy);

/////////CREATE DATE AND TIME
const labelDate = [...document.querySelectorAll(".date-now")];
const now = new Date();
const date = `${now.getDate()}`.padStart(2, 0);
const month = `${now.toLocaleString("en-us", { month: "short" })}`;
const year = now.getFullYear();

console.log(now);
labelDate.forEach(
  (day) => (day.textContent = `${month} ${date}, ${year} . 5mins read`)
);
/// date/ month / year
