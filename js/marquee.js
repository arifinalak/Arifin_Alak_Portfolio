// ===== Marquee ribbons: scroll-velocity driven, seamless, frame-rate independent =====
(function () {
    const inners = Array.from(document.querySelectorAll('.marquee-inner'));
    if (!inners.length) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const BASE = reduce ? 12 : 55;     // px/second when the page is idle
    const BOOST = 0.9;                 // how strongly scroll speed adds to the ribbon speed
    const MAX = 1400;                  // px/second speed cap

    // Take control away from the old CSS animation
    const items = inners.map(el => {
        el.classList.add('fx-js');
        el.style.animation = 'none';
        // reverse ribbon (purple) travels the opposite way
        const dir = el.classList.contains('marquee-reverse') ? 1 : -1;
        return { el, dir, x: 0, half: 0 };
    });

    function measure() {
        items.forEach(it => {
            it.half = it.el.scrollWidth / 2;          // two identical spans -> loop length
            if (it.half) it.x = ((it.x % it.half) - it.half) % it.half;
        });
    }
    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('load', measure);

    // Scroll velocity tracking (px/second, smoothed)
    let lastY = window.scrollY, lastT = performance.now();
    let vel = 0, smooth = 0, flip = 1, flipSmooth = 1;
    window.addEventListener('scroll', () => {
        const now = performance.now(), y = window.scrollY;
        const dt = Math.max(now - lastT, 1);
        vel = (y - lastY) / dt * 1000;
        if (Math.abs(vel) > 40) flip = vel > 0 ? 1 : -1;   // scrolling down = normal, up = reversed
        lastY = y; lastT = now;
    }, { passive: true });

    // Only animate while the section is on screen
    let visible = true;
    const section = document.querySelector('.marquee-section');
    if (section && 'IntersectionObserver' in window) {
        new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(section);
    }

    let prev = performance.now();
    function frame(now) {
        requestAnimationFrame(frame);
        const dt = Math.min((now - prev) / 1000, 0.05);
        prev = now;
        if (!visible) return;

        vel *= 0.92;                                   // friction
        smooth += (Math.abs(vel) - smooth) * 0.12;     // ease toward current scroll speed
        flipSmooth += (flip - flipSmooth) * 0.08;      // ease direction changes (no jumps)

        const speed = Math.min(BASE + smooth * BOOST, MAX) * flipSmooth;

        items.forEach(it => {
            if (!it.half) return;
            it.x += it.dir * speed * dt;
            if (it.x <= -it.half) it.x += it.half;
            if (it.x > 0) it.x -= it.half;
            it.el.style.transform = 'translate3d(' + it.x.toFixed(2) + 'px,0,0)';
        });
    }
    requestAnimationFrame(frame);
})();
