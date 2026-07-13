// =======================================
// DONNA GLASS V2.0
// =======================================

// ===== Cards Animation =====

const cards = document.querySelectorAll(".card");

function revealCards() {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        if (position < window.innerHeight - 80) {
            card.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);


// ===== Loader =====

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("loader-hide");

        setTimeout(() => {

            loader.remove();

        }, 800);

    }, 1500);

});


// ===== Navbar =====

const navbar = document.getElementById("navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}


// ===== Hide Navbar =====

let lastScroll = 0;

window.addEventListener("scroll", () => {

    if (!navbar) return;

    const current = window.pageYOffset;

    if (current > lastScroll && current > 150) {

        navbar.style.transform = "translateY(-100%)";

    } else {

        navbar.style.transform = "translateY(0)";

    }

    lastScroll = current;

});


// ===== Active Menu =====

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
// =======================================
// BACK TO TOP
// =======================================

const topBtn = document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

}


// =======================================
// LIGHTBOX
// =======================================

const galleryImages=document.querySelectorAll(".gallery img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const close=document.getElementById("close");

if(lightbox){

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

lightboxImg.alt=img.alt;

});

});

close.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});

}


// =======================================
// COUNTER
// =======================================

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter=entry.target;

const target=Number(counter.dataset.target);

let value=0;

const speed=Math.max(1,Math.ceil(target/100));

function update(){

value+=speed;

if(value<target){

counter.textContent=value;

requestAnimationFrame(update);

}else{

counter.textContent=target+"+";

}

}

update();

counterObserver.unobserve(counter);

});

},{
threshold:.5
});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


// =======================================
// SECTION ANIMATION
// =======================================

const hiddenSections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show-section");

}

});

},{
threshold:.15
});

hiddenSections.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});
// =======================================
// LANGUAGE SYSTEM
// =======================================

const language = {

fr:{

heroTitle:"Bienvenue chez Donna Glass",
heroText:"Leader dans la transformation du verre pour le bâtiment, l'automobile et l'électroménager.",
heroBtn:"Voir nos produits",

aboutTitle:"À propos de nous",

productsTitle:"Nos Produits",

servicesTitle:"Nos Services",

galleryTitle:"Notre Galerie",

contactTitle:"Demande de devis"

},

en:{

heroTitle:"Welcome to Donna Glass",
heroText:"Leader in glass processing for construction, automotive and home appliances.",
heroBtn:"View Products",

aboutTitle:"About Us",

productsTitle:"Our Products",

servicesTitle:"Our Services",

galleryTitle:"Our Gallery",

contactTitle:"Request a Quote"

},

ar:{

heroTitle:"مرحبًا بكم في دونا غلاس",
heroText:"الرائد في تحويل الزجاج للبناء والسيارات والأجهزة الكهرومنزلية.",
heroBtn:"اكتشف منتجاتنا",

aboutTitle:"من نحن",

productsTitle:"منتجاتنا",

servicesTitle:"خدماتنا",

galleryTitle:"معرض الصور",

contactTitle:"طلب عرض سعر"

}

};


// =======================================
// CHANGE LANGUAGE
// =======================================

function setLanguage(lang){

const html=document.documentElement;

if(lang==="ar"){

html.lang="ar";
html.dir="rtl";

}else{

html.lang=lang;
html.dir="ltr";

}

localStorage.setItem("language",lang);

const t=language[lang];

const ids={

"hero-title":t.heroTitle,
"hero-text":t.heroText,
"hero-btn":t.heroBtn,
"about-title":t.aboutTitle,
"products-title":t.productsTitle,
"services-title":t.servicesTitle,
"gallery-title":t.galleryTitle,
"contact-title":t.contactTitle

};

Object.keys(ids).forEach(id=>{

const el=document.getElementById(id);

if(el){

el.textContent=ids[id];

}

});

}


// =======================================
// LANGUAGE BUTTONS
// =======================================

const frBtn=document.getElementById("fr");
const enBtn=document.getElementById("en");
const arBtn=document.getElementById("ar");

if(frBtn){

frBtn.onclick=()=>setLanguage("fr");

}

if(enBtn){

enBtn.onclick=()=>setLanguage("en");

}

if(arBtn){

arBtn.onclick=()=>setLanguage("ar");

}


// =======================================
// LOAD SAVED LANGUAGE
// =======================================

window.addEventListener("load",()=>{

const saved=localStorage.getItem("language")||"fr";

setLanguage(saved);

});
