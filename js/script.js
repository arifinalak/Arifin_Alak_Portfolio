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
            tag: "REQUIREMENTS & DISCOVERY",
            title: "Understand",
            desc: "I start by understanding the problem, business goals, target users, and technical requirements to create a clear direction for the project.",
            list: ["Requirement Analysis", "User & Business Goals", "Problem Definition"],
            outcome: "Clear Project Direction",
            bg: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 40%, #1e1b4b 100%)"
        },
        {
            num: "02",
            tag: "STRATEGY & ARCHITECTURE",
            title: "Plan",
            desc: "I define the project architecture, technology stack, database structure, user flows, APIs, and AI strategy before development begins.",
            list: ["System Architecture", "Tech Stack & Database", "Project Roadmap"],
            outcome: "Solid Technical Foundation",
            bg: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
        },
        {
            num: "03",
            tag: "UI/UX & SYSTEM DESIGN",
            title: "Design",
            desc: "I create clean, intuitive interfaces and structured system flows that make both web experiences and AI-powered products easy to use.",
            list: ["UI/UX Design", "User & System Flows", "Wireframes & Prototypes"],
            outcome: "Intuitive System Interface",
            bg: "linear-gradient(135deg, #1e1b4b 0%, #3b0764 60%, #1e1b4b 100%)"
        },
        {
            num: "04",
            tag: "DEVELOPMENT & AI INTEGRATION",
            title: "Build",
            desc: "I turn the plan into a working product using modern web technologies, APIs, databases, AI models, agents, automations, and third-party integrations.",
            list: ["Frontend & Backend Development", "AI & Agent Integration", "APIs & Third-Party Services"],
            outcome: "Functional AI Product",
            bg: "linear-gradient(135deg, #020617 0%, #172554 50%, #020617 100%)"
        },
        {
            num: "05",
            tag: "TESTING & OPTIMIZATION",
            title: "Refine",
            desc: "I test functionality, responsiveness, performance, security, and AI behavior to make sure the final product is reliable and production-ready.",
            list: ["Functional Testing", "Performance Optimization", "Security & Bug Fixes"],
            outcome: "Production-Ready System",
            bg: "linear-gradient(135deg, #171717 0%, #262626 50%, #171717 100%)"
        },
        {
            num: "06",
            tag: "DEPLOYMENT & ITERATION",
            title: "Launch",
            desc: "I deploy the product and continue improving it through monitoring, feedback, performance optimization, and new features.",
            list: ["Deploy to Production", "Monitor & Maintain", "Iterate & Improve"],
            outcome: "Live & Scalable Solution",
            bg: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 80%, #1e1b4b 100%)"
        }
    ];

    const _u = (id) => "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=1000&q=80";
    const PROCESS_IMGS = [_u("photo-1552664730-d307ca884978"), _u("photo-1531403009284-440f080d1e12"), _u("photo-1561070791-2526d30994b5"), _u("photo-1517694712202-14dd9538aa97"), _u("photo-1516321318423-f06f85e504b3"), _u("photo-1460925895917-afdab827c52f")];
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
                elBg.style.background = "linear-gradient(180deg, rgba(7,6,13,0.25), rgba(7,6,13,0.85)), url(" + PROCESS_IMGS[idx] + ") center/cover no-repeat"; elBg.classList.remove("he-swap"); void elBg.offsetWidth; elBg.classList.add("he-swap");
            }
        });
    });
    timelineSteps[0].click();
})();

// Featured Projects Carousel (transform-based slider)
(function () {
    const track = document.getElementById("fp-track");
    const prevBtn = document.getElementById("fp-prev");
    const nextBtn = document.getElementById("fp-next");
    const dotsContainer = document.getElementById("fp-dots");
    if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

    const wrapper = track.parentElement;
    const cards = Array.from(track.querySelectorAll(".fp-card"));
    if (!cards.length) return;

    let index = 0, timer = null;
    const GAP = 24;

    const perView = () => (window.innerWidth <= 700 ? 1 : window.innerWidth <= 1100 ? 2 : 3);
    const maxIndex = () => Math.max(0, cards.length - perView());

    function layout() {
        const pv = perView();
        const w = (wrapper.clientWidth - GAP * (pv - 1)) / pv;
        cards.forEach(c => { c.style.flex = "0 0 " + w + "px"; c.style.width = w + "px"; });
        buildDots();
        go(Math.min(index, maxIndex()), false);
    }

    function buildDots() {
        dotsContainer.innerHTML = "";
        for (let i = 0; i <= maxIndex(); i++) {
            const d = document.createElement("span");
            d.className = "fp-dot";
            d.addEventListener("click", () => { go(i); restart(); });
            dotsContainer.appendChild(d);
        }
    }

    function go(i, animate = true) {
        index = Math.max(0, Math.min(i, maxIndex()));
        const step = cards[0].offsetWidth + GAP;
        track.style.transition = animate ? "transform .7s cubic-bezier(.22,.8,.2,1)" : "none";
        track.style.transform = "translateX(" + (-index * step) + "px)";
        Array.from(dotsContainer.children).forEach((d, k) => d.classList.toggle("active", k === index));
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === maxIndex();
    }

    const next = () => go(index >= maxIndex() ? 0 : index + 1);
    const prev = () => go(index <= 0 ? maxIndex() : index - 1);
    function restart() { clearInterval(timer); timer = setInterval(next, 5000); }

    nextBtn.addEventListener("click", () => { go(index + 1); restart(); });
    prevBtn.addEventListener("click", () => { go(index - 1); restart(); });
    wrapper.addEventListener("mouseenter", () => clearInterval(timer));
    wrapper.addEventListener("mouseleave", restart);

    // touch / mouse swipe
    let startX = null, moved = false;
    wrapper.addEventListener("pointerdown", e => { startX = e.clientX; moved = false; });
    wrapper.addEventListener("pointerup", e => {
        if (startX === null) return;
        const dx = e.clientX - startX; startX = null;
        if (Math.abs(dx) > 50) { moved = true; dx < 0 ? go(index + 1) : go(index - 1); restart(); }
    });
    wrapper.addEventListener("click", e => { if (moved) { e.preventDefault(); moved = false; } }, true);

    let rt; window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(layout, 120); });
    window.addEventListener("load", layout);
    layout(); restart();
})();