// ===== Featured Projects page: data, filters (FLIP animated), 3D tilt, effects =====
(function () {
    // ---- Project data ----
    const projects = [
        { t: 'Bangla ASL & Voice - VR Game', c: 'VR & AI', y: 2025, h: 280, i: 'fa-vr-cardboard', url: '#',
          d: 'An immersive VR environment for kids to learn Bangladesh Sign Language using Unity & Meta Quest SDK with an intelligent AI agent.', tech: ['C#', 'Unity', 'Machine Learning', 'VR', 'NLP'] },
        { t: 'Turn - E-commerce UI Design', c: 'Web Design', y: 2024, h: 250, i: 'fa-pen-nib', url: '#',
          d: 'A modern, sleek, and high-performance landing page design built for a product company, focusing on creative storytelling and engaging UI/UX.', tech: ['Figma', 'UI/UX', 'Web Design'] },
        { t: 'DreamFlex - Real Estate Platform', c: 'Full Stack', y: 2024, h: 300, i: 'fa-building', url: '#',
          d: 'A comprehensive real estate platform designed to streamline property searching, buying, selling, and renting processes with a modern interface.', tech: ['React', 'Node.js', 'MongoDB', 'Express'] },
        { t: 'IELTS Master - AI Platform', c: 'AI & Web', y: 2024, h: 230, i: 'fa-graduation-cap', url: '#',
          d: 'An AI-driven web-based IELTS preparation platform designed for individuals looking to enhance their performance with smart feedback.', tech: ['Python', 'Django', 'OpenAI API', 'Tailwind'] },
        { t: 'Shipment Delay Prediction', c: 'Machine Learning', y: 2023, h: 180, i: 'fa-truck-fast', url: '#',
          d: 'Developed a machine learning model system for predicting whether an e-commerce shipment will be delayed or on time using historical data.', tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas'] },
        { t: 'The Ultimate INVENTORY', c: 'Full Stack', y: 2023, h: 260, i: 'fa-boxes-stacked', url: '#',
          d: 'A full-stack, comprehensive web app that allows an RMG manufacturing company to easily record and maintain their overall operations.', tech: ['Python', 'Flask', 'MySQL', 'Bootstrap'] },
        { t: 'MAZZY - E-commerce Website', c: 'Web Development', y: 2024, h: 220, i: 'fa-cart-shopping', url: 'https://mazzybd.com/',
          d: 'A modern e-commerce website with an intuitive design aimed at providing a smooth online shopping experience with clean product catalogues.', tech: ['WordPress', 'WooCommerce', 'SEO'] }
    ];

    const $ = (s, r = document) => r.querySelector(s);
    const grid = $('#pf-grid'), catsEl = $('#pf-cats'), chipsEl = $('#pf-chips');
    const searchEl = $('#pf-search'), countEl = $('#pf-count'), emptyEl = $('#pf-empty');
    const state = { cat: 'All', tech: new Set(), q: '' };
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---- Hero title: split letters ----
    const title = $('#pf-title');
    if (title) {
        const text = title.textContent;
        title.setAttribute('aria-label', text);
        title.innerHTML = [...text].map((ch, i) =>
            ch === ' ' ? '<span class="sp" aria-hidden="true"></span>' : '<span class="ch" aria-hidden="true" style="--i:' + i + '">' + ch + '</span>').join('');
    }

    // ---- Render cards ----
    grid.innerHTML = projects.map((p, idx) => `
        <article class="pf-wrap" data-idx="${idx}">
            <div class="pf-card">
                <div class="pf-thumb" style="--h:${p.h}">
                    <span class="pf-badge">${p.c}</span><span class="pf-year">${p.y}</span>
                    <span class="pf-shape s1"></span><span class="pf-shape s2"></span><span class="pf-shape s3"></span>
                    <i class="fa-solid ${p.i} pf-icon"></i>
                </div>
                <div class="pf-card-body">
                    <h3>${p.t}</h3>
                    <p>${p.d}</p>
                    <div class="pf-tags">${p.tech.map(t => '<span>' + t + '</span>').join('')}</div>
                    <a class="pf-btn" href="${p.url}" ${p.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}><span>View Project</span> <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </article>`).join('');
    const wraps = [...grid.querySelectorAll('.pf-wrap')];

    // ---- Sidebar: categories + tech chips ----
    const cats = ['All', ...new Set(projects.map(p => p.c))];
    const techs = [...new Set(projects.flatMap(p => p.tech))].sort();
    catsEl.innerHTML = cats.map(c => {
        const n = c === 'All' ? projects.length : projects.filter(p => p.c === c).length;
        return `<li><button data-cat="${c}" class="${c === 'All' ? 'active' : ''}"><span>${c}</span><span class="n" data-to="${n}">0</span></button></li>`;
    }).join('');
    chipsEl.innerHTML = techs.map(t => `<button data-tech="${t}">${t}</button>`).join('');

    // count-up for the category badges
    catsEl.querySelectorAll('.n').forEach(el => {
        const to = +el.dataset.to, t0 = performance.now();
        (function tick(t) {
            const p = Math.min((t - t0) / 900, 1);
            el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
        })(t0);
    });

    // ---- Filtering with FLIP animation ----
    function matches(p) {
        if (state.cat !== 'All' && p.c !== state.cat) return false;
        if (state.tech.size && ![...state.tech].every(t => p.tech.includes(t))) return false;
        const q = state.q.trim().toLowerCase();
        return !q || (p.t + ' ' + p.d + ' ' + p.tech.join(' ') + ' ' + p.c).toLowerCase().includes(q);
    }

    function applyFilters(animate = true) {
        const first = new Map();
        if (animate && !reduce) wraps.forEach(w => { if (!w.hidden) first.set(w, w.getBoundingClientRect()); });

        let shown = 0;
        wraps.forEach(w => {
            const ok = matches(projects[w.dataset.idx]);
            w.hidden = !ok;
            if (ok) { shown++; w.classList.add('in'); }
        });

        if (animate && !reduce) {
            wraps.forEach((w, k) => {
                if (w.hidden) return;
                const prev = first.get(w), now = w.getBoundingClientRect();
                const opts = { duration: 650, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards' };
                if (prev) {
                    w.animate([{ transform: `translate(${prev.left - now.left}px, ${prev.top - now.top}px)` }, { transform: 'none' }], opts);
                } else {
                    w.animate([{ opacity: 0, transform: 'scale(.82) translateY(30px)' }, { opacity: 1, transform: 'none' }], { ...opts, delay: k * 35 });
                }
            });
        }
        countEl.innerHTML = 'Showing <b>' + shown + '</b> of ' + projects.length + ' projects';
        emptyEl.hidden = shown !== 0;
    }

    catsEl.addEventListener('click', e => {
        const b = e.target.closest('button'); if (!b) return;
        state.cat = b.dataset.cat;
        catsEl.querySelectorAll('button').forEach(x => x.classList.toggle('active', x === b));
        applyFilters();
    });
    chipsEl.addEventListener('click', e => {
        const b = e.target.closest('button'); if (!b) return;
        const t = b.dataset.tech;
        state.tech.has(t) ? state.tech.delete(t) : state.tech.add(t);
        b.classList.toggle('active');
        applyFilters();
    });
    searchEl.addEventListener('input', () => { state.q = searchEl.value; applyFilters(); });
    $('#pf-reset').addEventListener('click', () => {
        state.cat = 'All'; state.tech.clear(); state.q = ''; searchEl.value = '';
        catsEl.querySelectorAll('button').forEach((x, i) => x.classList.toggle('active', i === 0));
        chipsEl.querySelectorAll('button').forEach(x => x.classList.remove('active'));
        applyFilters();
    });
    document.querySelectorAll('.pf-view button').forEach(b => b.addEventListener('click', () => {
        document.querySelectorAll('.pf-view button').forEach(x => x.classList.toggle('active', x === b));
        const first = new Map(wraps.filter(w => !w.hidden).map(w => [w, w.getBoundingClientRect()]));
        grid.classList.toggle('cols-2', b.dataset.cols === '2');
        if (!reduce) first.forEach((prev, w) => {
            const now = w.getBoundingClientRect();
            w.animate([{ transform: `translate(${prev.left - now.left}px, ${prev.top - now.top}px) scale(${prev.width / now.width})` }, { transform: 'none' }],
                { duration: 600, easing: 'cubic-bezier(.2,.8,.2,1)' });
        });
    }));

    // ---- Staggered scroll reveal ----
    const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
            if (!en.isIntersecting) return;
            const i = wraps.filter(w => !w.hidden).indexOf(en.target);
            en.target.style.setProperty('--d', (i % 3) * 120 + 'ms');
            en.target.classList.add('in');
            io.unobserve(en.target);
        });
    }, { threshold: .12 });
    wraps.forEach(w => io.observe(w));
    applyFilters(false);
    wraps.forEach(w => w.classList.remove('in'));
    wraps.forEach(w => io.observe(w));

    // ---- 3D tilt + cursor-following spotlight on cards ----
    if (!reduce && matchMedia('(hover: hover)').matches) {
        grid.addEventListener('pointermove', e => {
            const card = e.target.closest('.pf-card'); if (!card) return;
            const r = card.getBoundingClientRect();
            const x = e.clientX - r.left, y = e.clientY - r.top;
            card.style.setProperty('--mx', x + 'px');
            card.style.setProperty('--my', y + 'px');
            card.style.setProperty('--ry', ((x / r.width - .5) * 12).toFixed(2) + 'deg');
            card.style.setProperty('--rx', ((.5 - y / r.height) * 10).toFixed(2) + 'deg');
        });
        grid.addEventListener('pointerout', e => {
            const card = e.target.closest('.pf-card'); if (!card || card.contains(e.relatedTarget)) return;
            card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg');
        });
    }

    // ---- Magnetic buttons ----
    if (!reduce) document.addEventListener('pointermove', e => {
        document.querySelectorAll('.magnetic').forEach(b => {
            const r = b.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
            const dx = e.clientX - cx, dy = e.clientY - cy, d = Math.hypot(dx, dy);
            b.style.transform = d < 110 ? `translate(${dx * .25}px, ${dy * .3}px)` : '';
            b.style.transition = d < 110 ? 'transform .1s' : 'transform .5s cubic-bezier(.2,.8,.2,1)';
        });
    });

    // ---- Scroll progress bar + smooth cursor glow ----
    const bar = $('#pf-progress'), glow = $('#pf-cursor-glow');
    function onScroll() {
        const max = document.documentElement.scrollHeight - innerHeight;
        bar.style.transform = 'scaleX(' + (max > 0 ? scrollY / max : 0) + ')';
    }
    addEventListener('scroll', onScroll, { passive: true }); onScroll();

    let gx = innerWidth / 2, gy = innerHeight / 2, tx = gx, ty = gy;
    addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; glow.style.opacity = 1; });
    if (!reduce) (function loop() {
        gx += (tx - gx) * .08; gy += (ty - gy) * .08;
        glow.style.transform = 'translate3d(' + gx + 'px,' + gy + 'px,0)';
        requestAnimationFrame(loop);
    })();
})();
