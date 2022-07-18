let lang = document.querySelector(".lang");
let user = document.querySelector(".user");
let notificationSettings = document.querySelector(".notification-set");
let acc = document.querySelectorAll(".account-select");
let val = document.querySelectorAll(".val");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let onload = document.querySelector(".on-load");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // window.alert("This feature is not yet available");
    // acc[i].style.backgroundColor = "red";
    let value = val[i].innerHTML;
    if (value === "User Management") {
        lang.classList.add("hidden");
        user.classList.remove("hidden");
        notificationSettings.classList.add("hidden");
        one.style.backgroundColor = "#CFE2FF";
        two.style.backgroundColor = "white";
        three.style.backgroundColor = "white";
        

    }

    else if (value === "Language Settings") {
        lang.classList.remove("hidden");
        user.classList.add("hidden");
        notificationSettings.classList.add("hidden");
        // acc[i].style.backgroundColor = "red";
        one.style.backgroundColor = "white";
        two.style.backgroundColor = "#CFE2FF";
        three.style.backgroundColor = "white";
        onload.classList.remove("on-load");
    }

    else if (value === "Notification Settings") {
        lang.classList.add("hidden");
        user.classList.add("hidden");
        notificationSettings.classList.remove("hidden");
        // acc[i].style.backgroundColor = "red";
        one.style.backgroundColor = "white";
        two.style.backgroundColor = "white";
        three.style.backgroundColor = "#CFE2FF";
        onload.classList.remove("on-load");
    }

    else {
        acc[i].style.backgroundColor = "white";
    }


  });
}       


window.onload = function () {
    const tab_switchers = document.querySelectorAll("[data-switcher]");

    for (let i = 0; i < tab_switchers.length; i++) {

        const tab_switcher = tab_switchers[i];

        let page_id = tab_switcher.dataset.tab;
        // console.log(page_id);
        tab_switcher.addEventListener("click", function () {
            let eng = document.querySelectorAll(".eng");
            const tab_pages = document.querySelectorAll("[data-page]");

            for (let i = 0; i < tab_pages.length; i++) {
                const tab_page = tab_pages[i];
                tab_page.classList.add("hidden");
                eng[i].classList.remove("active-");
            }

            const tab_page = document.querySelector(`[data-page="${page_id}"]`);
            tab_page.classList.remove("hidden");
            tab_page.classList.add("active-");
            eng[i].classList.add("active-");
            console.log(eng);
        });

    }
}


