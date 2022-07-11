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
function toggleopenTech1(){
  tech1.classList.toggle('showTech1');
  dsgn1.classList.remove('showDsgn1');
  techCollection.classList.toggle('active-collection'); 
  dsgnCollection.classList.remove('active-collection');
  iconsForBookmark.classList.add('show-icons-for-bookmark');
  bookmarkTitle.classList.add('show-bookmark-title');
  toggleSolid();
}

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
  gridBoxes.forEach(function(box){
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
  gridBoxes.forEach(function(box){
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
  modalInput.value = '';
})
