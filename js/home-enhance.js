(function () {
    const sel = '.about-home-left,.about-home-right,.about-stat,.about-feature-card,.process-header,.process-timeline,.process-detail-card,.process-visual-card,.services-header,.he-card,.fp-header,.fp-carousel-wrapper,.research-sidebar,.research-content-box,.he-topic';
    const els = document.querySelectorAll(sel);
    els.forEach((el, i) => {
        // skip elements already handled by the older reveal script
        if (el.classList.contains('fx-reveal')) return;
        el.setAttribute('data-he', '');
        el.style.transitionDelay = ((i % 4) * 0.1) + 's';
    });
    const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('he-in'); io.unobserve(e.target); }
    }), { threshold: .12 });
    document.querySelectorAll('[data-he]').forEach(el => io.observe(el));

    // count-up stats
    document.querySelectorAll('.stat-number').forEach(el => {
        const m = el.textContent.trim().match(/^(\d+)(.*)$/);
        if (!m) return;
        const target = +m[1], suffix = m[2];
        const so = new IntersectionObserver(es => {
            if (!es[0].isIntersecting) return;
            so.disconnect();
            const t0 = performance.now();
            (function tick(t) {
                const p = Math.min((t - t0) / 1400, 1);
                el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
                if (p < 1) requestAnimationFrame(tick);
            })(t0);
        }, { threshold: .6 });
        so.observe(el);
    });

    // process detail card re-animation on step change
    const card = document.querySelector('.process-detail-card');
    document.querySelectorAll('.timeline-step').forEach(b => b.addEventListener('click', () => {
        if (!card) return;
        card.classList.remove('he-swap-in'); void card.offsetWidth; card.classList.add('he-swap-in');
    }));

    // 3D tilt on cards
    document.querySelectorAll('.he-card,.he-topic,.fp-card').forEach(c => {
        c.addEventListener('mousemove', e => {
            const r = c.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
            c.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-8px)`;
        });
        c.addEventListener('mouseleave', () => { c.style.transform = ''; });
    });
})();
