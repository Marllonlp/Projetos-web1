document.addEventListener('DOMContentLoaded', () => {
    // Menu Móvel
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Alterna a visibilidade do menu móvel e do ícone do menu ao clicar
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Banner de Slides
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Função para mostrar o próximo slide
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Alterne slides a cada 5 segundos
    setInterval(nextSlide, 5000);

    // Funcionalidade de FAQ
    const faqItems = document.querySelectorAll('.faq-item');

    // Alterna a visibilidade das respostas do FAQ ao clicar na pergunta
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');

        question.addEventListener('click', () => {
            item.classList.toggle('active');
            answer.style.display = item.classList.contains('active') ? 'block' : 'none';
        });
    });
});
