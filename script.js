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
