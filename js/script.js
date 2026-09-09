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

// Process Section Interactive Steps
(function () {
    const stepsData = [
        {
            num: "01",
            tag: "UI/UX Direction",
            title: "Design",
            desc: "I design clean, modern, and user-friendly interfaces that match your brand and help visitors take action with confidence.",
            list: ["Wireframe structure", "Modern UI design", "User experience flow", "Mobile-first layout", "Feedback-based refinements"],
            outcome: "Polished visual experience",
            bg: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 40%, #1e1b4b 100%)"
        },
        {
            num: "02",
            tag: "Development",
            title: "Frontend Build",
            desc: "I translate the designs into pixel-perfect, responsive, and accessible code using modern web technologies.",
            list: ["HTML/CSS/JS Implementation", "Responsive breakpoints", "Animation integration", "Accessibility (a11y) checks", "Cross-browser testing"],
            outcome: "Interactive web pages",
            bg: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
        },
        {
            num: "03",
            tag: "Engineering",
            title: "Backend Systems",
            desc: "I build robust, secure APIs and database architectures to power the application and handle data efficiently.",
            list: ["API development", "Database schema design", "Authentication & Security", "Server-side logic", "Performance optimization"],
            outcome: "Scalable infrastructure",
            bg: "linear-gradient(135deg, #1e1b4b 0%, #3b0764 60%, #1e1b4b 100%)"
        },
        {
            num: "04",
            tag: "Integration",
            title: "AI & Features",
            desc: "I integrate custom AI models, third-party services, and advanced functionalities into the core platform.",
            list: ["LLM integration", "API connections", "Payment gateways", "Data processing pipelines", "Feature testing"],
            outcome: "Fully functional system",
            bg: "linear-gradient(135deg, #020617 0%, #172554 50%, #020617 100%)"
        },
        {
            num: "05",
            tag: "Quality Assurance",
            title: "Testing",
            desc: "I conduct rigorous testing across devices and scenarios to ensure a bug-free, high-performance experience.",
            list: ["Unit & Integration testing", "Performance profiling", "Security auditing", "Mobile testing", "Bug fixing"],
            outcome: "Reliable application",
            bg: "linear-gradient(135deg, #171717 0%, #262626 50%, #171717 100%)"
        },
        {
            num: "06",
            tag: "Deployment",
            title: "Launch",
            desc: "I handle the final deployment, configure domains, set up hosting, and monitor the initial rollout.",
            list: ["Server configuration", "Domain & SSL setup", "CI/CD pipelines", "Production deployment", "Post-launch monitoring"],
            outcome: "Live product",
            bg: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 80%, #1e1b4b 100%)"
        }
    ];

    const timelineSteps = document.querySelectorAll(".timeline-step");
    if (!timelineSteps.length) return;

    const elNum = document.getElementById("process-num");
    const elTag = document.getElementById("process-tag");
    const elTitle = document.getElementById("process-title");
    const elDesc = document.getElementById("process-desc");
    const elList = document.getElementById("process-list");
    const elOutcome = document.getElementById("process-outcome");

    const elVTag = document.getElementById("process-vtag");
    const elVNum = document.getElementById("process-vnum");
    const elVTitle = document.getElementById("process-vtitle");
    const elVDesc = document.getElementById("process-vdesc");
    const elBg = document.getElementById("process-visual-bg");

    timelineSteps.forEach(stepBtn => {
        stepBtn.addEventListener("click", () => {
            // Update active state
            timelineSteps.forEach(btn => btn.classList.remove("active"));
            stepBtn.classList.add("active");

            // Update content
            const idx = parseInt(stepBtn.getAttribute("data-step"));
            const data = stepsData[idx];

            if (elNum) elNum.textContent = data.num;
            if (elTag) elTag.textContent = data.tag;
            if (elTitle) elTitle.textContent = data.title;
            if (elDesc) elDesc.textContent = data.desc;
            
            if (elList) {
                elList.innerHTML = "";
                data.list.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = item;
                    elList.appendChild(li);
                });
            }

            if (elOutcome) elOutcome.textContent = data.outcome;

            if (elVTag) elVTag.textContent = data.tag;
            if (elVNum) elVNum.textContent = data.num;
            if (elVTitle) elVTitle.textContent = data.title;
            if (elVDesc) elVDesc.textContent = data.desc;
            
            if (elBg) {
                elBg.style.background = data.bg;
            }
        });
    });
})();

// Featured Projects Carousel
(function () {
    const track = document.getElementById("fp-track");
    const prevBtn = document.getElementById("fp-prev");
    const nextBtn = document.getElementById("fp-next");
    const dotsContainer = document.getElementById("fp-dots");

    if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

    const cards = Array.from(track.querySelectorAll(".fp-card"));
    if (cards.length === 0) return;

    // Create dots based on number of cards
    cards.forEach((_, idx) => {
        const dot = document.createElement("span");
        dot.classList.add("fp-dot");
        if (idx === 0) dot.classList.add("active");
        
        dot.addEventListener("click", () => {
            const cardWidth = cards[0].offsetWidth + 24; // 24px is gap
            track.scrollTo({
                left: idx * cardWidth,
                behavior: "smooth"
            });
        });
        
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll(".fp-dot"));

    // Scroll by 1 card width
    const scrollAmount = () => cards[0].offsetWidth + 24;

    nextBtn.addEventListener("click", () => {
        track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
        track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
    });

    // Update active dot on scroll
    track.addEventListener("scroll", () => {
        const scrollLeft = track.scrollLeft;
        const cardWidth = scrollAmount();
        
        // Calculate which card is currently closest to the left edge
        let currentIndex = Math.round(scrollLeft / cardWidth);
        
        // Bounds checking
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex >= dots.length) currentIndex = dots.length - 1;

        dots.forEach((dot, idx) => {
            if (idx === currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    });
})();
