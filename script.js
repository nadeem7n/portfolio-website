/* =========================================
   PORTFOLIO WEBSITE JAVASCRIPT
   ========================================= */

/*==========================
  MOBILE MENU
==========================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/*==========================
  SMOOTH SCROLL
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

        navLinks.classList.remove("show");

    });

});


/*==========================
  ACTIVE NAVIGATION
==========================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==========================
  NAVBAR SHADOW
==========================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(255,255,255,.95)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";

    }

    else {

        header.style.background = "rgba(255,255,255,.8)";
        header.style.boxShadow = "none";

    }

});


/*==========================
  SCROLL TO TOP BUTTON
==========================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "block";

    }

    else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==========================
  SCROLL REVEAL ANIMATION
==========================*/

const revealElements = document.querySelectorAll(

".about-container,.skill-card,.timeline-item,.certificate-card,.experience-card,.project-card,.contact-container"

);

function revealOnScroll() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            el.classList.add("visible");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*==========================
  CONTACT FORM
==========================*/

/*==========================
EMAILJS CONTACT FORM
==========================*/

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_pa06q1p",
            "template_8gmyw0t",
            this
        )
        .then(function () {

            alert("✅ Message sent successfully!");

            contactForm.reset();

        })
        .catch(function (error) {

            console.error(error);

            alert("❌ Failed to send message.");

        });

    });

}

/*==========================
  TYPING EFFECT
==========================*/

const titles = [

    "Web Developer",

    "Software Engineer",

    "Frontend Developer",

    "Computer Science Student"

];

const typingElement = document.querySelector(".hero-content h2");

let titleIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentTitle = titles[titleIndex];

    if (!deleting) {

        typingElement.textContent = currentTitle.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentTitle.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    }

    else {

        typingElement.textContent = currentTitle.substring(0, charIndex);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            titleIndex++;

            if (titleIndex >= titles.length) {

                titleIndex = 0;

            }

        }

    }

    setTimeout(typingEffect, deleting ? 60 : 120);

}

typingEffect();


/*==========================
  CURRENT YEAR
==========================*/

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML = `© ${year} Nadeem Abbas. All Rights Reserved.`;

}

console.log("Portfolio Loaded Successfully ✅");