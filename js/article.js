const commentArray = [
    {
        name: 'John Doe',
        date: '13 December 2020 - 19:35',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam massa at quam congue, idea ullamcorper orci ipsumer dolor sit amet, consectetur adipiscing elit. Duis aliquam massa at quam congue, id ullamcorper orci interdum. Sed pretium diam orciinterdum.'
    },

    {
        name: 'Samuel Jack',
        date: '13 December 2020 - 19:35',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam massa at quam congue, idea ullamcorper orci ipsumer dolor sit amet, consectetur adipiscing elit. Duis aliquam massa at quam congue, id ullamcorper orci interdum. Sed pretium diam orciinterdum.'
    },

    {
        name: 'Vicomour Drake',
        date: '13 December 2020 - 19:35',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam massa at quam congue, idea ullamcorper orci ipsumer dolor sit amet, consectetur adipiscing elit. Duis aliquam massa at quam congue, id ullamcorper orci interdum. Sed pretium diam orciinterdum.'
    }
];


//fetching array items and displaying on the page
function displayItems() {
    let details = '';
    commentArray.forEach(function getInfo(e) {
    
        details += `<div class="comment-container" id="first-comment" data-select="first-reply" data-hide="hide-btn">
                    <div class="info bg-light p-4 rounded mt-3">
                        <div class="profile-head d-flex">
                            <h6 class="profile-tag rounded-circle d-flex justify-content-center align-items-center text-light p-1 m-1">AA</h6>
                            <div class="profile-info ms-2">
                                <span class="name">${e.name}</span>
                                <div class="date">${e.date}</div>
                            </div>
                        </div>
                        <div class="profile-body">
                            <p>${e.comment}</p>
                        </div><hr>
                        <div class="reply-icons">
                            <span class="hide-icon">
                                <i class="fa-solid fa-angles-up"></i>
                                <span class="hide-reply me-2">Hide replies</span>
                            </span>
                            <span class="reply-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/>
                                    <span>Reply</span>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <span class="reply-input hide-input" dataset="first-comment">
                        <input type="text" placeholder="Name" class="commenter rounded p-1">
                        <input class="comment-reply rounded p-1" type="text" placeholder="Send a Reply">
                        <button class="send bg-primary rounded p-1">Send</button>
                    </span>
                    <div class="replies-sec d-flex justify-content-end mt-5">
                        <ul class="list-items"  dataset="first-reply" id="hide-btn">
                            <li>
                            </li>
                        </ul>
                    </div>
                </div>`

                const comments = document.querySelector('.comments');
                comments.innerHTML = details;
})
}

displayItems();

//to create a new comment
//selection of input items and button
const personName = document.querySelector('.name');
const input = document.querySelector('.input');
const btn = document.querySelector('.button');


//event listener to enable posting of comment
btn.addEventListener('click', addComment);

function addComment() {
    if (input.value !== '') {
        commentArray.unshift({
            name: personName.value,
            date: Date(),
            comment: input.value
        })
        
        personName.value = '';
        input.value = '';
    }
    displayItems();
    replyInput();
    newReply();
    hideInput();
}


//function to enable reply action after click 
function replyInput() {
    const replyButton = document.querySelectorAll('.reply-icon');
    
    replyButton.forEach(function replyBtn(e) {
        e.addEventListener('click', showInput);
    })
    
    
    function showInput(e) {
        let parentItem = e.target.closest('.comment-container');
        let _id = parentItem.id
        if (_id) {
            let childrenContainer = parentItem.querySelector(`[dataset=${_id}]`);
            childrenContainer.classList.toggle('hide-input')
        }
    }

}
replyInput();


//function to create a new reply on a newly added comment
function newReply() {
    const commenter = document.querySelector('.commenter');
    const commentReply = document.querySelector('.comment-reply')
    const sendbtn = document.querySelectorAll('.send');
    sendbtn.forEach(function btn(e) {
        e.addEventListener('click', function event(a) {
            let headClass = a.target.closest('.comment-container');
            let _id = headClass.dataset.select
            if(_id) {
                let childrenContainer = headClass.querySelector(`[dataset=${_id}]`);
                let li = document.createElement('li');
                li.innerHTML = `<div class="replies bg-light p-4 rounded mt-3">
                                    <div class="profile-head d-flex">
                                        <h6 class="profile-tag rounded-circle d-flex justify-content-center p-1 m-1">AA</h6>
                                        <div class="profile-info ms-2">
                                            <span class="name">${commenter.value}</span>
                                            <div class="date">${Date()}</div>
                                        </div>
                                    </div>
                                    <div class="profile-body">
                                        <p>${commentReply.value}</p>
                                    </div><hr>
                                </div>`;
                childrenContainer.appendChild(li);
                commenter.value = '';
                commentReply.value = '';
                
            }
        })
    })
}

newReply();


//function to hide all replies if any
function hideInput() {
    const hideButton = document.querySelectorAll('.hide-icon');
    
    hideButton.forEach(function hideBtn(e) {
        e.addEventListener('click', hideInput);
    })
    
    function hideInput(e) {
        let parentItem = e.target.closest('.comment-container');
        let _id = parentItem.dataset.hide
        if (_id) {
            let childrenContainer = document.querySelector(`[id=${_id}]`);
            childrenContainer.classList.toggle('hide-input');
            const hideReply = document.querySelectorAll('.hide-reply');
            hideReply.forEach(function iconState(c) {
                if (childrenContainer.classList.contains('hide-input')) {
                    c.innerHTML = 'Show replies';
                } else if (!childrenContainer.classList.contains('hide-input')) {
                    c.innerHTML = 'Hide replies';
                }
            })
        }
    }

}
hideInput();

let book = document.querySelectorAll('.book');


for (let i = 0; i < book.length; i++) {
    book[i].addEventListener('click', function() {
        book[i].classList.toggle('red');
    }
)}


// new

