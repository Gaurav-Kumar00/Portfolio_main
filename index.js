// Responsive Navbar
let responsiveNavbar = document.querySelector(".hamburger-icon");
let navLinks = document.querySelector(".menu-links");
let links = document.querySelectorAll(".menu-links li a");

responsiveNavbar.addEventListener("click", () => {
    if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        responsiveNavbar.classList.remove("open");
    } else {
        navLinks.classList.add("open");
        responsiveNavbar.classList.add("open");
        links.forEach((element) => {
            element.addEventListener("click", () => {
                responsiveNavbar.classList.remove("open");
                navLinks.classList.remove("open");
            });
        });
    }
});

// Typed JS
let typed = new Typed("#element", {
    strings: [
        "Web Developer.",
        "Competetive Programmer.",
        "Pre-Final year at IIIT Bhopal.",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

// About JS
let arrayActiveLink = document.querySelectorAll(".tab-links");
let arrayActiveTab = document.querySelectorAll(".tab-content");

// calling function to add active class in tab-links as well as tab-content
activeLink(arrayActiveLink, arrayActiveTab);

// Function to add active class
function activeLink(whomToAdd, whomToAddAnother) {
    for (let i = 0; i < whomToAdd.length; i++) {
        whomToAdd[i].addEventListener("click", () => {
            if (!whomToAdd[i].classList.contains("active")) {
                whomToAdd[i].classList.add("active");
                whomToAddAnother[i].classList.add("active");
                for (let j = 0; j < whomToAdd.length; j++) {
                    if (whomToAdd[i] != whomToAdd[j]) {
                        whomToAdd[j].classList.remove("active");
                        whomToAddAnother[j].classList.remove("active");
                    }
                }
            }
        });
    }
}
