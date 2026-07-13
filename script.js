/*==================================================
            DONNA GLASS V3.0
        Professional JavaScript
==================================================*/


/*========== LOADER ==========*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.classList.add("loader-hide");

setTimeout(()=>{

loader.remove();

},800);

},1500);

});


/*========== STICKY NAVBAR ==========*/

const navbar=document.getElementById("navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});


/*========== ACTIVE MENU ==========*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-140;

const height=section.clientHeight;

if(pageYOffset>=top){

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


/*========== SCROLL ANIMATION ==========*/

const cards=document.querySelectorAll(".card");

function revealCards(){

cards.forEach(card=>{

const position=card.getBoundingClientRect().top;

if(position<window.innerHeight-80){

card.classList.add("show");

}

});

}

window.addEventListener("scroll",revealCards);

window.addEventListener("load",revealCards);


/*========== BACK TO TOP ==========*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/*========== DARK MODE ==========*/

const themeBtn=document.getElementById("theme-toggle");

const body=document.body;

if(localStorage.getItem("theme")==="dark"){

body.classList.add("dark");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

themeBtn.onclick=()=>{

body.classList.toggle("dark");

if(body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

localStorage.setItem("theme","light");

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

};
/*=========================================
            LIGHTBOX
=========================================*/

const galleryImages=document.querySelectorAll(".gallery img");
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");
const closeBtn=document.getElementById("close");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";
lightboxImg.src=img.src;
lightboxImg.alt=img.alt;

});

});

closeBtn.onclick=()=>{

lightbox.style.display="none";

}

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};


/*=========================================
              COUNTER
=========================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting)return;

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=Math.ceil(target/120);

function update(){

count+=speed;

if(count<target){

counter.innerText=count;

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

}

update();

counterObserver.unobserve(counter);

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*=========================================
           LANGUAGE SYSTEM
=========================================*/

const translations={

fr:{

heroTitle:"Bienvenue chez Donna Glass",

heroText:"Leader dans la transformation professionnelle du verre pour le bâtiment, l'automobile et les appareils électroménagers.",

heroBtn:"Demander un devis",

navHome:"Accueil",

navAbout:"À propos",

navProducts:"Produits",

navServices:"Services",

navGallery:"Galerie",

navContact:"Contact"

},

en:{

heroTitle:"Welcome to Donna Glass",

heroText:"Leader in professional glass processing for construction, automotive and home appliances.",

heroBtn:"Request a Quote",

navHome:"Home",

navAbout:"About",

navProducts:"Products",

navServices:"Services",

navGallery:"Gallery",

navContact:"Contact"

},

ar:{

heroTitle:"مرحبًا بكم في دونا غلاس",

heroText:"الرائد في معالجة الزجاج للبناء والسيارات والأجهزة الكهرومنزلية.",

heroBtn:"اطلب عرض سعر",

navHome:"الرئيسية",

navAbout:"من نحن",

navProducts:"المنتجات",

navServices:"الخدمات",

navGallery:"المعرض",

navContact:"اتصل بنا"

}

};


function setLanguage(lang){

document.documentElement.lang=lang;

document.documentElement.dir=(lang==="ar")?"rtl":"ltr";

localStorage.setItem("language",lang);

const t=translations[lang];

document.getElementById("hero-title").textContent=t.heroTitle;
document.getElementById("hero-text").textContent=t.heroText;
document.getElementById("hero-btn").textContent=t.heroBtn;

document.getElementById("nav-home").textContent=t.navHome;
document.getElementById("nav-about").textContent=t.navAbout;
document.getElementById("nav-products").textContent=t.navProducts;
document.getElementById("nav-services").textContent=t.navServices;
document.getElementById("nav-gallery").textContent=t.navGallery;
document.getElementById("nav-contact").textContent=t.navContact;

}

document.getElementById("fr").onclick=()=>setLanguage("fr");
document.getElementById("en").onclick=()=>setLanguage("en");
document.getElementById("ar").onclick=()=>setLanguage("ar");

window.addEventListener("load",()=>{

setLanguage(localStorage.getItem("language")||"fr");

});
/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*=========================================
        SECTION ANIMATION
=========================================*/

const hiddenSections=document.querySelectorAll("section");

const sectionObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show-section");

}

});

},{
threshold:0.15
});

hiddenSections.forEach(section=>{

section.classList.add("hidden");

sectionObserver.observe(section);

});


/*=========================================
        CURRENT YEAR
=========================================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}


/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log("%cDONNA GLASS","color:#003b8e;font-size:28px;font-weight:bold;");
console.log("%cProfessional Glass Processing Solutions","color:#39b6ff;font-size:14px;");
