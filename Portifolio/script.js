// Adiciona um evento de clique ao elemento com id 'mobile-menu'
document.getElementById('mobile-menu').addEventListener('click', function() {
    // Alterna a classe 'active' do elemento com a classe 'nav-menu'
    document.querySelector('.nav-menu').classList.toggle('active');
    // Alterna a classe 'active' do próprio elemento 'mobile-menu'
    this.classList.toggle('active');
});

// Garante que o DOM esteja completamente carregado antes de executar o código
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("efeito-text");
    const textToWrite = "Desenvolvedor Web";
    let index = 0;

    // Função que simula o efeito de digitação
    function typeWriter() {
        // Verifica se ainda há caracteres para escrever
        if (index < textToWrite.length) {
            // Adiciona o próximo caractere ao conteúdo do elemento
            textElement.textContent += textToWrite.charAt(index);
            index++;
            // Chama a função typeWriter novamente após um atraso de 100ms
            setTimeout(typeWriter, 100); // Ajuste a velocidade com o valor em milissegundos
        }
    }

    // Inicia o efeito de digitação
    typeWriter();
});
