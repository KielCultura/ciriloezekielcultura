// Projects Modal Functionality
const projectData = {
    1: {
        title: 'BagRovr',
        description: 'BagRovr, short for Baguio Route Optimization for Visitor Recommendations is an AI powered tourist assistant that can help you with your needs while staying in Baguio City. Need help in making an itinerary? BagRovr has you covered! Need help navigating through the city? BagRovr has you covered! Need help finding a place to stay? BagRovr has you covered! Need a travel guide to make your stay pleasant? BagRovr has you covered!',
        image1: 'assets/images/Bagrovr.png',
        image2: 'assets/images/Bagrovr-detail.png',
        tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'Vercel'],
        demoLink: 'https://sites.google.com/view/bagrovr/home',
        repoLink: 'https://github.com/KielCultura/BAGROVR'
    },
    2: {
        title: 'Alma Mortis',
        description: 'As the player explores the abandoned campus, they uncover fragments of a journal left behind by their mothers cryptic writings that hint at a legacy buried beneath the institutions foundations. Each discovery draws the player closer to the truth: the university was not simply shut down, but silenced. Will they expose the reason behind the schools closure, or become entangled in the same darkness that consumed it? The game challenges the player to piece together puzzles for cognitive gain. A family-driven storyline creates emotional connection, personal stakes, making the mystery more impactful. Engaging gameplay ensures players are constantly challenged in different ways.',
        image1: 'assets/images/Alma Mortis.jpg',
        image2: 'assets/images/Alma Mortis-detail.jpg',
        tech: ['Lua', 'Roblox Studio', 'Blender'],
        demoLink: 'https://www.roblox.com/games/115965163059866/Alma-Mortis',
    },
    3: {
        title: 'The Dating Counsel',
        description: 'The Dating Counsel is a fun AI powered website, where you ask dating advice. It is a project that I made for fun, and it is not meant to be taken seriously. It is just a way for me to practice my web development skills and have fun with AI. The website is built with Vercel and Groq API, it can give you advice on various dating topics. It is a great way to get some quick advice or just have some fun with AI.',
        image1: 'assets/images/Datingcounsel.png',
        image2: 'assets/images/Datingcounsel-detail.png',
        tech: ['Groq API', 'Vercel', 'HTML', 'CSS', 'JavaScript'],
        demoLink: 'https://thedatingcounsel.vercel.app',
        repoLink: 'https://github.com/KielCultura/thedatingcounsel'
    },
    4: {
        title: 'Fleeting Cycles',
        description: 'An original Vocaloid song that I made using BandLab. The song is about the repetition of your own mistakes and struggles. It is a project that I am proud of and I hope it can bring joy to those who listen to it. It is one of my first original works so its kinda scruffed hehe',
        image1: 'assets/images/Fleeting Cycles.png',
        image2: 'assets/images/Fleeting Cycles-detail.png',
        tech: ['Vocaloid', 'Music', 'BandLab'],
        demoLink: 'https://www.youtube.com/watch?v=lgEaAqXqKSg',
        repoLink: '#'
    },

     5: {
        title: 'Tsuneo',
        description: 'An UTAU voicebank that I created using my own voice. It features deep baritone sound, currently available in Japanese. You can listen to a demo here: <a href="https://www.youtube.com/watch?v=9OarZyaEIjY" target="_blank" style="color: #0066cc; text-decoration: underline;">https://www.youtube.com/watch?v=9OarZyaEIjY</a>',
        image1: 'assets/images/Tsuneo.png',
        image2: 'assets/images/Tsuneo-detail.png',
        tech: ['UTAU', 'Music', 'Voice Synthesis', 'Concatenation'],
        demoLink: 'https://drive.google.com/file/d/1w7QwuEud2NE6bXJ1bDbMKO7A28dAkdsp/view?usp=sharing',
        repoLink: '#'
    }
};

function openModal(projectId) {
    const project = projectData[projectId];
    const modal = document.getElementById('projectModal');

    // Update modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').innerHTML = project.description;
    document.getElementById('modalImage1').src = project.image1;
    document.getElementById('modalImage2').src = project.image2;

    // Update tech tags
    const techContainer = document.querySelector('.tech-tags');
    techContainer.innerHTML = project.tech
        .map(tech => `<span class="tech-tag">${tech}</span>`)
        .join('');

    // Update links
    document.getElementById('demoLink').href = project.demoLink;
    
    // Conditionally show repo link
    const repoLinkElement = document.getElementById('repoLink');
    if (project.repoLink && project.repoLink !== '#') {
        repoLinkElement.href = project.repoLink;
        repoLinkElement.style.display = 'inline-block';
    } else {
        repoLinkElement.style.display = 'none';
    }

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
