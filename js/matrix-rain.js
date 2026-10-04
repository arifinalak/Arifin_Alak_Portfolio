// ===== Purple falling-text ("matrix rain") animation =====
// Used on the About hero (full strength) and on the top menu bar of every page (subtle).
(function () {
    // Words that fall vertically, one letter at a time (edit freely)
    const phrases = [
        'CODE IS CRAFT', 'BUILD WITH PURPOSE', 'CREATE', 'INNOVATE', 'DEVELOP',
        'LEARN EVERY DAY', 'CLEAN CODE', 'IDEAS INTO PRODUCTS', 'KEEP SHIPPING',
        'PASSION', 'DESIGN', 'AI SYSTEMS', 'FLASK PYTHON', 'DETAILS MATTER'
    ];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function startRain(host, opts) {
        const o = Object.assign({ fontSize: 16, step: 20, fade: 0.09, alpha: 1 }, opts);
        const canvas = document.createElement('canvas');
        canvas.className = 'rain-canvas';
        canvas.style.opacity = o.alpha;
        host.prepend(canvas);
        const ctx = canvas.getContext('2d');
        let w, h, cols;

        function makeCol(i, initial) {
            return {
                x: i * o.fontSize * 1.4 + o.fontSize * .5,
                text: phrases[Math.floor(Math.random() * phrases.length)],
                idx: 0,
                y: initial ? -Math.random() * h : -o.step,
                speed: 1 + Math.random() * 1.8,
                wait: Math.random() * (initial ? 120 : 90),
                alpha: .45 + Math.random() * .55
            };
        }

        function resize() {
            w = canvas.width = host.clientWidth;
            h = canvas.height = host.clientHeight;
            const n = Math.floor(w / (o.fontSize * 1.4));
            cols = Array.from({ length: n }, (_, i) => makeCol(i, true));
        }

        let last = 0;
        function draw(t) {
            requestAnimationFrame(draw);
            if (t - last < 40) return;
            last = t;
            ctx.fillStyle = 'rgba(0, 0, 0, ' + o.fade + ')';
            ctx.fillRect(0, 0, w, h);
            ctx.font = '600 ' + o.fontSize + 'px "Segoe UI", monospace';
            ctx.textAlign = 'center';

            cols.forEach((c, i) => {
                if (c.wait > 0) { c.wait--; return; }
                c.y += c.speed * (o.step / 6);
                if (c.y > c.idx * o.step) {
                    const ch = c.text[c.idx % c.text.length];
                    if (ch !== ' ') {
                        ctx.shadowColor = 'rgba(190, 60, 255, .9)';
                        ctx.shadowBlur = 10;
                        ctx.fillStyle = 'rgba(200, 90, 255,' + c.alpha + ')';
                        ctx.fillText(ch, c.x, c.idx * o.step);
                        ctx.shadowBlur = 0;
                    }
                    c.idx++;
                }
                if (c.idx * o.step > h + 40) cols[i] = makeCol(i, false);
            });
        }

        resize();
        window.addEventListener('resize', resize);
        if (reduce) { for (let k = 0; k < 300; k++) draw(k * 50); }
        else requestAnimationFrame(draw);
    }

    const aboutHero = document.getElementById('about-hero');
    if (aboutHero) startRain(aboutHero);

    const header = document.querySelector('header');
    if (header) startRain(header, { fontSize: 14, step: 18, fade: 0.12, alpha: .6 });
})();
