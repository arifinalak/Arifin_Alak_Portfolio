// ===== Motion layer: particles, reveal, counters, widget =====
(function () {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Hero glow blobs + particle network canvas
    const hero = document.querySelector('.hero');
    if (hero) {
        ['b1', 'b2', 'b3'].forEach(c => {
            const d = document.createElement('div');
            d.className = 'fx-blob ' + c;
            hero.prepend(d);
        });

        const canvas = document.createElement('canvas');
        canvas.className = 'fx-canvas';
        hero.prepend(canvas);
        const ctx = canvas.getContext('2d');
        let w, h, pts = [], mouse = { x: -999, y: -999 };

        function resize() {
            w = canvas.width = hero.clientWidth;
            h = canvas.height = hero.clientHeight;
            const n = Math.min(90, Math.floor(w * h / 14000));
            pts = Array.from({ length: n }, () => ({
                x: Math.random() * w, y: Math.random() * h,
                vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4
            }));
        }
        resize();
        window.addEventListener('resize', resize);
        hero.addEventListener('mousemove', e => {
            const r = hero.getBoundingClientRect();
            mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
        });
        hero.addEventListener('mouseleave', () => { mouse.x = mouse.y = -999; });

        function draw() {
            ctx.clearRect(0, 0, w, h);
            for (let i = 0; i < pts.length; i++) {
                const p = pts[i];
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(190,140,250,.8)';
                ctx.fill();
                for (let j = i + 1; j < pts.length; j++) {
                    const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.hypot(dx, dy);
                    if (d < 120) {
                        ctx.strokeStyle = 'rgba(150,90,230,' + (1 - d / 120) * .35 + ')';
                        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
                    }
                }
                const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
                if (md < 160) {
                    ctx.strokeStyle = 'rgba(210,170,255,' + (1 - md / 160) * .6 + ')';
                    ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
                }
            }
            requestAnimationFrame(draw);
        }
        if (!reduce) draw();
    }

    // Scroll reveal
    const targets = document.querySelectorAll(
        '.about-home-left, .about-home-right, .about-stat, .about-feature-card, .process-header, ' +
        '.process-detail-card, .process-visual-card, .services-header, .service-card, .fp-header, ' +
        '.fp-card, .research-content-box, .cta-box, .footer-section'
    );
    targets.forEach((el, i) => {
        el.classList.add('fx-reveal');
        el.style.setProperty('--fx-delay', (i % 4) * 90 + 'ms');
    });
    const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
            if (en.isIntersecting) { en.target.classList.add('fx-in'); io.unobserve(en.target); }
        });
    }, { threshold: .12 });
    targets.forEach(el => io.observe(el));

    // Count-up stats
    document.querySelectorAll('.stat-number').forEach(el => {
        const m = el.textContent.match(/(\d+)(.*)/);
        if (!m) return;
        const end = +m[1], suffix = m[2];
        const co = new IntersectionObserver(([en]) => {
            if (!en.isIntersecting) return;
            co.disconnect();
            const t0 = performance.now(), dur = 1400;
            (function tick(t) {
                const p = Math.min((t - t0) / dur, 1);
                el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suffix;
                if (p < 1) requestAnimationFrame(tick);
            })(t0);
        }, { threshold: .6 });
        co.observe(el);
    });

    // Floating widget (edit the text later)
    const widget = document.createElement('div');
    widget.className = 'fx-widget';
    widget.innerHTML =
        '<div class="fx-widget-panel"><strong>Website Updates</strong>' +
        'This portfolio is being improved. New projects and sections are coming soon!</div>' +
        '<button class="fx-widget-btn" aria-label="Website Updates">' +
        '<span class="fx-widget-dot"></span><span>Website Updates</span></button>';
    document.body.appendChild(widget);
    widget.querySelector('button').addEventListener('click', () => widget.classList.toggle('open'));
})();
