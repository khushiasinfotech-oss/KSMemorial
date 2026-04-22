

// fetch("header.html")
// .then(response => response.text())
// .then(data => {
//     document.getElementById("header").innerHTML = data;

//     activateMenu(); 
// });




// // Active menu
// function activateMenu() {

//     const currentPage = window.location.pathname.split("/").pop();

//     document.querySelectorAll(".level_1 li a").forEach(link => {

//         if (link.getAttribute("href") === currentPage) {

//             link.classList.add("active");

//             const parentMenu = link.closest(".level_2");
//             if (parentMenu) {
//                 parentMenu.previousElementSibling.classList.add("active");
//             }
//         }
//     });

// }


// ==============================
// ACTIVE MENU
// ==============================
function activateMenu() {

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".level_1 a").forEach(link => {

        const linkPage = link.getAttribute("href").split("#")[0];

        if (linkPage === currentPage) {

            link.classList.add("active");

            const parentMenu = link.closest(".level_2");

            if (parentMenu) {
                parentMenu.previousElementSibling.classList.add("active");
            }
        }
    });
}




// ==============================
// SUBMENU TOGGLE (MOBILE)
// ==============================
function initSubMenu() {

    document.querySelectorAll(".has-submenu > a")
        .forEach(item => {

            item.addEventListener("click", function (e) {

                if (window.innerWidth < 992) {
                    e.preventDefault();
                    this.nextElementSibling.classList.toggle("show");
                }

            });
        });

}


document.addEventListener("DOMContentLoaded", function () {

    activateMenu();   // ✅ activates menu on every page

});



// Load Footer
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });

// ==============================
// RUN EVERYTHING AFTER PAGE LOAD
// ==============================
document.addEventListener("DOMContentLoaded", function () {

    activateMenu();
    initMobileMenu();
    initSubMenu();
    loadFooter();

});




document.addEventListener("DOMContentLoaded", function () {

    const openBtn = document.querySelector(".btn_open");
    const mobileMenu = document.querySelector(".mobile-side-menu");

    openBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });

});



document.addEventListener("click", function (e) {

    const menu = document.querySelector(".mobile-side-menu");
    const btn = document.querySelector(".btn_open");

    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove("active");
    }

});



document.querySelectorAll(".has-submenu > a").forEach(item => {

    item.addEventListener("click", function (e) {

        if (window.innerWidth < 992) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle("show");
        }

    });

});



document.addEventListener("DOMContentLoaded", function () {

    const videos = document.querySelectorAll(".gallery-video");
    const images = document.querySelectorAll(".gallery-img");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            // VIDEO PLAY / PAUSE
            if (entry.target.tagName === "VIDEO") {
                if (entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
            }

            // IMAGE ANIMATION
            if (entry.target.tagName === "IMG") {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            }

        });
    }, {
        threshold: 0.5   // visible 50%
    });

    videos.forEach(video => observer.observe(video));
    images.forEach(img => observer.observe(img));

});


// lazy Load video

document.addEventListener("DOMContentLoaded", function () {

    const videos = document.querySelectorAll(".lazy-video");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                const video = entry.target;
                const source = video.querySelector("source");

                if (source.dataset.src) {
                    source.src = source.dataset.src;
                    video.load();
                }

                observer.unobserve(video);
            }
        });
    });

    videos.forEach(video => observer.observe(video));

});
