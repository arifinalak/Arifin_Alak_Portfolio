const metaEl = document.getElementById("page-meta");
if (metaEl) {
    const locationText = window.location.href;
    const lastModified = new Date(document.lastModified).toLocaleString();
    metaEl.textContent = `Location: ${locationText} | Last Modified: ${lastModified}`;
}

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("main-nav");

if (hamburger && mainNav) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        mainNav.classList.toggle("open");
    });

    // Close menu when a nav link is clicked
    mainNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("open");
            mainNav.classList.remove("open");
        });
    });
}

// Typewriter effect
const typewriterEl = document.getElementById("typewriter");
if (typewriterEl) {
    const words = ["Web Developer", "AI Enthusiast", "Problem Solver", "Backend Engineer", "Creative Designer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const current = words[wordIndex];
        if (isDeleting) {
            typewriterEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterEl.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        let delay = isDeleting ? 60 : 100;

        if (!isDeleting && charIndex === current.length) {
            delay = 1800;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 400;
        }

        setTimeout(type, delay);
    }

    type();
}

// Marquee scroll-direction reversal
(function () {
    const inners = document.querySelectorAll('.marquee-inner');
    if (!inners.length) return;

    let lastY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentY = window.scrollY;
                const goingDown = currentY > lastY;
                lastY = currentY;

                inners.forEach(el => {
                    if (goingDown) {
                        el.classList.add('scrolled-down');
                    } else {
                        el.classList.remove('scrolled-down');
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    });
})();
