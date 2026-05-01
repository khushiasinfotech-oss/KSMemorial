
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

// ==============================
// RUN EVERYTHING AFTER PAGE LOAD
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    activateMenu();
    initSubMenu();

    // Mobile Menu Toggle
    const openBtn = document.querySelector(".btn_open");
    const mobileMenu = document.querySelector(".mobile-side-menu");
    if (openBtn && mobileMenu) {
        openBtn.addEventListener("click", function () {
            mobileMenu.classList.toggle("active");
        });
    }

    // Lazy Load Videos and Play/Pause on Scroll
    const lazyVideos = document.querySelectorAll(".lazy-video, .gallery-video");
    const lazyImages = document.querySelectorAll(".gallery-img, .img-thumbnail");

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;

            if (entry.isIntersecting) {
                // Lazy load source
                if (video.dataset.src && !video.src) {
                    video.src = video.dataset.src;
                    video.load();
                } else {
                    const source = video.querySelector("source");
                    if (source && source.dataset.src && !source.src) {
                        source.src = source.dataset.src;
                        video.load();
                    }
                }
                
                // Play if it's a gallery video
                if (video.classList.contains("gallery-video")) {
                    video.play().catch(e => console.log("Video play interrupted or blocked:", e));
                }
            } else {
                // Pause if it's a gallery video
                if (video.classList.contains("gallery-video")) {
                    video.pause();
                }
            }
        });
    }, {
        threshold: 0.1 // Start loading/playing when 10% is visible
    });

    lazyVideos.forEach(video => videoObserver.observe(video));

    // Image Intersection (for animations if needed)
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                imageObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    lazyImages.forEach(img => imageObserver.observe(img));
});

// Load Footer
document.addEventListener("DOMContentLoaded", function () {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
        fetch("footer.html")
            .then(response => response.text())
            .then(data => {
                footerElement.innerHTML = data;
            })
            .catch(err => console.error("Error loading footer:", err));
    }
});

document.addEventListener("click", function (e) {
    const menu = document.querySelector(".mobile-side-menu");
    const btn = document.querySelector(".btn_open");
    if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove("active");
    }
});


// 


