document.addEventListener('DOMContentLoaded', () => {
    // Fundo de Partículas
    function createParticles() {
        const container = document.createElement('div');
        container.classList.add('particle-container');
        document.body.appendChild(container);

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Define dimensões e posição aleatória para cada partícula
            particle.style.width = `${Math.random() * 20 + 5}px`;
            particle.style.height = particle.style.width;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
            
            container.appendChild(particle);
        }
    }
    
    // Inicialização
    createParticles();
    setupDarkModeToggle();
    createSkillsSection();

    // Listeners de Eventos
    window.addEventListener('scroll', revealSections);
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Alternar menu hamburger
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});
