// ===== About page hero: purple falling-text ("matrix rain") animation =====
(function () {
    const hero = document.getElementById('about-hero');
    if (!hero) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'rain-canvas';
    hero.prepend(canvas);
    const ctx = canvas.getContext('2d');

    // Words that fall vertically, one letter at a time (edit freely)
    const phrases = [
        'CODE IS CRAFT', 'BUILD WITH PURPOSE', 'CREATE', 'INNOVATE', 'DEVELOP',
        'LEARN EVERY DAY', 'CLEAN CODE', 'IDEAS INTO PRODUCTS', 'KEEP SHIPPING',
        'PASSION', 'DESIGN', 'AI SYSTEMS', 'FLASK PYTHON', 'DETAILS MATTER'
    ];

    const fontSize = 16;
    const step = 20;              // vertical distance between letters
    let w, h, cols;

    function resize() {
        w = canvas.width = hero.clientWidth;
        h = canvas.height = hero.clientHeight;
        const n = Math.floor(w / (fontSize * 1.4));
        cols = Array.from({ length: n }, (_, i) => makeCol(i, true));
    }

    function makeCol(i, initial) {
        const text = phrases[Math.floor(Math.random() * phrases.length)];
        return {
            x: i * fontSize * 1.4 + fontSize * .5,
            text,
            idx: 0,
            y: initial ? -Math.random() * h : -step,
            speed: 1 + Math.random() * 1.8,
            wait: initial ? Math.random() * 120 : 0,
            alpha: .45 + Math.random() * .55
        };
    }

    let last = 0;
    function draw(t) {
        requestAnimationFrame(draw);
        if (t - last < 40) return;   // ~25 fps keeps the rain calm
        last = t;

        // fade previous frame -> glowing trails
        ctx.fillStyle = 'rgba(0, 0, 0, 0.09)';
        ctx.fillRect(0, 0, w, h);
        ctx.font = '600 ' + fontSize + 'px "Segoe UI", monospace';
        ctx.textAlign = 'center';

        cols.forEach((c, i) => {
            if (c.wait > 0) { c.wait--; return; }
            c.y += c.speed * (step / 6);
            // drop a new letter every `step` px
            if (c.y > c.idx * step) {
                const ch = c.text[c.idx % c.text.length];
                if (ch !== ' ') {
                    ctx.save();
                    ctx.translate(c.x, c.idx * step);
                    ctx.rotate(Math.PI / 2 * 0);   // upright letters
                    ctx.shadowColor = 'rgba(190, 60, 255, .9)';
                    ctx.shadowBlur = 10;
                    ctx.fillStyle = 'rgba(200, 90, 255,' + c.alpha + ')';
                    ctx.fillText(ch, 0, 0);
                    ctx.restore();
                }
                c.idx++;
            }
            if (c.idx * step > h + 40) cols[i] = makeCol(i, false), cols[i].wait = Math.random() * 90;
        });
    }

    resize();
    window.addEventListener('resize', resize);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // static frame for reduced-motion users
        for (let k = 0; k < 300; k++) draw(k * 50);
    } else {
        requestAnimationFrame(draw);
    }
})();
