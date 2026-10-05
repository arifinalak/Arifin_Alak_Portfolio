(function () {
    // ===== EDIT THIS LIST to add your research / papers / experiments =====
    const WORK = [
        { t: 'Bangladesh Flood Early Warning AI Agent', d: 'Autonomous agent that reads river and rainfall data, reasons about flood risk with Gemini and sends Bangla SMS alerts.', tags: ['AI Agents', 'AI for Good'], st: 'Built', ic: 'fa-water', url: 'project-details.html?id=2' },
        { t: 'AgroScan: Crop Disease Detection', d: 'Deep learning model that identifies crop diseases from leaf photos, served through a web app and an Android app.', tags: ['Deep Learning', 'AI for Good'], st: 'Ongoing', ic: 'fa-leaf', url: 'project-details.html?id=0' },
        { t: 'E-Commerce Shipment Delay Prediction', d: 'Comparing Decision Tree, Logistic Regression and neural networks on 10,999 records to predict late deliveries.', tags: ['Predictive Modelling'], st: 'Completed', ic: 'fa-truck-fast', url: 'project-details.html?id=6' },
        { t: 'Trustworthy AI Workflows (notes)', d: 'Working notes on making automated decisions explainable and verifiable for non-technical users.', tags: ['AI Agents'], st: 'Notes', ic: 'fa-shield-halved', url: '#' }
    ];

    const $ = (s) => document.querySelector(s);

    // ---- typing headline ----
    const words = ['learn from data', 'see like humans', 'reason with language', 'protect communities'];
    const el = $('#rs-type'); let w = 0, c = 0, del = false;
    (function type() {
        const word = words[w];
        el.textContent = word.slice(0, c);
        if (!del && c === word.length) { del = true; return setTimeout(type, 1500); }
        if (del && c === 0) { del = false; w = (w + 1) % words.length; }
        c += del ? -1 : 1;
        setTimeout(type, del ? 35 : 75);
    })();

    // ---- fake training log ----
    const log = $('#rs-log'); let ep = 0, loss = 1.2, acc = .42;
    const lines = [];
    setInterval(() => {
        ep++; loss = Math.max(.05, loss * (.9 + Math.random() * .05)); acc = Math.min(.99, acc + (1 - acc) * (.08 + Math.random() * .05));
        lines.push(`epoch ${String(ep).padStart(3, '0')}  loss=${loss.toFixed(4)}  acc=${(acc * 100).toFixed(1)}%`);
        if (lines.length > 8) lines.shift();
        log.textContent = lines.join('\n');
        if (ep > 60) { ep = 0; loss = 1.2; acc = .42; }
    }, 600);

    // ---- research list + filters ----
    const tags = ['All', ...new Set(WORK.flatMap(x => x.tags))];
    const fEl = $('#rs-filters'), lEl = $('#rs-list');
    fEl.innerHTML = tags.map((t, i) => `<button class="${i ? '' : 'active'}" data-t="${t}">${t}</button>`).join('');
    function render(tag) {
        lEl.innerHTML = WORK.filter(x => tag === 'All' || x.tags.includes(tag)).map((x, i) => `
            <a class="rs-item" href="${x.url}" style="animation-delay:${i * 80}ms">
                <span class="ic"><i class="fa-solid ${x.ic}"></i></span>
                <div><h4>${x.t}</h4><p>${x.d}</p><div class="meta"><span class="st">${x.st}</span>${x.tags.map(t => `<span>${t}</span>`).join('')}</div></div>
                <i class="fa-solid fa-arrow-up-right-from-square go"></i>
            </a>`).join('');
    }
    render('All');
    fEl.addEventListener('click', e => {
        const b = e.target.closest('button'); if (!b) return;
        fEl.querySelectorAll('button').forEach(x => x.classList.toggle('active', x === b));
        render(b.dataset.t);
    });

    // ---- scroll reveal + counters ----
    const io = new IntersectionObserver(es => es.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in'); io.unobserve(e.target);
        e.target.querySelectorAll('[data-to]').forEach(b => {
            const to = +b.dataset.to, suf = b.dataset.suf || '', t0 = performance.now();
            (function tick(t) { const p = Math.min((t - t0) / 1500, 1); b.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(tick); })(t0);
        });
    }), { threshold: .15 });
    document.querySelectorAll('.rs-reveal').forEach(x => io.observe(x));

    // ---- scroll progress ----
    const bar = $('#rs-progress');
    addEventListener('scroll', () => { const h = document.documentElement; bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%'; }, { passive: true });

    // ---- neural network canvas ----
    const cv = $('#rs-net'), cx = cv.getContext('2d');
    let W, H, nodes = [], mouse = { x: -999, y: -999 };
    function size() {
        W = cv.width = innerWidth; H = cv.height = innerHeight;
        const n = Math.min(90, Math.floor(W * H / 16000));
        nodes = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4, p: Math.random() * 6 }));
    }
    size(); addEventListener('resize', size);
    addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
    let pulse = 0;
    (function draw() {
        cx.clearRect(0, 0, W, H); pulse += .02;
        nodes.forEach(n => {
            n.x += n.vx; n.y += n.vy;
            if (n.x < 0 || n.x > W) n.vx *= -1; if (n.y < 0 || n.y > H) n.vy *= -1;
        });
        for (let i = 0; i < nodes.length; i++) {
            const a = nodes[i];
            for (let j = i + 1; j < nodes.length; j++) {
                const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
                if (d < 140) {
                    const m = Math.hypot((a.x + b.x) / 2 - mouse.x, (a.y + b.y) / 2 - mouse.y) < 160;
                    cx.strokeStyle = m ? `rgba(34,211,238,${.6 * (1 - d / 140)})` : `rgba(168,85,247,${.28 * (1 - d / 140)})`;
                    cx.lineWidth = m ? 1.3 : .8;
                    cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(b.x, b.y); cx.stroke();
                }
            }
            const glow = .5 + .5 * Math.sin(pulse + a.p);
            cx.fillStyle = `rgba(${Math.hypot(a.x - mouse.x, a.y - mouse.y) < 160 ? '34,211,238' : '192,132,252'},${.35 + glow * .5})`;
            cx.beginPath(); cx.arc(a.x, a.y, 1.8 + glow * 1.4, 0, 7); cx.fill();
        }
        requestAnimationFrame(draw);
    })();
})();
