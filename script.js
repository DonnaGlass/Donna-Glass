// ===== Cards Animation =====

const cards = document.querySelectorAll(".card");

function revealCards() {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            card.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

// ===== Back To Top =====

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
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

// ===== Lightbox =====

const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

images.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

    });

});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }

});

// ===== Statistics Counter =====

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = +counter.dataset.target;

    let count = 0;

    const update = () => {

        count += Math.ceil(target / 100);

        if (count < target) {

            counter.textContent = count;

            requestAnimationFrame(update);

        } else {

            counter.textContent = target + "+";

        }

    };

    update();

});
window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(function(){

            loader.style.opacity = "0";

            setTimeout(function(){

                loader.style.display = "none";

            },800);

        },1500);

    }

});
/* ===== Navbar Effect ===== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(){

    if(window.scrollY > 80){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});
/* ===== Active Menu ===== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", ()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(scrollY>=sectionTop){
            current=section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){
            link.classList.add("active");
        }

    });

});

/* ===== Sections Animation ===== */

const hiddenSections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-section");

        }

    });

},{
    threshold:0.2
});

hiddenSections.forEach(section=>{

    section.classList.add("hidden");
    observer.observe(section);

});
/* ===== Hide / Show Navbar ===== */

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const navbar = document.getElementById("navbar");
    const currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll && currentScroll > 120){

        navbar.style.transform = "translateY(-100%)";

    }else{

        navbar.style.transform = "translateY(0)";

    }

    lastScroll = currentScroll;

});
