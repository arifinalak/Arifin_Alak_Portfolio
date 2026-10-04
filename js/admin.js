document.addEventListener('DOMContentLoaded', () => {
    const loginSection = document.getElementById('login-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const loginForm = document.getElementById('admin-login-form');
    const errorMsg = document.getElementById('login-error');
    const logoutBtn = document.getElementById('logout-btn');
    
    // Check if already logged in via sessionStorage
    if (sessionStorage.getItem('alak_admin_logged_in') === 'true') {
        showDashboard();
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;

        if (user === 'alak_admin' && pass === 'alak@2001T') {
            sessionStorage.setItem('alak_admin_logged_in', 'true');
            showDashboard();
            errorMsg.textContent = '';
        } else {
            errorMsg.textContent = 'Invalid credentials. Please try again.';
        }
    });

    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('alak_admin_logged_in');
        loginSection.style.display = 'flex';
        dashboardSection.style.display = 'none';
        loginForm.reset();
    });

    function showDashboard() {
        loginSection.style.display = 'none';
        dashboardSection.style.display = 'flex';
        renderProjects();
    }

    // --- Dashboard Logic ---
    const tableBody = document.getElementById('projects-table-body');
    const addBtn = document.getElementById('add-project-btn');
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.close-modal');
    const projectForm = document.getElementById('project-form');

    let projects = window.getProjects();

    function renderProjects() {
        tableBody.innerHTML = '';
        projects.forEach((proj, idx) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${proj.title}</strong></td>
                <td>${proj.category}</td>
                <td>${proj.year}</td>
                <td>
                    <button class="action-btn edit" onclick="editProject(${idx})"><i class="fa-solid fa-pen"></i></button>
                    <button class="action-btn delete" onclick="deleteProject(${idx})"><i class="fa-solid fa-trash"></i></button>
                </td>
            `;
            tableBody.appendChild(tr);
        });
    }

    // Expose functions to global scope for inline onclick handlers
    window.editProject = function(idx) {
        const proj = projects[idx];
        document.getElementById('modal-title').textContent = 'Edit Project';
        document.getElementById('proj-id').value = idx;
        
        document.getElementById('proj-title').value = proj.title || '';
        document.getElementById('proj-category').value = proj.category || '';
        document.getElementById('proj-year').value = proj.year || '';
        document.getElementById('proj-timeline').value = proj.timeline || '';
        document.getElementById('proj-role').value = proj.role || '';
        document.getElementById('proj-liveUrl').value = proj.liveUrl || '';
        document.getElementById('proj-shortDesc').value = proj.shortDesc || '';
        document.getElementById('proj-intro').value = proj.intro || '';
        document.getElementById('proj-overview').value = proj.overview || '';
        document.getElementById('proj-challenges').value = proj.challenges || '';
        document.getElementById('proj-results').value = proj.results || '';
        document.getElementById('proj-tech').value = (proj.tech || []).join(', ');
        document.getElementById('proj-features').value = (proj.features || []).join(',\n');
        document.getElementById('proj-images').value = (proj.images || []).join(',\n');
        
        document.getElementById('proj-height').value = proj.height || 280;
        document.getElementById('proj-icon').value = proj.icon || 'fa-code';

        modal.style.display = 'block';
    };

    window.deleteProject = function(idx) {
        if (confirm('Are you sure you want to delete this project?')) {
            projects.splice(idx, 1);
            window.saveProjects(projects);
            renderProjects();
        }
    };

    addBtn.addEventListener('click', () => {
        document.getElementById('modal-title').textContent = 'Add New Project';
        projectForm.reset();
        document.getElementById('proj-id').value = '';
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const idxStr = document.getElementById('proj-id').value;
        const newProj = {
            title: document.getElementById('proj-title').value,
            category: document.getElementById('proj-category').value,
            year: parseInt(document.getElementById('proj-year').value) || new Date().getFullYear(),
            timeline: document.getElementById('proj-timeline').value,
            role: document.getElementById('proj-role').value,
            liveUrl: document.getElementById('proj-liveUrl').value,
            shortDesc: document.getElementById('proj-shortDesc').value,
            intro: document.getElementById('proj-intro').value,
            overview: document.getElementById('proj-overview').value,
            challenges: document.getElementById('proj-challenges').value,
            results: document.getElementById('proj-results').value,
            
            tech: document.getElementById('proj-tech').value.split(',').map(s => s.trim()).filter(Boolean),
            features: document.getElementById('proj-features').value.split(',').map(s => s.trim()).filter(Boolean),
            images: document.getElementById('proj-images').value.split(',').map(s => s.trim()).filter(Boolean),
            
            height: parseInt(document.getElementById('proj-height').value) || 280,
            icon: document.getElementById('proj-icon').value || 'fa-code',
            
            // Generate simple date string if empty
            date: document.getElementById('proj-timeline').value || new Date().getFullYear().toString()
        };

        if (idxStr !== '') {
            // Edit existing
            projects[parseInt(idxStr)] = newProj;
        } else {
            // Add new
            projects.unshift(newProj);
        }

        window.saveProjects(projects);
        renderProjects();
        modal.style.display = 'none';
        
        alert('Project saved successfully! (Note: Changes are saved to your browser\'s local storage. To make them permanent, you will need to update data.js)');
    });
});
