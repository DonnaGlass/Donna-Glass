window.addEventListener("scroll", function () {

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        const position = card.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if(position < screen - 100){
            card.classList.add("show");
        }

    });

});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

if(lightbox && lightboxImg && closeBtn){

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if(e.target === lightbox){
            lightbox.style.display = "none";
        }
    });

}
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});
