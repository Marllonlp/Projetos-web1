// Adiciona um evento de clique ao elemento com id 'menuToggle'
document.getElementById('menuToggle').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    const menuToggle = this;

    // Alterna as classes 'active' nos elementos navMenu, overlay e menuToggle
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Adiciona um evento de clique ao elemento com id 'mobileMenuOverlay'
document.getElementById('mobileMenuOverlay').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    const overlay = this;
    const menuToggle = document.getElementById('menuToggle');

    // Remove as classes 'active' dos elementos navMenu, overlay e menuToggle
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.classList.remove('active');
});

// Função para alternar o menu
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
    const overlay = document.getElementById('mobileMenuOverlay');
    overlay.classList.toggle('active');
}

// Função para alternar perguntas frequentes (FAQ)
function toggleFAQ(question) {
    const answer = question.nextElementSibling;
    answer.classList.toggle('active');
}

// Adiciona um evento de clique ao elemento com id 'mobileMenuOverlay' para alternar o menu
document.getElementById('mobileMenuOverlay').onclick = function() {
    toggleMenu();
}
