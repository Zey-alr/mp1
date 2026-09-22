/* Your JS here. */
const navbar = document.getElementById("navbar");

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-links a");



window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

function updateActiveLink() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - navbar.offsetHeight - 20) {
            currentSection = section.getAttribute("id");
        }

    });


    
    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
    ) {
        currentSection = sections[sections.length - 1].getAttribute("id");
    }


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });
}


window.addEventListener("scroll", updateActiveLink);

updateActiveLink();

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        const navbarHeight = navbar.offsetHeight;

        const targetPosition =
            targetSection.offsetTop - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});



const slides = document.querySelectorAll(".carousel-slide");

const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

let currentSlide = 0;


function showSlide(index) {

    slides.forEach(function (slide) {
        slide.classList.remove("active-slide");
    });

    slides[index].classList.add("active-slide");
}


nextButton.addEventListener("click", function () {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
});


previousButton.addEventListener("click", function () {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});





const modalButtons = document.querySelectorAll(".modal-button");
const closeButtons = document.querySelectorAll(".modal-close");
const modals = document.querySelectorAll(".modal");


modalButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const modalId = button.getAttribute("data-modal");

        const modal = document.getElementById(modalId);

        modal.classList.add("open");

    });

});


closeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const modal = button.closest(".modal");

        modal.classList.remove("open");

    });

});

modals.forEach(function (modal) {

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            modal.classList.remove("open");
        }

    });

});

