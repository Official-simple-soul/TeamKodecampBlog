let book = document.querySelectorAll('.book');


for (let i = 0; i < book.length; i++) {
    book[i].addEventListener('click', function() {
        book[i].classList.toggle('red');
    }
)}





