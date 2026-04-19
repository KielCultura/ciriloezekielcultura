// About Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    const aboutImage = document.querySelector('.about-image');
    const aboutParagraphs = document.querySelectorAll('.about-paragraph');

    // Add interactive effects
    if (aboutImage) {
        aboutImage.addEventListener('click', function() {
            this.style.animation = 'pulse 0.6s ease-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    }

    // Add paragraph hover effects
    aboutParagraphs.forEach((para, index) => {
        para.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });

        para.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
