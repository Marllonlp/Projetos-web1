const emojis = ['🚀', '🌟', '🍕', '🐶', '🚲', '🍉', '🎸', '🍦'];
let cards = [...emojis, ...emojis];
let flippedCards = [];
let matchedPairs = 0;
let score = 0;

// Função para embaralhar as cartas
function shuffleCards() {
    return cards.sort(() => Math.random() - 0.5);
}

// Função para criar o tabuleiro do jogo
function createBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    const shuffledCards = shuffleCards();

    shuffledCards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.emoji = emoji;
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    });
}

// Função para virar a carta
function flipCard() {
    if (flippedCards.length < 2 && 
        !this.classList.contains('flipped') && 
        !this.classList.contains('matched')) {
        
        this.textContent = this.dataset.emoji;
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

// Função para verificar se as cartas viradas são um par
function checkMatch() {
    const [card1, card2] = flippedCards;
    const isMatch = card1.dataset.emoji === card2.dataset.emoji;

    if (isMatch) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        updateScore(10);
    } else {
        card1.textContent = '';
        card2.textContent = '';
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        updateScore(-5);
    }

    flippedCards = [];

    // Verifica se todos os pares foram encontrados
    if (matchedPairs === emojis.length) {
        alert('Parabéns! Você completou o jogo!');
    }
}

// Função para atualizar a pontuação
function updateScore(points) {
    score += points;
    document.getElementById('score').textContent = `Pontuação: ${score}`;
}

// Função para reiniciar o jogo
function resetGame() {
    matchedPairs = 0;
    score = 0;
    document.getElementById('score').textContent = 'Pontuação: 0';
    createBoard();
}

// Cria o tabuleiro ao iniciar o jogo
createBoard();
