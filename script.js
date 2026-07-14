/*==================================================
        DONNA GLASS V3.1
==================================================*/

/*============== LOADER ==============*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        if (loader) {
            loader.classList.add("loader-hide");

            setTimeout(() => {
                loader.remove();
            }, 800);
        }

    }, 1500);

});


/*============== STICKY NAVBAR ==============*/

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/*============== ACTIVE MENU ==============*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 140;
        const height = section.offsetHeight;

        if (window.pageYOffset >= top &&
            window.pageYOffset < top + height) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*============== DARK MODE ==============*/

const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

        }

    });

}
/*==================================================
        BACK TO TOP
==================================================*/

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    topBtn.style.display = "none";

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            topBtn.style.display = "flex";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/*==================================================
        LIGHTBOX GALLERY
==================================================*/

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

if (lightbox && lightboxImg && closeBtn) {

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;

        });

    });

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }

    });

}
/*==================================================
            COUNTER ANIMATION
==================================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        let value = 0;
        const step = Math.ceil(target / 120);

        function updateCounter() {

            value += step;

            if (value < target) {

                counter.textContent = value;
                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target + "+";

            }

        }

        updateCounter();
        counterObserver.unobserve(counter);

    });

}, { threshold: 0.5 });

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*==================================================
            SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
/*==================================================
        SECTION ANIMATION
==================================================*/

const hiddenSections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-section");

        }

    });

}, {
    threshold: 0.15
});

hiddenSections.forEach(section => {

    section.classList.add("hidden");
    sectionObserver.observe(section);

});


/*==================================================
        CURRENT YEAR
==================================================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/*==================================================
        CONSOLE
==================================================*/

console.clear();

console.log(
"%cDONNA GLASS",
"color:#003b8e;font-size:28px;font-weight:bold;"
);

console.log(
"%cProfessional Glass Processing Solutions",
"color:#39b6ff;font-size:14px;"
);

/*==================================================
        END OF FILE
==================================================*/
