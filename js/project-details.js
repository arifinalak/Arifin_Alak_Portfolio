(function () {
    // Extended Project Data
    const projects = [
        {
            title: 'Bangladesh Flood Early Warning AI Agent',
            category: 'AI & Web',
            date: 'Jun 2026 – Jul 2026',
            timeline: '1 Month',
            role: 'AI Engineer & Full Stack Developer',
            liveUrl: 'https://github.com/arifinalak/Flood-AI-Agent-Bangladesh',
            shortDesc: 'Autonomous AI agent monitoring river levels and sending SMS alerts.',
            intro: 'Built an autonomous AI agent that monitors river water levels and rainfall in real-time, reasons about flood risk using Google Gemini AI, and automatically sends Bangla-language SMS alerts to village leaders — with no human involvement.',
            overview: 'Bangladesh loses 20–25% of its landmass to flooding every monsoon. Rural families often get only 2 hours of warning, whereas they need at least 22 hours to prepare. This project was developed to tackle this critical issue by leveraging real-time data and artificial intelligence to automate the early warning process.',
            challenges: 'The main challenge was seamlessly integrating multiple APIs (OpenWeather, sensor data streams) with Google Gemini 1.5 Flash for accurate risk classification without hallucinations. Additionally, ensuring reliable SMS delivery in the local language via Twilio to remote areas required robust error handling and logging.',
            results: 'The agent successfully fetches hourly data from 4 districts, classifies risk levels (SAFE/WATCH/WARNING/DANGER), and auto-sends SMS alerts. It logs all activities to Firebase and updates a live Flask + Leaflet.js dashboard, providing a vital tool for disaster preparedness (SDG 13).',
            tech: ['Python', 'Google Gemini 1.5 Flash', 'Firebase', 'Flask', 'Leaflet.js', 'Twilio SMS', 'OpenWeather API'],
            features: [
                'Hourly automated data fetching from 4 districts',
                'Multi-variable flood risk classification via Gemini AI',
                'Automated Bangla SMS alerts via Twilio',
                'Real-time Firebase logging',
                'Live interactive map dashboard (Leaflet.js)'
            ],
            images: [
                'https://images.unsplash.com/photo-1547683905-f30e618a1fbf?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
            ]
        },
        {
            title: 'Terra Luxe — Grameenphone Academy Contest Project',
            category: 'Web Design',
            date: 'Jun 2026',
            timeline: '1 Month',
            role: 'Frontend Developer & Designer',
            liveUrl: '#',
            shortDesc: 'A premium luxury e-commerce concept showcasing creative storytelling.',
            intro: 'Terra Luxe is a premium luxury e-commerce concept developed as part of a web design and development contest organized by Grameenphone Academy. The goal was to transform an ordinary red brick into a highly desirable premium product.',
            overview: 'The challenge required creative storytelling and an engaging digital experience. I developed Terra Luxe as an immersive product showcase that combines modern UI/UX, interactive animations, 3D visualization, and creative storytelling to elevate a simple object into a luxury item.',
            challenges: 'Integrating 3D models with Three.js while maintaining high performance and smooth scrolling was complex. Synchronizing GSAP animations with ScrollTrigger to match the narrative flow required precise timing and optimization across different devices and screen sizes.',
            results: 'The final product features an animated hero section, interactive 3D brick models, scroll-based storytelling, product collections, and even an interactive brick-stacking game. It successfully demonstrates how creative frontend development and 3D graphics can build a compelling digital experience.',
            tech: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'ScrollTrigger', 'Three.js'],
            features: [
                'Animated interactive hero section',
                'Scroll-based narrative storytelling',
                'Interactive 3D brick models',
                'Responsive luxury UI/UX design',
                'Interactive mini-game integration'
            ],
            images: [
                'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'
            ]
        },
        {
            title: 'EstateFlow - A Smart Real Estate Platform',
            category: 'Full Stack',
            date: 'Mar 2026 – Apr 2026',
            timeline: '2 Months',
            role: 'Full Stack Developer',
            liveUrl: 'https://estateflow.up.railway.app/',
            shortDesc: 'Real estate platform streamlining property transactions through a role-based system.',
            intro: 'EstateFlow is a full-stack real estate platform designed to streamline property buying, selling, and investing through a role-based system supporting Investors, Buyers, Agents, and Admins.',
            overview: 'The application was built to handle real-world property management workflows. It provides dedicated features for each user role, such as investment calculators, portfolio management, property comparisons, and lead CRM, all powered by a robust Python backend.',
            challenges: 'Implementing secure and scalable role-based access control (RBAC) was crucial. Managing dynamic property data, handling multiple image uploads, and ensuring fast query performance for property searches and comparisons required careful database schema design.',
            results: 'Delivered a highly structured and efficient platform that handles client communication, lead tracking, and administration seamlessly. The project highlights practical experience in complex backend development, RBAC, and scalable architecture.',
            tech: ['Python', 'Flask', 'SQLAlchemy', 'HTML/CSS', 'JavaScript'],
            features: [
                'Role-based access (Investor, Buyer, Agent, Admin)',
                'Property comparison and investment calculation',
                'Lead CRM and inquiry handling',
                'Dynamic portfolio management',
                'Secure user authentication'
            ],
            images: [
                'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
            ]
        },
        {
            title: 'IELTS Master – AI-Powered Preparation Platform',
            category: 'Full Stack',
            date: 'Feb 2026 – Apr 2026',
            timeline: '3 Months',
            role: 'Lead Developer',
            liveUrl: '#',
            shortDesc: 'AI-driven IELTS preparation platform designed to help students improve band scores.',
            intro: 'IELTS Master is a full-stack web-based platform providing an integrated learning experience with mock tests, section-wise practice, and smart recommendations.',
            overview: 'Designed to help students track their performance and improve their overall IELTS band score, the platform includes a Guided Practice Hub, Vocabulary Builder, performance analytics, and class recording management. It bridges the gap between structured preparation and personalized learning.',
            challenges: 'Developing an intuitive dashboard that presents complex performance analytics clearly was a priority. Integrating AI elements for smart practice recommendations required careful algorithmic design and testing to ensure the suggestions were genuinely helpful to students.',
            results: 'Created a modern, user-friendly platform where students can monitor progress, identify weak areas, and practice targeted questions. Instructors can easily upload and categorize resources, creating a comprehensive educational ecosystem.',
            tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS'],
            features: [
                'Section-wise practice (Listening, Reading, Writing, Speaking)',
                'Smart practice recommendations based on performance',
                'Detailed analytics and progress dashboards',
                'Instructor portal for resource management',
                'Timed mock tests and vocabulary builder'
            ],
            images: [
                'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80'
            ]
        },
        {
            title: 'Shipment Delay Prediction Using ML',
            category: 'Machine Learning',
            date: 'Dec 2025',
            timeline: '1 Month',
            role: 'Data Scientist',
            liveUrl: '#',
            shortDesc: 'Machine learning system to predict e-commerce shipment delays.',
            intro: 'Developed a machine learning-based system for predicting whether an e-commerce shipment will be delivered on time using a dataset containing 10,999 instances and 12 attributes.',
            overview: 'In e-commerce, on-time delivery is critical for customer satisfaction. This project utilized historical shipping data to train models that predict potential delays. It involved extensive data preprocessing, including handling categorical variables, scaling, and feature selection.',
            challenges: 'Balancing the dataset and selecting the most relevant features to prevent overfitting were primary challenges. I had to evaluate multiple models (Decision Tree, Logistic Regression, Neural Networks) and tune hyperparameters to achieve optimal predictive performance.',
            results: 'The Decision Tree Classifier achieved the strongest overall performance with ~64-68% accuracy. Feature analysis highlighted "Weight_in_gms" and "Discount_offered" as crucial factors associated with shipment delays, providing actionable business insights.',
            tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
            features: [
                'Extensive data preprocessing and feature scaling',
                'Implementation of multiple ML models',
                'Unsupervised analysis via K-Means Clustering',
                'Detailed ROC-AUC and confusion matrix evaluation',
                'Business insight generation from feature importance'
            ],
            images: [
                'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=600&q=80'
            ]
        },
        {
            title: 'The Ultimate INVENTORY - Full Stack System',
            category: 'Full Stack',
            date: 'Nov 2025 – Dec 2025',
            timeline: '2 Months',
            role: 'Full Stack Developer',
            liveUrl: '#',
            shortDesc: 'A comprehensive inventory management system for the RMG industry.',
            intro: 'The Ultimate INVENTORY is a full-stack web application developed as a university project to streamline and digitize inventory and operational management in the Ready-Made Garments (RMG) industry.',
            overview: 'This centralized platform allows users to manage products, track shipments, monitor sales, handle suppliers, and analyze business data through an interactive dashboard. It focuses on translating complex, real-world industry workflows into a clean digital interface.',
            challenges: 'Designing a relational database schema that accurately reflects the intricate operations of the RMG sector was difficult. Ensuring real-time dashboard updates and maintaining performance with complex join queries required significant optimization.',
            results: 'Delivered a robust, user-friendly interface combined with a structured backend. The project demonstrates practical implementation of routing, database integration, responsive UI design, and scalable web solutions tailored to specific industry needs.',
            tech: ['Python', 'Flask', 'HTML/CSS', 'JavaScript', 'MySQL'],
            features: [
                'Centralized product and supplier management',
                'Shipment tracking and sales monitoring',
                'Interactive analytics dashboard',
                'Secure user authentication',
                'Responsive UI tailored for industry workflows'
            ],
            images: [
                'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1507925922837-326f12d9348d?auto=format&fit=crop&w=600&q=80'
            ]
        },
        {
            title: 'MAZZY – E-Commerce Website',
            category: 'Web Development',
            date: 'Jan 2025 – Mar 2025',
            timeline: '3 Months',
            role: 'Web Developer',
            liveUrl: 'https://mazzybd.com/',
            shortDesc: 'A modern, intuitive e-commerce platform offering a seamless shopping experience.',
            intro: 'I developed MAZZY, a modern and responsive e-commerce website designed to provide a smooth and engaging online shopping experience.',
            overview: 'The platform was built to handle online retail efficiently, featuring a clean user interface, secure checkout processes, comprehensive product management, and user authentication. The primary focus was on maximizing conversion rates through excellent UX.',
            challenges: 'Ensuring absolute security during the checkout process and optimizing page load speeds for high-resolution product images were major hurdles. The site also needed to be perfectly responsive across a wide array of mobile devices.',
            results: 'Launched a highly performant and secure e-commerce platform. The intuitive design and clear product catalogue resulted in a seamless navigation experience, successfully meeting the client\'s goals for digital sales.',
            tech: ['WordPress', 'WooCommerce', 'PHP', 'SEO', 'CSS'],
            features: [
                'Clean, responsive user interface',
                'Secure checkout and payment integration',
                'Comprehensive product and inventory management',
                'User authentication and profile management',
                'SEO optimization for higher visibility'
            ],
            images: [
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80'
            ]
        }
    ];

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
        if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? scrollY / max : 0) + ')';
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
