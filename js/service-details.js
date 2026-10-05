(function () {
    const urlParams = new URLSearchParams(window.location.search);
    let sid = parseInt(urlParams.get('id'));
    if (isNaN(sid) || sid < 0 || sid > 5) sid = 0; // default to first

    const servicesData = [
        {
            id: 0,
            title: "Full-Stack Web Applications",
            subtitle: "End-to-end custom web applications built for speed, scale, and seamless user experience.",
            heroBg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
            introImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
            introTitle: "Build Powerful Web Applications with Modern Technologies",
            introDesc: "Transform your complex business logic into a smooth, interactive web experience. I specialize in building complete solutions—from a beautiful, responsive frontend to a robust, secure backend. Whether you need a SaaS platform, a booking system, or a custom dashboard, my full-stack expertise ensures every piece of your application works in perfect harmony.",
            features: [
                { i: 'fa-code', t: 'Frontend Development', d: 'Pixel-perfect, responsive UI using React, Next.js, and modern CSS.' },
                { i: 'fa-server', t: 'Backend Development', d: 'Secure and scalable server architecture using Node.js or Python.' },
                { i: 'fa-database', t: 'Database Integration', d: 'Optimized PostgreSQL and MongoDB databases for fast data retrieval.' },
                { i: 'fa-shield-halved', t: 'Security Implementation', d: 'Best-in-class security protocols, authentication, and data protection.' },
                { i: 'fa-bolt', t: 'Performance Optimization', d: 'Blazing fast load times and optimized Core Web Vitals.' },
                { i: 'fa-plug', t: 'API Development', d: 'Custom RESTful and GraphQL APIs for seamless third-party integrations.' }
            ],
            packages: [
                { n: 'Basic App', p: '$499', d: 'Perfect for simple MVP apps.', f: ['Responsive UI', 'Basic Backend API', 'Database Setup', '1 Month Support'] },
                { n: 'Standard App', p: '$999', d: 'Ideal for growing businesses.', f: ['Advanced UI/UX', 'Full API Integration', 'Admin Dashboard', 'Payment Gateway', '3 Months Support'], pop: true },
                { n: 'Premium SaaS', p: '$1999', d: 'Complete enterprise solution.', f: ['Complex Architecture', 'AI Integrations', 'Multi-tenant System', 'Advanced Security', '6 Months Support'] }
            ],
            faqs: [
                { q: 'What technologies do you use?', a: 'I typically use React/Next.js for the frontend, Node.js or Python (Flask/Django) for the backend, and PostgreSQL or MongoDB for databases.' },
                { q: 'How long does a full-stack project take?', a: 'It depends on complexity. A basic MVP takes 2-4 weeks, while a complex SaaS platform can take 2-3 months.' },
                { q: 'Do you provide hosting and deployment?', a: 'Yes, I handle deployment on platforms like Vercel, AWS, or DigitalOcean, ensuring your app goes live smoothly.' }
            ]
        },
        {
            id: 1,
            title: "Backend & API Development",
            subtitle: "Robust, secure, and scalable server-side architecture and custom RESTful APIs.",
            heroBg: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=1920&q=80",
            introImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
            introTitle: "Powering Your Applications with Solid Architecture",
            introDesc: "The backend is the brain of your application. I design and develop robust server-side logic, secure databases, and fast RESTful APIs that your frontend or mobile app can rely on. From handling thousands of concurrent users to complex data processing, I ensure your system is built to scale.",
            features: [
                { i: 'fa-server', t: 'Server Architecture', d: 'Scalable cloud infrastructure design and implementation.' },
                { i: 'fa-network-wired', t: 'RESTful APIs', d: 'Clean, documented, and secure API endpoints.' },
                { i: 'fa-database', t: 'Database Design', d: 'Relational (SQL) and NoSQL database modeling.' },
                { i: 'fa-lock', t: 'Authentication', d: 'Secure JWT, OAuth, and Role-Based Access Control.' },
                { i: 'fa-microchip', t: 'Data Processing', d: 'Efficient background jobs and complex data handling.' },
                { i: 'fa-cloud-arrow-up', t: 'Cloud Deployment', d: 'AWS, Docker, and CI/CD pipeline setup.' }
            ],
            packages: [
                { n: 'Basic API', p: '$299', d: 'Simple endpoints for small apps.', f: ['Up to 10 Endpoints', 'Basic Database', 'Documentation', 'Standard Security'] },
                { n: 'Standard Backend', p: '$699', d: 'Full backend for web/mobile.', f: ['Up to 30 Endpoints', 'Complex DB Relations', 'Auth System', 'Admin Panel Support', '3 Months Support'], pop: true },
                { n: 'Enterprise Logic', p: '$1499', d: 'Highly scalable architecture.', f: ['Unlimited Endpoints', 'Microservices', 'Advanced Caching (Redis)', 'Load Balancing', '6 Months Support'] }
            ],
            faqs: [
                { q: 'Can you integrate third-party APIs?', a: 'Absolutely. I have extensive experience integrating payment gateways (Stripe), Twilio, Google Maps, and various AI APIs.' },
                { q: 'Is the API documentation included?', a: 'Yes, I provide comprehensive documentation using tools like Postman or Swagger.' },
                { q: 'How do you secure the backend?', a: 'I implement rate limiting, CORS, data validation, prepared SQL statements, and secure JWT token authentication.' }
            ]
        },
        {
            id: 2,
            title: "AI Automation & Chatbots",
            subtitle: "Smart AI solutions that automate tasks and elevate customer engagement.",
            heroBg: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80",
            introImg: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
            introTitle: "Transform Your Business with Artificial Intelligence",
            introDesc: "Leverage the power of Large Language Models (LLMs) and custom AI agents to automate repetitive tasks, analyze massive datasets, and provide 24/7 intelligent customer support. I build solutions that integrate directly into your existing workflows, saving you time and money.",
            features: [
                { i: 'fa-brain', t: 'LLM Integration', d: 'OpenAI, Anthropic, and Google Gemini API integration.' },
                { i: 'fa-comments', t: 'Smart Chatbots', d: 'Context-aware customer service bots trained on your data.' },
                { i: 'fa-gears', t: 'Workflow Automation', d: 'AI-driven data extraction, sorting, and reporting.' },
                { i: 'fa-magnifying-glass-chart', t: 'RAG Systems', d: 'Retrieval-Augmented Generation for accurate internal knowledge bots.' },
                { i: 'fa-microphone', t: 'Voice AI', d: 'Speech-to-text and text-to-speech integrations.' },
                { i: 'fa-chart-line', t: 'Predictive Analysis', d: 'Machine learning models for trend prediction.' }
            ],
            packages: [
                { n: 'Basic Bot', p: '$399', d: 'Simple FAQ AI Chatbot.', f: ['OpenAI Integration', 'Trained on 5 Docs', 'Website Widget', 'Basic Prompt Tuning'] },
                { n: 'Smart Agent', p: '$899', d: 'Advanced context-aware bot.', f: ['RAG Implementation', 'Trained on Full Website', 'Lead Generation Flow', 'Dashboard Analytics'], pop: true },
                { n: 'Full Automation', p: '$1999', d: 'End-to-end AI workflow.', f: ['Custom AI Agents', 'API Integrations (Zapier)', 'Automated Reporting', 'Voice Support'] }
            ],
            faqs: [
                { q: 'Will the AI hallucinate or give wrong answers?', a: 'By using RAG (Retrieval-Augmented Generation) and strict prompt engineering, we constrain the AI to only answer based on your specific company data, drastically reducing hallucinations.' },
                { q: 'Can the chatbot capture leads?', a: 'Yes! The bot can be programmed to ask for names, emails, and phone numbers before or during the conversation, sending them directly to your CRM.' },
                { q: 'What platforms can the chatbot be deployed on?', a: 'I can deploy bots on your website, WhatsApp, Telegram, or Discord.' }
            ]
        },
        {
            id: 3,
            title: "Website Design",
            subtitle: "Custom, responsive web design that reflects your brand identity and engages users.",
            heroBg: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1920&q=80",
            introImg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
            introTitle: "Crafting Digital Experiences that Captivate",
            introDesc: "Your website is your digital storefront. I design stunning, user-centric interfaces that not only look beautiful but are strategically built to convert visitors into customers. From wireframing to the final polished UI, every pixel is placed with purpose.",
            features: [
                { i: 'fa-pen-nib', t: 'Custom UI Design', d: 'Unique, tailor-made interfaces that stand out.' },
                { i: 'fa-mobile-screen', t: 'Mobile First', d: 'Flawless responsive design for all screen sizes.' },
                { i: 'fa-users', t: 'UX Optimization', d: 'Intuitive user journeys that increase conversion rates.' },
                { i: 'fa-palette', t: 'Brand Identity', d: 'Cohesive color palettes, typography, and visual assets.' },
                { i: 'fa-wand-magic-sparkles', t: 'Interactive Prototypes', d: 'Clickable mockups to visualize the flow before coding.' },
                { i: 'fa-universal-access', t: 'Accessibility', d: 'Designs that comply with WCAG standards for all users.' }
            ],
            packages: [
                { n: 'Landing Page', p: '$199', d: 'Perfect for campaigns.', f: ['1 High-Converting Page', 'Responsive Design', 'Figma Source File', '2 Revisions'] },
                { n: 'Business Site', p: '$499', d: 'Standard company website.', f: ['Up to 5 Pages', 'Custom Iconography', 'Interactive Prototype', 'Style Guide', '4 Revisions'], pop: true },
                { n: 'E-Commerce / App', p: '$999', d: 'Complex platform design.', f: ['Up to 15 Screens', 'Advanced UX Research', 'Design System', 'Micro-interactions', 'Unlimited Revisions'] }
            ],
            faqs: [
                { q: 'What tools do you use for design?', a: 'I primarily use Figma for UI/UX design, prototyping, and developer handoff.' },
                { q: 'Does this include the actual coding of the website?', a: 'This service focuses purely on the UI/UX design. However, I offer development services as well, and we can bundle them together!' },
                { q: 'Can you redesign my existing website?', a: 'Yes! I can take your current site, analyze its UX flaws, and completely modernize the design.' }
            ]
        },
        {
            id: 4,
            title: "Data Analysis & Dashboards",
            subtitle: "Transform raw data into actionable insights through interactive dashboards.",
            heroBg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80",
            introImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            introTitle: "Unlocking the Value Hidden in Your Data",
            introDesc: "Data is useless unless you can understand it. I specialize in cleaning, analyzing, and visualizing complex datasets. By building intuitive, interactive dashboards, I help business owners track KPIs, identify trends, and make data-driven decisions with confidence.",
            features: [
                { i: 'fa-chart-pie', t: 'Data Visualization', d: 'Beautiful, easy-to-read charts and graphs.' },
                { i: 'fa-filter', t: 'Data Cleaning', d: 'Processing raw data for accuracy and consistency.' },
                { i: 'fa-gauge-high', t: 'Interactive Dashboards', d: 'Real-time dashboards using tools like React, Chart.js, or PowerBI.' },
                { i: 'fa-robot', t: 'Predictive Modeling', d: 'Basic machine learning for forecasting trends.' },
                { i: 'fa-file-export', t: 'Automated Reporting', d: 'Scheduled PDF or email reports generation.' },
                { i: 'fa-database', t: 'Data Integration', d: 'Pulling data from multiple APIs and databases into one view.' }
            ],
            packages: [
                { n: 'Basic Report', p: '$249', d: 'Simple static data analysis.', f: ['Data Cleaning (1 Source)', 'Static Charts/Graphs', 'Summary Report', '1 Revision'] },
                { n: 'Live Dashboard', p: '$599', d: 'Interactive web dashboard.', f: ['Up to 3 Data Sources', 'Real-time API pulling', 'Interactive Web UI', 'Filters & Sorting'], pop: true },
                { n: 'Enterprise Analytics', p: '$1299', d: 'Complex BI solutions.', f: ['Unlimited Data Sources', 'Predictive Analysis', 'User Role Access', 'Automated Email Reports'] }
            ],
            faqs: [
                { q: 'What visualization libraries do you use for web dashboards?', a: 'I use libraries like Recharts, Chart.js, and D3.js for custom web dashboards.' },
                { q: 'Is my data secure?', a: 'Absolutely. I follow strict data privacy protocols and can work entirely within your secure servers if required.' },
                { q: 'Can the dashboard connect to my existing database?', a: 'Yes, I can build custom connectors to securely fetch real-time data from your SQL/NoSQL databases or third-party APIs.' }
            ]
        },
        {
            id: 5,
            title: "Maintenance & Bug Fixing",
            subtitle: "Keep your website updated, secure, fast, and running smoothly.",
            heroBg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80",
            introImg: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
            introTitle: "Ensuring Your Digital Assets Stay Flawless",
            introDesc: "Technology evolves rapidly, and websites break. I provide comprehensive maintenance and debugging services to ensure your platform remains secure against vulnerabilities, performs at peak speed, and functions perfectly across all modern devices and browsers.",
            features: [
                { i: 'fa-bug-slash', t: 'Bug Squashing', d: 'Identifying and fixing frontend and backend errors.' },
                { i: 'fa-shield-heart', t: 'Security Updates', d: 'Patching vulnerabilities and updating dependencies.' },
                { i: 'fa-gauge', t: 'Speed Optimization', d: 'Minifying assets and optimizing images for fast loading.' },
                { i: 'fa-mobile-screen', t: 'Responsive Fixes', d: 'Fixing layout breaks on specific mobile devices.' },
                { i: 'fa-database', t: 'Database Backups', d: 'Setting up automated, secure data backups.' },
                { i: 'fa-magnifying-glass', t: 'SEO Auditing', d: 'Fixing meta tags, broken links, and accessibility errors.' }
            ],
            packages: [
                { n: 'One-Time Fix', p: '$99', d: 'Fix a specific bug.', f: ['Resolve 1-3 Minor Bugs', 'Responsive Adjustments', 'Code Review', 'Delivered in 24h'] },
                { n: 'Monthly Care', p: '$199', d: 'Ongoing peace of mind.', f: ['Weekly Backups', 'Security Updates', 'Uptime Monitoring', '2 Hrs Dev Time/mo'], pop: true },
                { n: 'Premium Retainer', p: '$499', d: 'Complete priority support.', f: ['Daily Backups', 'Performance Optimization', 'Priority 24/7 Support', '10 Hrs Dev Time/mo'] }
            ],
            faqs: [
                { q: 'Do you fix bugs on code written by other developers?', a: 'Yes! I have extensive experience diving into legacy code or poorly documented systems to identify and resolve critical issues.' },
                { q: 'How fast can you fix an urgent issue?', a: 'For urgent crashes or security breaches, I offer emergency response times within 2-4 hours.' },
                { q: 'What happens if I don\'t use all my retainer hours in a month?', a: 'Retainer hours generally do not roll over, but I use any spare time to proactively improve your site\'s SEO and performance.' }
            ]
        }
    ];

    const data = servicesData.find(s => s.id === sid) || servicesData[0];

    // Populate Hero
    document.getElementById('sd-hero').style.backgroundImage = `url('${data.heroBg}')`;
    document.getElementById('sd-title').textContent = data.title;
    document.getElementById('sd-subtitle').textContent = data.subtitle;

    // Populate Intro
    document.getElementById('sd-intro-img').src = data.introImg;
    document.getElementById('sd-intro-content').innerHTML = `
        <h2>${data.introTitle}</h2>
        <p>${data.introDesc}</p>
    `;

    // Populate Features
    const featuresHtml = data.features.map(f => `
        <div class="sd-feature-card">
            <div class="sd-feature-icon"><i class="fa-solid ${f.i}"></i></div>
            <h3>${f.t}</h3>
            <p>${f.d}</p>
        </div>
    `).join('');
    document.getElementById('sd-features-grid').innerHTML = featuresHtml;

    // Populate Timeline (Generic 4 steps for all)
    const timelineHtml = `
        <div class="sd-step">
            <div class="sd-step-icon"><i class="fa-solid fa-comments"></i></div>
            <h4>1. Consultation</h4>
        </div>
        <div class="sd-step">
            <div class="sd-step-icon"><i class="fa-solid fa-pen-ruler"></i></div>
            <h4>2. Planning & Design</h4>
        </div>
        <div class="sd-step">
            <div class="sd-step-icon"><i class="fa-solid fa-code"></i></div>
            <h4>3. Development</h4>
        </div>
        <div class="sd-step">
            <div class="sd-step-icon"><i class="fa-solid fa-rocket"></i></div>
            <h4>4. Deployment</h4>
        </div>
        <div class="sd-step">
            <div class="sd-step-icon"><i class="fa-solid fa-headset"></i></div>
            <h4>5. Support</h4>
        </div>
    `;
    document.getElementById('sd-timeline').innerHTML = timelineHtml;

    // Populate Pricing
    const pricingHtml = data.packages.map(p => `
        <div class="sd-price-card ${p.pop ? 'popular' : ''}">
            ${p.pop ? '<div class="sd-badge">Most Popular</div>' : ''}
            <h3>${p.n}</h3>
            <div class="sd-price">${p.p}<span>/project</span></div>
            <div class="sd-price-desc">${p.d}</div>
            <ul class="sd-price-features">
                ${p.f.map(feat => `<li><i class="fa-solid fa-check"></i> ${feat}</li>`).join('')}
            </ul>
            <a href="https://www.fiverr.com/arifinalak" target="_blank" class="${p.pop ? 'sd-btn-solid' : 'sd-btn-outline'}">Choose Plan</a>
        </div>
    `).join('');
    document.getElementById('sd-pricing-grid').innerHTML = pricingHtml;

    // Populate FAQ
    const faqHtml = data.faqs.map(f => `
        <div class="sd-faq-item">
            <button class="sd-faq-q">${f.q} <i class="fa-solid fa-chevron-down"></i></button>
            <div class="sd-faq-a">
                <p>${f.a}</p>
            </div>
        </div>
    `).join('');
    document.getElementById('sd-faq-list').innerHTML = faqHtml;

    // FAQ Accordion Logic
    setTimeout(() => {
        const faqs = document.querySelectorAll('.sd-faq-q');
        faqs.forEach(faq => {
            faq.addEventListener('click', () => {
                const answer = faq.nextElementSibling;
                const isOpen = answer.style.maxHeight;
                // close all
                document.querySelectorAll('.sd-faq-a').forEach(a => { a.style.maxHeight = null; });
                document.querySelectorAll('.sd-faq-q i').forEach(i => { i.style.transform = 'rotate(0deg)'; });
                if (!isOpen) {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                    faq.querySelector('i').style.transform = 'rotate(180deg)';
                }
            });
        });

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".sd-hero-content", { y: 50, opacity: 0, duration: 1, ease: "power3.out" });
        
        gsap.from(".sd-split-text", {
            scrollTrigger: { trigger: ".sd-split", start: "top 80%" },
            x: -50, opacity: 0, duration: 0.8
        });
        gsap.from(".sd-split-img", {
            scrollTrigger: { trigger: ".sd-split", start: "top 80%" },
            x: 50, opacity: 0, duration: 0.8
        });

        gsap.from(".sd-feature-card", {
            scrollTrigger: { trigger: ".sd-features-grid", start: "top 85%" },
            y: 40, opacity: 0, duration: 0.6, stagger: 0.1
        });

        gsap.from(".sd-step", {
            scrollTrigger: { trigger: ".sd-timeline", start: "top 85%" },
            y: 30, opacity: 0, duration: 0.5, stagger: 0.15
        });

        gsap.from(".sd-price-card", {
            scrollTrigger: { trigger: ".sd-pricing-grid", start: "top 85%" },
            y: 50, opacity: 0, duration: 0.7, stagger: 0.2
        });

    }, 100);

})();
