// Projects Modal Functionality
const projectData = {
    1: {
        title: 'Project Title 1',
        description: 'This is a detailed description of your first project. Add information about what it does, the technologies used, and the results achieved.',
        image1: 'assets/images/project1-placeholder.png',
        image2: 'assets/images/project1-detail-placeholder.png',
        tech: ['HTML', 'CSS', 'JavaScript'],
        demoLink: '#',
        repoLink: '#'
    },
    2: {
        title: 'Project Title 2',
        description: 'This is a detailed description of your second project. Share your role, challenges overcome, and the impact of the project.',
        image1: 'assets/images/project2-placeholder.png',
        image2: 'assets/images/project2-detail-placeholder.png',
        tech: ['React', 'Node.js', 'MongoDB'],
        demoLink: '#',
        repoLink: '#'
    },
    3: {
        title: 'Project Title 3',
        description: 'This is a detailed description of your third project. Highlight the key features and any innovative solutions you implemented.',
        image1: 'assets/images/project3-placeholder.png',
        image2: 'assets/images/project3-detail-placeholder.png',
        tech: ['Vue.js', 'Firebase', 'CSS Grid'],
        demoLink: '#',
        repoLink: '#'
    },
    4: {
        title: 'Project Title 4',
        description: 'This is a detailed description of your fourth project. Include metrics, achievements, and what you learned from the experience.',
        image1: 'assets/images/project4-placeholder.png',
        image2: 'assets/images/project4-detail-placeholder.png',
        tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL'],
        demoLink: '#',
        repoLink: '#'
    }
};

function openModal(projectId) {
    const project = projectData[projectId];
    const modal = document.getElementById('projectModal');

    // Update modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalImage1').src = project.image1;
    document.getElementById('modalImage2').src = project.image2;

    // Update tech tags
    const techContainer = document.querySelector('.tech-tags');
    techContainer.innerHTML = project.tech
        .map(tech => `<span class="tech-tag">${tech}</span>`)
        .join('');

    // Update links
    document.querySelectorAll('.modal-link')[0].href = project.demoLink;
    document.querySelectorAll('.modal-link')[1].href = project.repoLink;

    // Show modal with animation
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});
