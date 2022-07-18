"use strict";

let value = "";
let add = document.querySelectorAll("#change");
let count = document.querySelectorAll("#count");
let book = document.querySelectorAll(".book")

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


//notification function
const notifArray = [{
    item: `<div class="notification-container" id="toggle-notif">
            <div class="row info cleeck my-2 w-100 mx-auto align-items-center py-1 rounded-2" id="notclick">
              <div class="col-2 m-0 bg-transparent">
                <div class="card border-0 bg-transparent">
                  <img src="img/landing-page-image/logo-2.png" alt="">
                </div>
              </div>
              <div class="col-8 m-0 bg-transparent">
                <div class="card border-0 bg-transparent">
                  <p class="m-0 fw-bold" style="font-size: 10px;">Lorem ipsum dolor sit amet, consectetur adipiscimn dolor sit</p>
                  <p class="text-muted m-0" style="font-size: 8px;">5 hours ago</p>
                </div>
              </div>
              <div class="col-2 m-0 bg-transparent">
                <div class="card border-0 bg-transparent">
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
              <div class="mute-btn d-flex align-items-center">
                <i class="fa-solid fa-volume-xmark"></i>
                <div class="mute-text p-2">
                  <span class="mute-head">Mute</span>
                  <div class="head-text">Mute this notification</div>
                </div>
              </div>
            </div>
          </div>`

}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

let data = notifArray[0];
notifArray.fill(data, 1, 26);

const notification = document.querySelector('.notification-details');
let element = '';
for (let i = 0; i < notifArray.length; i++) {
    element += notifArray[i].item;
}

notification.innerHTML = element;


function toggleNotif() {
    const menuBtn = document.querySelectorAll('.info-toggle');

    menuBtn.forEach(function clickEvent(e) {
        e.addEventListener('click', toggleFunc);
    })

    function toggleFunc(e) {
        let parentElem = e.target.closest('.notification-container');
        let _id = parentElem.id
        if (_id) {
            let childElem = parentElem.querySelector(`[dataset=${_id}]`);
            childElem.classList.toggle('hidden-notify');
        }
    }
}

toggleNotif();


function deleteFunc() {
    const deleteBtn = document.querySelectorAll('.delete-btn')
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', () => {
            deleteBtn[i].parentElement.parentElement.style.opacity = 0;
            setTimeout(() => {
                deleteBtn[i].parentElement.style.display = 'none';
                deleteBtn[i].parentElement.parentElement.remove();
            }, 500);
        })

    }

}

deleteFunc();


let sideDrop = document.querySelector('.sidedrop');
let sideListItems = document.querySelector('.side-list-item');

sideDrop.addEventListener('click', function () {
    sideListItems.classList.toggle('side-list-item-show');
})


function notCleek() {
    const notClick = document.querySelectorAll('#notclick');
    for (let i = 0; i < notClick.length; i++) {
        notClick[i].addEventListener('click', () => {
            notClick[i].style.backgroundColor = '#E0E0E0';
        })
    }
}
notCleek();

function readAll() {
    const readAll = document.querySelector('.markall');
    readAll.addEventListener('click', () => {
        let notClick = document.querySelectorAll('#notclick');
        for (let i = 0; i < notClick.length; i++) {
            notClick[i].style.backgroundColor = '#E0E0E0';
        }
    })
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

let accountDrop = document.querySelector('.account-drop');
let accountList = document.querySelector('.account-list');
console.log(accountList);
accountDrop.addEventListener('click', function () {
    console.log('clicked');
    accountList.classList.toggle('account-list-show');
})

//BOOKMARK JS
////BOOKMARK COLOR
for (let i = 0; i < book.length; i++) {
    book[i].style.color = "white";
    book[i].addEventListener("click", function () {
        if (book[i].style.color === "white") {
            book[i].style.color = "black";
        } else {
            book[i].style.color = "white";
        }
    });
}

// technology bookmark
const tech1 = document.querySelector('.Technology-1');
const techCollection = document.querySelector('#tech-1');

// design bookmark
const dsgn1 = document.querySelector('.Design-1');
const dsgnCollection = document.querySelector('#dsgn-1');

// for technology & design
const bookmarkTitle = document.querySelector('.bookmark-title');
const iconsForBookmark = document.querySelector('.icons-for-bookmark'); // changed icons-for-tech to icons-for-bookmarks
const toggleFunctionSolid = document.querySelector('.toggle-function-solid');
const toggleFunctionRegular = document.querySelector('.toggle-function-regular');
const gridBoxes = document.querySelectorAll('.grid-box'); // changed technology-box to grid-box
const listView = document.querySelectorAll('.list-view');


// open technology bookmark
function toggleopenTech1() {
    tech1.classList.toggle('showTech1');
    dsgn1.classList.remove('showDsgn1');
    techCollection.classList.toggle('active-collection');
    dsgnCollection.classList.remove('active-collection');
    iconsForBookmark.classList.add('show-icons-for-bookmark');
    bookmarkTitle.classList.add('show-bookmark-title');
    toggleSolid();
}
console.log(toggleopen);

// open design bookmark
function toggleopenDsgn1() {
    dsgn1.classList.toggle('showDsgn1');
    tech1.classList.remove('showTech1');
    dsgnCollection.classList.toggle('active-collection');
    techCollection.classList.remove('active-collection');
    iconsForBookmark.classList.add('show-icons-for-bookmark');
    bookmarkTitle.classList.add('show-bookmark-title');
    toggleSolid();
}


// grid & list view toggler 
function toggleSolid() {
    toggleFunctionSolid.classList.add('fa-solid');
    gridBoxes.forEach(function (box) {
        box.classList.add('col-lg-6');
        box.classList.remove('d-none');
    })

    listView.forEach(function (list) {
        list.classList.add('d-none');
    })
    toggleFunctionRegular.classList.remove('fa-solid');
}

function toggleRegular() {
    toggleFunctionSolid.classList.remove('fa-solid');
    gridBoxes.forEach(function (box) {
        box.classList.add('d-none');
    })
    listView.forEach(function (list) {
        list.classList.remove('d-none');
    })
    toggleFunctionRegular.classList.add('fa-solid');

}


//new collection function
document.querySelector('.collection-title').addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.cancel').addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'none';
})

document.querySelector('.create').addEventListener('click', () => {
    const modalInput = document.querySelector('.modal-input-value');
    const list = document.querySelector('.bookmark-list');
    let li = document.createElement('li');
    li.innerHTML = `<div class="d-flex align-items-center justify-content-between border 
                    bg-white account-select rounded-bottom animate__animated animate__flipInX animate__faster collection">
                  <p class="pt-3 ps-2">${modalInput.value}</p>
                  <i class="fa-solid fa-chevron-right pe-3"></i>
                </div>`;
    document.querySelector('.bg-modal').style.display = 'none';
    list.appendChild(li);
    const errorMsg = document.querySelector('.error-msg');
    if (modalInput.value === '') {
        errorMsg.innerHTML = "title"
    };
})


//input bookmark//

const button = document.querySelector('.trending-button');
const input = document.querySelector('.trending-input');

input.value = 'Kodeblog.com/Trending/Figma_new_features';

function copy() {
    const copyText = input.value;
    navigator.clipboard.writeText(copyText);
}
button.addEventListener('click', copy);