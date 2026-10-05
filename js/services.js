(function () {
    const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=80`;
    const steps = [
        { tag: 'Discovery & Consultation', title: 'Discovery', icon: 'fa-comments', img: U('photo-1552664730-d307ca884978'),
          desc: 'We start with a conversation to understand your goals, audience and requirements.',
          list: ['Goal & audience analysis', 'Requirement gathering', 'Competitor research', 'Budget & scope alignment'], out: 'Clear project understanding' },
        { tag: 'Strategy & Roadmap', title: 'Planning', icon: 'fa-compass-drafting', img: U('photo-1531403009284-440f080d1e12'),
          desc: 'After discovery, I create a practical roadmap with scope, structure, timeline, features, and the right technology approach.',
          list: ['Project scope definition', 'Page & feature planning', 'Timeline creation', 'Technology selection', 'Risk & priority mapping'], out: 'Strong execution plan' },
        { tag: 'UI / UX Design', title: 'Design', icon: 'fa-pen-ruler', img: U('photo-1561070791-2526d30994b5'),
          desc: 'Wireframes and polished mockups that reflect your brand and guide users naturally.',
          list: ['Wireframes & layouts', 'Visual style & branding', 'Responsive mockups', 'Feedback revisions'], out: 'Approved visual design' },
        { tag: 'Build & Integrate', title: 'Development', icon: 'fa-code', img: U('photo-1517694712202-14dd9538aa97'),
          desc: 'Clean, scalable code brings the design to life with performance and accessibility in mind.',
          list: ['Front-end development', 'Back-end & database', 'CMS / API integration', 'Version control & reviews'], out: 'Working website' },
        { tag: 'Quality Assurance', title: 'Testing', icon: 'fa-vial-circle-check', img: U('photo-1516321318423-f06f85e504b3'),
          desc: 'Rigorous checks across devices and browsers so everything works flawlessly.',
          list: ['Cross-browser testing', 'Mobile responsiveness', 'Speed & SEO checks', 'Bug fixing'], out: 'Polished, bug-free product' },
        { tag: 'Launch & Support', title: 'Launch', icon: 'fa-rocket', img: U('photo-1460925895917-afdab827c52f'),
          desc: 'Deployment, handover and ongoing support so your site keeps growing after go-live.',
          list: ['Domain & hosting setup', 'Deployment', 'Handover & training', 'Post-launch support'], out: 'Live, supported website' }
    ];

    const $ = (id) => document.getElementById(id);
    const btns = [...document.querySelectorAll('.sv-step')];
    const detail = $('sv-detail');

    function show(i) {
        const s = steps[i], num = String(i + 1).padStart(2, '0');
        $('sv-d-icon').className = 'fa-solid ' + s.icon;
        $('sv-d-tag').textContent = s.tag; $('sv-d-tag2').textContent = s.tag;
        $('sv-d-title').textContent = num + ' ' + s.title; $('sv-d-title2').textContent = s.title;
        $('sv-d-desc').textContent = s.desc; $('sv-d-desc2').textContent = s.desc;
        $('sv-d-num').textContent = num; $('sv-d-out').textContent = s.out;
        $('sv-d-img').src = s.img; $('sv-d-img').alt = s.title;
        $('sv-d-list').innerHTML = s.list.map(l => `<li><i class="fa-solid fa-circle-check"></i>${l}</li>`).join('');
        btns.forEach((b, k) => { b.classList.toggle('active', k === i); b.classList.toggle('done', k < i); });
        $('sv-line-fill').style.width = (i / (steps.length - 1) * 100) + '%';
    }
    let cur = 0;
    function go(i) {
        if (i === cur && $('sv-d-title').textContent) return;
        cur = i;
        detail.classList.add('swap');
        setTimeout(() => { show(i); detail.classList.remove('swap'); }, 300);
    }
    btns.forEach((b, i) => b.addEventListener('click', () => { go(i); clearInterval(auto); }));
    show(1); cur = 1; btns[1].click();
    let auto = null;

    // scroll reveal
    const io = new IntersectionObserver((es) => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // progress bar + cursor glow
    const bar = $('sv-progress'), glow = $('sv-glow');
    addEventListener('scroll', () => {
        const h = document.documentElement;
        bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
    }, { passive: true });
    addEventListener('mousemove', (e) => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; });
})();
