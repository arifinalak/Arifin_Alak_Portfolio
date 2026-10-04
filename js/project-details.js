(function () {
    // Extended Project Data
    const projects = window.getProjects();

    // Helper to get URL parameter
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const projectId = getQueryParam('id');
    const projectIndex = parseInt(projectId, 10);

    // Validate project index
    if (isNaN(projectIndex) || projectIndex < 0 || projectIndex >= projects.length) {
        document.querySelector('.pd-container').innerHTML = `
            <div style="text-align: center; padding: 100px 20px;">
                <h2>Project Not Found</h2>
                <p>Sorry, the project you are looking for does not exist.</p>
                <br>
                <a href="portfolio.html" class="pd-btn-solid" style="display:inline-block; width:auto; padding:10px 30px;">Return to Projects</a>
            </div>
        `;
        return;
    }

    const project = projects[projectIndex];

    // Populate data
    document.title = `${project.title} | Arifin Alak`;
    document.getElementById('pd-category').textContent = project.category;
    document.getElementById('pd-title').textContent = project.title;
    document.getElementById('pd-subtitle').textContent = project.shortDesc;
    
    document.getElementById('pd-main-title').textContent = project.title;
    document.getElementById('pd-meta-cat').innerHTML = `<i class="fa-solid fa-tag"></i> ${project.category}`;
    document.getElementById('pd-meta-duration').innerHTML = `<i class="fa-regular fa-clock"></i> ${project.timeline}`;
    
    document.getElementById('pd-intro').textContent = project.intro;
    document.getElementById('pd-overview').textContent = project.overview;
    document.getElementById('pd-challenges').textContent = project.challenges;
    document.getElementById('pd-results').textContent = project.results;

    // Sidebar Meta
    document.getElementById('pd-side-role').textContent = project.role;
    document.getElementById('pd-side-timeline').textContent = project.timeline;
    document.getElementById('pd-side-date').textContent = project.date;

    const liveBtn = document.getElementById('pd-live-btn');
    if (project.liveUrl && project.liveUrl !== '#') {
        liveBtn.href = project.liveUrl;
    } else {
        liveBtn.style.display = 'none';
    }

    // Populate Features
    const featuresList = document.getElementById('pd-features');
    featuresList.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');

    // Populate Tech Chips
    const techChips = document.getElementById('pd-tech-chips');
    techChips.innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');

    // Populate Gallery Images
    const gallery = document.getElementById('pd-gallery');
    if (project.images && project.images.length > 0) {
        gallery.innerHTML = project.images.map(img => `<img src="${img}" alt="${project.title} screenshot">`).join('');
    } else {
        gallery.style.display = 'none';
    }

    // Navigation logic (Previous / Next)
    const prevBtn = document.getElementById('pd-prev');
    const nextBtn = document.getElementById('pd-next');
    
    if (projectIndex > 0) {
        const prevProj = projects[projectIndex - 1];
        prevBtn.href = `project-details.html?id=${projectIndex - 1}`;
        document.getElementById('pd-prev-title').textContent = prevProj.title;
    } else {
        prevBtn.classList.add('disabled');
        document.getElementById('pd-prev-title').textContent = 'None';
    }

    if (projectIndex < projects.length - 1) {
        const nextProj = projects[projectIndex + 1];
        nextBtn.href = `project-details.html?id=${projectIndex + 1}`;
        document.getElementById('pd-next-title').textContent = nextProj.title;
    } else {
        nextBtn.classList.add('disabled');
        document.getElementById('pd-next-title').textContent = 'None';
    }

    // --- Cursor and Progress Bar Effects (inherited from main site) ---
    const bar = document.getElementById('pf-progress');
    const glow = document.getElementById('pf-cursor-glow');
    function onScroll() {
        const max = document.documentElement.scrollHeight - innerHeight;
        if(bar) bar.style.transform = 'scaleX(' + (max > 0 ? scrollY / max : 0) + ')';
    }
    addEventListener('scroll', onScroll, { passive: true }); 
    onScroll();

    if (glow && matchMedia('(pointer: fine)').matches) {
        let gx = innerWidth / 2, gy = innerHeight / 2, tx = gx, ty = gy;
        addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; glow.style.opacity = 1; });
        (function loop() {
            gx += (tx - gx) * .08; gy += (ty - gy) * .08;
            glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
            requestAnimationFrame(loop);
        })();
    }

})();
