/* =====================================================
   TAKHELLAMBAM AVINASH
   PORTFOLIO JAVASCRIPT
===================================================== */


/* ================= ELEMENTS ================= */

const navbar = document.getElementById("navbar");

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

const backTop = document.getElementById("backTop");

const year = document.getElementById("year");


/* ================= CURRENT YEAR ================= */

year.textContent = new Date().getFullYear();


/* ================= NAVBAR SCROLL ================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }


    /* Back to top */

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }


    /* Active navigation */

    const sections =
        document.querySelectorAll("main section[id]");

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            currentSection = section.id;

        }

    });


    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

});


/* ================= MOBILE MENU ================= */

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


/* Close mobile menu after clicking */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

        });

    });


/* ================= BACK TO TOP ================= */

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ================= SCROLL ANIMATION ================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


/* ================= SMOOTH NAVIGATION ================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });