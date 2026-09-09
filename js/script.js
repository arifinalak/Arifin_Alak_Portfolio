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
